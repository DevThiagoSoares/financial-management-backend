import { Transform, TransformFnParams, Type } from 'class-transformer';
import { IsString, IsNotEmpty, Length, ValidateNested } from 'class-validator';
import { Address } from '../../entities/address.entity';
import { CreateLoanDto } from '../loan/create-loan.dto';

export class CreateClientDto {
      @IsString()
      @IsNotEmpty()
      @Length(3, 255)
      @Transform(({ value }: TransformFnParams) => value?.trim())
      name: string;

      @IsString()
      @IsNotEmpty()
      @Length(10, 1)
      @Transform(({ value }: TransformFnParams) => value?.trim())
      fone: string;

      address: Address;

      @ValidateNested()
      @Type(() => CreateLoanDto)
      loan: CreateLoanDto[];
}
