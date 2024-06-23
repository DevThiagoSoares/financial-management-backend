import {
      Controller,
      Get,
      Post,
      Body,
      Param,
      Delete,
      Put,
} from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';
import { UpdatePaymentLoan } from 'src/dto/loan/update-payment.dto';

@Controller('api/loan')
export class LoanController {
      constructor(private readonly loanService: LoanService) {}

      @Post('/:clientId')
      create(
            @Param('clientId') clientId: string,
            @Body() payload: CreateLoanDto,
      ) {
            return this.loanService.create(payload, clientId);
      }

      @Get('/false')
      findFalse() {
            return this.loanService.findFalse();
      }

      @Get(':payment_settled/:clientId')
      findTrue(
            @Param('payment_settled') payment_settled: string,
            @Param('clientId') clientId: string,
      ) {
            return this.loanService.findTrue(payment_settled, clientId);
      }

      @Get(':id')
      findOne(@Param('id') id: string) {
            return this.loanService.findOne(id);
      }

      @Put(':id')
      update(@Param('id') id: string) {
            return this.loanService.updateLoanSettle(id);
      }

      @Put('/instalment/:id')
      async updateInstalment(
            @Param('id') id: string,
            @Body() payload: UpdatePaymentLoan,
      ) {
            await this.loanService.updateInstalment(id, payload);
            return {
                  message: 'Instalment updated',
            };
      }
      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.loanService.remove(id);
      }
}
