import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsEAN, IsEnum, IsNumber } from 'class-validator';
import { EFormatInstalment } from 'src/entities/loan.entity';
import { DueDateType } from 'src/utils/ETypes';

export class CreateLoanDto {
      @IsNumber()
      @ApiProperty()
      value_loan: number;

      @IsNumber()
      @ApiProperty()
      interest_rate: number;

      @IsEnum(EFormatInstalment)
      @ApiProperty()
      format_instalment: EFormatInstalment;

      @IsDate()
      @ApiProperty()
      start_date: Date;
}
