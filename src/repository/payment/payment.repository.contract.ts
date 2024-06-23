import { UpdatePaymentLoan } from 'src/dto/loan/update-payment.dto';
import { Loan } from 'src/entities/loan.entity';
import { Payment } from 'src/entities/payment.entity';

export default interface IPaymentRepository {
      create(data: Payment, loanId: string): Promise<Payment | null>;
      findById(id: string): Promise<Payment | null>;
      updateInstalment(id: string, payload: UpdatePaymentLoan): Promise<void>;
}
