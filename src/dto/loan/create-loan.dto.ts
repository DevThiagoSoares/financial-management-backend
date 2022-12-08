import { IsNumber } from 'class-validator';

export class CreateLoanDto {
      @IsNumber()
      value_loan: number;
}
