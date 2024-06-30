import { ApiProperty } from "@nestjs/swagger";

export class AuthUserDTO {
      @ApiProperty()
      id: string;
      @ApiProperty()
      name: string;
      @ApiProperty()
      login: string;
      @ApiProperty()
      isAdm: boolean;
}
