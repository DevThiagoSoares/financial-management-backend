import { IsDate, IsEAN, IsEnum, IsNumber } from 'class-validator';
import { EFormatInstalment } from 'src/entities/loan.entity';
import { DueDateType } from 'src/utils/ETypes';

export class CreateLoanDto {
      @IsNumber()
      value_loan: number;

      @IsNumber()
      interest_rate: number;

      @IsEnum(EFormatInstalment)
      format_instalment: EFormatInstalment;

      @IsDate()
      start_date: Date;
}
