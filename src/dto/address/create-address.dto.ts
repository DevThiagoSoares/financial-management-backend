import { ApiProperty } from "@nestjs/swagger";

export class CreateAddressDto {
      @ApiProperty()
      street: string;
      @ApiProperty()
      district: string;
      @ApiProperty()
      number: string;
      @ApiProperty()
      city: string;
}
