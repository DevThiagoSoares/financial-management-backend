import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Page, PageResponse } from 'src/config/database/page.model';
import { FiltersClientDTO } from 'src/dto/client/filterClient.dto';
import { MappedClientDTO } from 'src/dto/client/mappedClient.dto';
import { Address } from 'src/entities/address.entity';
import { Loan } from 'src/entities/loan.entity';
import { Client } from 'src/entities/client.entity';
import IClientRepository from 'src/repository/client/client.repository.contract';
import { CreateClientDto } from '../dto/client/createClient.dto';
import { UpdateClientDto } from '../dto/client/updateClient.dto';
import * as moment from 'moment';

@Injectable()
export class ClientService {
      constructor(
            @Inject('IClientRepository')
            private readonly clientRepository: IClientRepository,
      ) {}

      async create(props: CreateClientDto): Promise<Client> {
            const address = new Address(props.address);
            const loan = props.loan.map((loans) => new Loan(loans));
            const client = new Client({ ...props }, address, loan);
            return await this.clientRepository.create(client);
      }

      async listAll(
            page: Page,
            filters?: FiltersClientDTO,
      ): Promise<PageResponse<MappedClientDTO>> {
            const clients = await this.clientRepository.findAll(page, filters);

            if (clients.total === 0) {
                  throw new HttpException(
                        'Não existe client para esta pesquisa!',
                        HttpStatus.NOT_FOUND,
                  );
            }

            const items = this.toDTO(clients.items);

            items.map((client) => {
                  let total;

                  client.loan.forEach((item) => {
                        total = total + item.value_loan;
                  });

                  return { total, client };
            });

            return {
                  total: clients.total,
                  items,
            };
      }

      async listById(id: string) {
            const client = await this.clientRepository.findById(id);

            if (!client)
                  throw new HttpException(
                        `Não foi encontrado um client com o id: ${id}`,
                        HttpStatus.NOT_FOUND,
                  );

            return client;
      }

      async update(id: string, data: UpdateClientDto) {
            const client = await this.listById(id);

            return await this.clientRepository.update(
                  id,
                  Object.assign(client, { ...client, ...data }),
            );
      }

      async delete(id: string): Promise<Client> {
            const client = await this.listById(id);

            return await this.clientRepository.delete(client.id);
      }

      private toDTO(clients: Client[]): MappedClientDTO[] {
            return clients.map((client) => {
                  let total = 0;
                  let pagar = 0;

                  client.loan.forEach((item) => {
                        total = total + item.value_loan;
                  });

                  client.loan.forEach((item) => {
                        pagar = (total * item.interest_rate) / 100 + total;
                  });

                  return {
                        id: client.id,
                        name: client.name,
                        fone: client.fone,
                        address: client.address,
                        loan: client.loan,
                        total,
                        pagar,
                        data: moment(client.createdAt).format('DD/MM/YYYY'),
                        dataFinal: moment(client.createdAt)
                              .add(1, 'month')
                              .format('DD/MM/YY'),
                  };
            });
      }
}
