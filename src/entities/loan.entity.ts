import { v4 as uuid } from 'uuid';
export class Loan {
      id: string;
      value_loan: number;
      interest_rate: number;
      startDate: Date;
      dueDate: Date;
      clientId?: string;
      createdAt?: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<
                  Loan,
                  'startDate' | 'dueDate' | 'createdAt' | 'clientId' | 'id'
            >,
            startDate: Date,
            dueDate: Date,
            id?: string,
      ) {
            Object.assign(this, props);
            this.dueDate = dueDate;
            this.startDate = startDate;
            this.id = id ?? uuid();
      }
}
