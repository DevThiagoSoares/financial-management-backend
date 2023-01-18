import { Loan } from './loan.entity';
import { v4 as uuid } from 'uuid';

export class Payment {
      id: string;
      value: number;
      loan: Loan;
      loanId: string;
      createdAt?: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<Payment, 'loan' | 'id' | 'createdAt'>,
            loanId: string,
            id?: string,
      ) {
            Object.assign(this, props);
            this.loanId = loanId;
            this.id = id ?? uuid();
      }
}
