import { Transform, TransformFnParams } from 'class-transformer';
import { IsArray, IsNotEmpty, IsString, Length } from 'class-validator';
import { UpdateAddressDto } from '../address/update-address.dto';
import { UpdateLoanDto } from '../loan/update-loan.dto';

export class UpdateClientDto {
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

      address: UpdateAddressDto;

      @IsArray()
      loan: UpdateLoanDto[];
}
