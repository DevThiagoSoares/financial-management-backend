import { Loan } from './loan.entity';
import { v4 as uuid } from 'uuid';

export class IterestDelay {
      id: string;
      value: number;
      payDay: Date;
      paymentId: string;
      createdAt?: Date;
      updatedAt?: Date | null;

      constructor(
            props: Omit<IterestDelay, 'id' | 'createdAt'>,
            id?: string,
      ) {
            Object.assign(this, props);
            this.id = id ?? uuid();
      }
}
