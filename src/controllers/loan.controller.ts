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

@Controller('api/loan')
export class LoanController {
      constructor(private readonly loanService: LoanService) {}

      @Post(':clientId')
      create(
            @Param('clientId') clientId: string,
            @Body() payload: CreateLoanDto,
      ) {
            return this.loanService.create(payload, clientId);
      }

      @Get()
      findAll() {
            return this.loanService.findAll();
      }

      @Get(':id')
      findOne(@Param('id') id: string) {
            return this.loanService.findOne(id);
      }

      @Put(':id')
      update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
            return this.loanService.update(id, updateLoanDto);
      }

      @Delete(':id')
      remove(@Param('id') id: string) {
            return this.loanService.remove(id);
      }
}
