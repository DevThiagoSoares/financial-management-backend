import { Module } from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { LoanController } from '../controllers/loan.controller';
import { PrismaService } from '../config/database/prisma.service';

@Module({
      controllers: [LoanController],
      providers: [LoanService, PrismaService],
})
export class LoanModule {}
