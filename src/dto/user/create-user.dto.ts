import { Prisma } from '@prisma/client';
import { Transform, TransformFnParams } from 'class-transformer';
import { IsString, IsOptional, IsNotEmpty, Length } from 'class-validator';
import { Address } from '../../entities/address.entity';
import { Loan } from '../../entities/loan.entity';

export class CreateUserDto {
      @IsOptional()
      id: number;

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
      loan: Loan;
}
