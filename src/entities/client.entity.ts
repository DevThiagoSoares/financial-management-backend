import { v4 as uuid } from 'uuid';
import { Address } from './address.entity';
import { Loan } from './loan.entity';

export class Client {
      id: string;
      name: string;
      fone: string;
      address: Address;
      loan: Loan[];
      createdAt?: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<Client, 'id' | 'createdAt' | 'address' | 'loan'>,
            address: Address,
            loan: Loan[],
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id ?? uuid();
            (this.address = address), (this.loan = loan);
      }
}
