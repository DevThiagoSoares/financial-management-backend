import { IsString, IsMobilePhone, Matches, IsOptional } from 'class-validator';
import { Address } from 'src/entities/address.entity';
import { Loan } from 'src/entities/loan.entity';

export class CreateUserDto {
      @IsOptional()
      id: string;

      @IsString()
      name: string;

      @Matches(
            /^((\+?55\ ?[1-9]{2}\ ?)|(0[1-9]{2}\ ?)|(\([1-9]{2}\)\ ?)|([1-9]{2}\ ?))((\d{4}\-?\d{4})|(9[6-9]{1}\d{3}\-?\d{4}))$/,
      )
      fone: string;

      address: Address;
      loan: Loan;
}
