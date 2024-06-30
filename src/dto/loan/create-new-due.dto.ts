import { ApiProperty } from "@nestjs/swagger";

export class CreateNewDueDto {
      @ApiProperty()
      value: number;
      @ApiProperty()
      rest_loan: number;
      @ApiProperty()
      dueDate: Date;
}
