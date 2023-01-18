import { Loan } from 'src/entities/loan.entity';
import { Payment } from 'src/entities/payment.entity';

export default interface IPaymentRepository {
      create(data: Payment, loanId: string): Promise<Payment | null>;
}
