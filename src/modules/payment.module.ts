import { Module } from '@nestjs/common';
import { PaymentRepository } from 'src/repository/payment/payment.repository';
import { PaymentService } from 'src/services/payment.service';

@Module({
      providers: [
            PaymentService,
            { provide: 'IPaymentRepository', useClass: PaymentRepository },
      ],
      exports: [PaymentService],
})
export class PaymentModule {}
