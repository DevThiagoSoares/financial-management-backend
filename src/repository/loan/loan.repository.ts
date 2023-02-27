import { Injectable } from '@nestjs/common';
import { Pageable } from '../../config/database/pageable.service';
import { PrismaService } from '../../config/database/prisma.service';
import ILoanRepository from './loan.repository.contract';
import { Loan } from '../../entities/loan.entity';
import { UpdateLoanDto } from 'src/dto/loan/update-loan.dto';
import { CreatePaymentDto } from 'src/dto/payment/createPayment.dto';
import { CreateNewDueDto } from 'src/dto/loan/create-new-due.dto';

@Injectable()
export class LoanRepository extends Pageable<Loan> implements ILoanRepository {
      constructor(private readonly repository: PrismaService) {
            super();
      }

      findPaymentTrue(payment_settled: boolean, clientId: string): Promise<any> {
            return this.repository.loan.findMany({
                  where: {
                        payment_settled: payment_settled,
                        clientId
                  },
                  include: {
                        client: true,
                        payment: true
                  }
            });
      }

      findPaymentFalse(): Promise<any> {
            return this.repository.loan.findMany({
                  where: {
                        payment_settled: false
                  },
                  include: {

                        payment: true
                  }
            });
      }


      update(id: string): Promise<Loan> {
            return this.repository.loan.update({
                  where: {
                        id,
                  },
                  data: {
                        payment_settled: true,
                        rest_loan: 0,
                  },
            });
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
      updateInstalment(id: string, data: CreateNewDueDto): Promise<any> {
            return this.repository.loan.update({
                  where: {
                        id,
                  },
                  data: {
                        value_loan: data.value,
                        rest_loan: data.rest_loan,
                        dueDate: data.dueDate,
                  },
            });
      }

      create(data: Loan, clientId: string): Promise<Loan> {
            return this.repository.loan.create({
                  data: {
                        id: data.id,
                        value_loan: data.value_loan,
                        interest_rate: data.interest_rate,
                        rest_loan: data.rest_loan,
                        dueDate: data.dueDate,
                        startDate: data.startDate,
                        clientId,
                  },
            });
      }
}
