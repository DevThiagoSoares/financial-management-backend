import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../entities/address.entity';
import { IsOptional } from 'class-validator';

export class IQueryClient {
      @IsOptional()
      @ApiProperty()
      name?: string;
      @IsOptional()
      @ApiProperty()
      fone?: string;
      @IsOptional()
      @ApiProperty()
      address?: Address;
}
