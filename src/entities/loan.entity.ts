import { Prisma } from '@prisma/client';

export class Loan implements Prisma.LoanUncheckedCreateInput {
      id?: number;
      value_loan: number;
      userId: number;
      createdAt?: string | Date;
      updatedAt?: string | Date;
}
