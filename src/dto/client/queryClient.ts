import { Address } from '../../entities/address.entity';

export interface IQueryClient {
      name?: string;
      fone?: string;
      address?: Address;
}
