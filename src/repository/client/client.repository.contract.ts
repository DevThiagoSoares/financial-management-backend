import { FiltersClientDTO } from '../../dto/client/filterClient.dto';
import { Page, PageResponse } from '../../config/database/page.model';
import { Client } from '../../entities/client.entity';
import { UpdateClientDto } from 'src/dto/client/updateClient.dto';

export default interface IClientRepository {
      create(data: Client): Promise<Client>;
      delete(id: string): Promise<Client>;
      findAllPaymentTrue(
            page: Page,
            filters?: FiltersClientDTO,
      ): Promise<PageResponse<Client>>;
      findAllPaymentFalse(
            page: Page,
            filters?: FiltersClientDTO,
      ): Promise<PageResponse<Client>>;
      findById(id: string): Promise<Client>;
      //   findByCpf(cpf: string): Promise<Client>;
      update(id: string, data: UpdateClientDto): Promise<Client>;
}
