import { Injectable } from '@nestjs/common';
import { generateQueryByFiltersForClient } from '../../config/database/Queries';
import { Page, PageResponse } from '../../config/database/page.model';
import { Pageable } from '../../config/database/pageable.service';
import { PrismaService } from '../../config/database/prisma.service';
import { FiltersClientDTO } from '../../dto/client/filterClient.dto';
import { Client } from '../../entities/client.entity';
import IClientRepository from './client.repository.contract';
import { Loan } from '../../entities/loan.entity';
import { UpdateClientDto } from '../../dto/client/updateClient.dto';

@Injectable()
export class ClientRepository
      extends Pageable<Client>
      implements IClientRepository
{
      constructor(private readonly repository: PrismaService) {
            super();
      }
      findById(id: string): Promise<Client> {
            return this.repository.client.findUnique({
                  where: { id },
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }
      async findAll(
            page: Page,
            filters?: FiltersClientDTO,
      ): Promise<PageResponse<Client>> {
            const condition = generateQueryByFiltersForClient(filters);

            const items = condition
                  ? await this.repository.client.findMany({
                          ...this.buildPage(page),
                          where: condition,
                          include: {
                                address: true,
                                loan: true,
                          },
                    })
                  : await this.repository.client.findMany({
                          ...this.buildPage(page),
                          include: {
                                address: true,
                                loan: true,
                          },
                    });

            const total = condition
                  ? await this.repository.client.findMany({
                          where: {
                                ...condition,
                          },
                    })
                  : await this.repository.client.count();

            return this.buildPageResponse(
                  items,
                  Array.isArray(total) ? total.length : total,
            );
      }

      create(data: Client): Promise<Client> {
            return this.repository.client.create({
                  data: {
                        id: data.id,
                        name: data.name,
                        fone: data.fone,
                        address: {
                              create: {
                                    id: data.address.id,
                                    city: data.address.city,
                                    district: data.address.district,
                                    number: data.address.number,
                                    street: data.address.street,
                              },
                        },
                        loan: {
                              createMany: {
                                    data: data.loan.map<Loan>((loan) => ({
                                          id: loan.id,
                                          value_loan: loan.value_loan,
                                          interest_rate: loan.interest_rate,
                                          dueDate: loan.dueDate,
                                          startDate: loan.startDate,
                                    })),
                              },
                        },
                  },
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }
      delete(id: string): Promise<Client> {
            return this.repository.client.delete({
                  where: { id },
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }

      update(id: string, data: UpdateClientDto): Promise<Client | null> {
            return this.repository.client.update({
                  where: {
                        id,
                  },
                  data: {
                        name: data.name,
                        fone: data.fone,
                        address: {
                              update: {
                                    city: data.address.city,
                                    district: data.address.district,
                                    number: data.address.number,
                                    street: data.address.street,
                              },
                        },
                        // loan: {
                        //       update: {
                        //             where: {
                        //                   id: data.loan.id,
                        //             },
                        //             data: {
                        //                   value_loan:data.loan
                        //             },
                        //       },
                        // },
                  },
                  include: {
                        address: true,
                        loan: true,
                  },
            });
      }
}
