import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { Loan } from 'src/entities/loan.entity';
import ILoanRepository from 'src/repository/loan/loan.repository.contract';
import { DueDateType } from 'src/utils/ETypes';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';
import { ClientService } from './client.service';
import * as moment from 'moment';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from 'src/dto/payment/createPayment.dto';
import { UpdatePaymentLoan } from 'src/dto/loan/update-payment.dto';

@Injectable()
export class LoanService {
      constructor(
            @Inject('ILoanRepository')
            private readonly loanRepository: ILoanRepository,
            private readonly clientService: ClientService,
            private readonly paymentService: PaymentService,
      ) {}

      async create(payload: CreateLoanDto, clientId: string) {
            const client = await this.clientService.listById(clientId);

            const startDate = new Date();

            const dueDate =
                  payload.dueDate == DueDateType.ONE_WEEK
                        ? moment(startDate).add(1, 'week').toDate()
                        : moment(startDate).add(1, 'month').toDate();

            payload.rest_loan =
                  (payload.value_loan * payload.interest_rate) / 100 +
                  payload.value_loan;
            const loan = new Loan(payload, startDate, dueDate);

            const installments =
                  payload.dueDate == DueDateType.ONE_WEEK ? 1 : 4;
            const loanCreated = await this.loanRepository.create(
                  loan,
                  client.id,
            );
            for (let i = 0; i < installments; i++) {
                  const value = loan.rest_loan / installments;
                  const dueDate = moment(startDate)
                        .add(i + 1, 'week')
                        .toDate();

                  await this.paymentService.create(value, loan.id, dueDate);
            }

            return loanCreated;
      }

      async findTrue(payment_settled: string, clientId: string) {
            let booleanPayment_settled =
                  payment_settled == 'true' ? true : false;

            await this.clientService.listById(clientId);

            return this.loanRepository.findPaymentTrue(
                  booleanPayment_settled,
                  clientId,
            );
      }

      findFalse() {
            return this.loanRepository.findPaymentFalse();
      }

      async findOne(id: string) {
            const loan = await this.loanRepository.findById(id);

            if (!loan)
                  throw new HttpException(
                        `Não foi encontrado um empréstimo com o id: ${id}`,
                        HttpStatus.NOT_FOUND,
                  );
            return loan;
      }

      async updateLoanSettle(id: string) {
            const loan = await this.findOne(id);
            return await this.loanRepository.update(loan.id);
      }

      async remove(id: string) {
            const loan = await this.findOne(id);
            return await this.loanRepository.delete(loan.id);
      }

      async updateInstalment(id: string, payload: UpdatePaymentLoan) {
            const payment = await this.paymentService.findById(id);

            if (!payment)
                  throw new HttpException(
                        `Não foi encontrado um pagamento com o id: ${id}`,
                        HttpStatus.NOT_FOUND,
                  );
            if (payment.settled)
                  throw new HttpException(
                        `O pagamento com o id: ${id} já foi liquidado`,
                        HttpStatus.BAD_REQUEST,
                  );
            if (payload.valuePaid > payment.value)
                  throw new HttpException(
                        `O valor pago é maior que o valor da parcela`,
                        HttpStatus.BAD_REQUEST,
                  );

            await this.paymentService.updateInstalment(payment.id, payload);

            await this.loanRepository.updateRestLoan(
                  payment.loanId,
                  payment.loan.rest_loan - payload.valuePaid,
            );

            return {
                  message: 'Instalment updated',
            };
      }
}
