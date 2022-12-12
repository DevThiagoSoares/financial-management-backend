import { FiltersUserDTO } from '../../dto/user/filterUser.dto';
import { Page, PageResponse } from '../../config/database/page.model';
import { User } from '../../entities/user.entity';
import { Loan } from 'src/entities/loan.entity';

export default interface ILoanRepository {
      create(data: Loan): Promise<Loan>;
      delete(id: number): Promise<Loan[]>;
      findById(id: number): Promise<Loan[]>;
      update(data: Loan[]): Promise<Loan[]>;
}
