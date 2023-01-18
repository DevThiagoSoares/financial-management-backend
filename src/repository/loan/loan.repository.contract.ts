import { Loan } from 'src/entities/loan.entity';

export default interface ILoanRepository {
      create(data: Loan, clientId: string): Promise<Loan>;
      delete(id: string): Promise<Loan>;
      findById(id: string): Promise<Loan>;
      updateInstalment(id: string, value: number): Promise<Loan>;
}
