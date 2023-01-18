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
      delete(id: string): Promise<Loan> {
            return this.repository.loan.delete({
                  where: {
                        id,
                  },
            });
      }
      findById(id: string): Promise<Loan> {
            return this.repository.loan.findUnique({
                  where: {
                        id,
                  },
            });
      }
      updateInstalment(id: string, value: number): Promise<any> {
            return this.repository.loan.update({
                  where: {
                        id,
                  },
                  data: {
                        rest_loan: value,
                  },
            });
      }

      create(data: Loan, clientId: string): Promise<Loan> {
            return this.repository.loan.create({
                  data: {
                        id: data.id,
                        value_loan: data.value_loan,
                        interest_rate: data.interest_rate,
                        rest_loan: data.value_loan,
                        dueDate: data.dueDate,
                        startDate: data.startDate,
                        clientId,
                  },
            });
      }
}
