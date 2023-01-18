import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from 'src/dto/payment/createPayment.dto';
import { Payment } from 'src/entities/payment.entity';
import IPaymentRepository from 'src/repository/payment/payment.repository.contract';
@Injectable()
export class PaymentService {
      constructor(
            @Inject('IPaymentRepository')
            private readonly repository: IPaymentRepository,
      ) {}

      async create(payload: CreatePaymentDto, loanId: string) {
            const loan = await this.repository.create(
                  new Payment({ ...payload, loanId }, loanId),
                  loanId,
            );
            return loan;
      }
}
