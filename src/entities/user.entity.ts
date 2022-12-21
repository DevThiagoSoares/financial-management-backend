import { Address } from './address.entity';
import { Loan } from './loan.entity';
import { v4 as uuid } from 'uuid';

export class User {
      id?: number;
      name: string;
      fone: string;
      address: Address;
      loan: Loan[];

      constructor(
            props: Omit<
                  Loan,
                  'id' | 'userId' | 'createdAt' | 'address' | 'loan'
            >,
            address: Address,
            loan: Loan[],
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id = id ?? uuid();
            (this.address = address), (this.loan = loan);
      }
}
