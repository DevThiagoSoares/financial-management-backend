import { v4 as uuid } from 'uuid';
export class Loan {
      id?: string;
      value_loan: number;
      userId: number;
      createdAt: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<Loan, 'id' | 'userId' | 'createdAt'>,
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id = id ?? uuid();
      }
}
