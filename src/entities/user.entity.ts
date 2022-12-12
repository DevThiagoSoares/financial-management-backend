import { Address } from './address.entity';
import { Loan } from './loan.entity';

export class User {
      id?: number;
      name: string;
      fone: string;
      address?: Address;
      loan?: Loan[];
}
