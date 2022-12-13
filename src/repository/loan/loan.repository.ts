import { Injectable } from '@nestjs/common';
import { Pageable } from '../../config/database/pageable.service';
import { PrismaService } from '../../config/database/prisma.service';
import ILoanRepository from './loan.repository.contract';
import { Loan } from '../../entities/loan.entity';

@Injectable()
export class LoanRepository extends Pageable<Loan> implements ILoanRepository {
      constructor(private readonly repository: PrismaService) {
            super();
      }
      upsert(data: Loan): Promise<Loan> {
            return this.repository.loan.upsert({
                  where: {
                        id: data.userId,
                  },
                  update: {
                        value_loan: data.value_loan,
                  },
                  create: {
                        value_loan: data.value_loan,
                        userId: data.userId,
                  },
            });
      }

      delete(id: number): Promise<Loan> {
            return this.repository.loan.delete({
                  where: { id },
            });
      }
      update(data: Loan): Promise<Loan> {
            return this.repository.loan.update({
                  where: {
                        id: data.id,
                  },
                  data: {
                        value_loan: data.value_loan,
                        userId: data.userId,
                  },
            });
      }
}
