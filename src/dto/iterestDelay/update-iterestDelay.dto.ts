import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { DueDateType } from 'src/utils/ETypes';

export class UpdateIterestDelayDto {
      @IsNumber()
      @ApiProperty()
      @IsOptional()
      value?: number;

      @IsDateString()
      @ApiProperty()
      @IsOptional()
      payDay?: DueDateType;

      @ApiProperty()
      @IsBoolean()
      @IsOptional()
      settled?: boolean
}
