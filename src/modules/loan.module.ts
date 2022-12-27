import { forwardRef, Module } from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { LoanController } from '../controllers/loan.controller';
import { PrismaService } from '../config/database/prisma.service';
import { ClientModule } from './client.module';
import { AddressService } from 'src/services/address.service';
import { LoanRepository } from 'src/repository/loan/loan.repository';

@Module({
      imports: [forwardRef(() => ClientModule)],
      providers: [
            LoanService,
            {
                  provide: 'ILoanRepository',
                  useClass: LoanRepository,
            },
      ],
      controllers: [LoanController],
      exports: [LoanService],
})
export class LoanModule {}
