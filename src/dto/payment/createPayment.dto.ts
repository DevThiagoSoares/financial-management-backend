import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber } from 'class-validator';
import { DueDateType } from 'src/utils/ETypes';

export class CreatePaymentDto {
      @IsNumber()
      @ApiProperty()
      value: number;

      @IsEnum({ DueDateType })
      @ApiProperty()
      dueDate: DueDateType;
}
