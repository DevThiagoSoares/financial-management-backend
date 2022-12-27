import { Address } from '../../entities/address.entity';
import { Loan } from '../../entities/loan.entity';

export class FiltersClientDTO {
      id?: string;
      name?: string;
      fone?: string;
      address?: Address;
      loan?: Loan[];
}
