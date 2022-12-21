import { Loan } from 'src/entities/loan.entity';

export default interface ILoanRepository {
      upsert(data: Loan): Promise<Loan>;
      delete(id: number): Promise<Loan>;
      update(data: Loan): Promise<Loan>;
}
