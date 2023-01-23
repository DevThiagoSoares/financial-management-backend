import { CreateNewDueDto } from 'src/dto/loan/create-new-due.dto';
import { Loan } from 'src/entities/loan.entity';

export default interface ILoanRepository {
      create(data: Loan, clientId: string): Promise<Loan>;
      delete(id: string): Promise<Loan>;
      findById(id: string): Promise<Loan>;
      update(id: string): Promise<Loan>;
      updateInstalment(id: string, data: CreateNewDueDto): Promise<Loan>;
}
