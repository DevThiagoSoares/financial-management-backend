import { Address } from '../../entities/address.entity';
import { Loan } from '../../entities/loan.entity';

export class MappedUserDTO {
      id?: number;
      name?: string;
      fone?: string;
      address?: Address;
      loan?: Loan[];
}
