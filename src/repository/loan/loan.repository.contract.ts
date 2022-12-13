import { Loan } from 'src/entities/loan.entity';

export default interface ILoanRepository {
      create(arg0: { data: { LoanId: number; value_loan: number } }): unknown;
      upsert(data: Loan): Promise<Loan>;
      delete(id: number): Promise<Loan>;
      update(data: Loan): Promise<Loan>;
}
