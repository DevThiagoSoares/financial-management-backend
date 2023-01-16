import { Address } from '../../entities/address.entity';
import { Loan } from '../../entities/loan.entity';

export class MappedClientDTO {
      id?: string;
      name?: string;
      fone?: string;
      address?: Address;
      loan?: Loan[];
      total?: number;
      createdAt?: Date;
      data?: string;
}
