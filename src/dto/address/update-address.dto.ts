import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UpdateAddressDto {
      @ApiProperty()
      street: string;
      @ApiProperty()
      district: string;
      @ApiProperty()
      number: string;
      @ApiProperty()
      city: string;
}
