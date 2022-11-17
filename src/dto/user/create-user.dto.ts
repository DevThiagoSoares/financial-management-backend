import { Prisma } from '@prisma/client';
import { IsString, IsMobilePhone, Matches, IsOptional } from 'class-validator';
import { Address } from 'src/entities/address.entity';
import { Loan } from 'src/entities/loan.entity';

export class CreateUserDto {
      @IsOptional()
      id: number;

      @IsString()
      name: string;

      fone: string;

      loan: Loan;
}
