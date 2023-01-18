import { IsEAN, IsEnum, IsNumber } from 'class-validator';
import { DueDateType } from 'src/utils/ETypes';

export class CreateLoanDto {
      @IsNumber()
      value_loan: number;

      @IsNumber()
      interest_rate: number;

      @IsEnum({ DueDateType })
      dueDate: DueDateType;
}
