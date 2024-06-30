import { ApiProperty } from "@nestjs/swagger";

export class UpdatePaymentLoan {
      @ApiProperty()
      valuePaid: number;
      @ApiProperty()
      settled: boolean;
}
