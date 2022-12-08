import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/database/prisma.service';
import { CreateLoanDto } from '../dto/loan/create-loan.dto';
import { UpdateLoanDto } from '../dto/loan/update-loan.dto';

@Injectable()
export class LoanService {
      constructor(private readonly prisma: PrismaService) {}

      create(data: CreateLoanDto, userId: number) {
            console.log(data);
            return this.prisma.loan.create({
                  data: {
                        userId: +userId,
                        value_loan: data.value_loan,
                  },
            });
      }

      findAll() {
            return `This action returns all loan`;
      }

      findOne(id: number) {
            return `This action returns a #${id} loan`;
      }

      update(id: number, updateLoanDto: UpdateLoanDto) {
            return `This action updates a #${id} loan`;
      }

      remove(id: number) {
            return `This action removes a #${id} loan`;
      }
}
