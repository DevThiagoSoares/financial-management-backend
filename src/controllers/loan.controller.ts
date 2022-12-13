import {
      Controller,
      Post,
      Body,
      Param,
      Delete,
      Put,
      Query,
} from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';

@Controller('loan')
export class LoanController {
      constructor(private readonly loanService: LoanService) {}

      @Post(':userId')
      create(
            @Param('userId') userId: number,
            @Body() createLoanDto: CreateLoanDto,
      ) {
            return this.loanService.create(createLoanDto, userId);
      }

      @Put()
      update(
            @Param('id') id: string,
            @Param('userId') userId: string,
            @Body() updateLoanDto: UpdateLoanDto,
      ) {
            return this.loanService.update(+id, +userId, updateLoanDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.loanService.remove(+id);
      }
}
