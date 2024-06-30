import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsNumber, IsString } from 'class-validator';
import { DueDateType } from 'src/utils/ETypes';

export class UpdateIterestDelayDto {
      @IsNumber()
      @ApiProperty()
      value: number;

      @IsDateString()
      @ApiProperty()
      payDay: DueDateType;

}
