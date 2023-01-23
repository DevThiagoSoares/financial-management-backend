import { IsEnum, IsNumber } from 'class-validator';
import { DueDateType } from 'src/utils/ETypes';

export class CreatePaymentDto {
      @IsNumber()
      value: number;

      @IsEnum({ DueDateType })
      dueDate: DueDateType;
}
