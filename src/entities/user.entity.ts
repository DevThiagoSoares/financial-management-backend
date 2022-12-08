import { Address } from './address.entity';
import { Loan } from './loan.entity';

export class User {
      id?: number;
      name: string;
      fone: string;
      address?: Address;
      loan?: Loan;
      createdAt?: Date;
      updatedAt?: Date;

      constructor(
            props: Omit<User, 'id' | 'createdAt'>,

            id?: number,
      ) {
            Object.assign(this, props);
            this.createdAt = new Date();
      }
}
