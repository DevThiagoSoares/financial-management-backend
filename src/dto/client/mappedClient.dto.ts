import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../entities/address.entity';
import { Loan } from '../../entities/loan.entity';
import { IsOptional } from 'class-validator';

export class MappedClientDTO {
      @IsOptional()
      @ApiProperty()
      id?: string;
      @IsOptional()
      @ApiProperty()
      name?: string;
      @IsOptional()
      @ApiProperty()
      fone?: string;
      @IsOptional()
      @ApiProperty()
      address?: Address;
      @IsOptional()
      @ApiProperty()
      loan?: Loan[];
      @IsOptional()
      @ApiProperty()
      total?: number;
      @IsOptional()
      @ApiProperty()
      createdAt?: Date;
      @IsOptional()
      @ApiProperty()
      data?: string;
}
