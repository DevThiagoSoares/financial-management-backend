import { v4 as uuid } from 'uuid';
export class Loan {
      id: string;
      value_loan: number;
      interest_rate: number;
      clientId?: string;
      createdAt?: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<Loan, 'id' | 'createdAt' | 'clientId'>,
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id ?? uuid();
      }
}
