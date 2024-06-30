import { forwardRef, Module } from '@nestjs/common';
import { LoanService } from '../services/loan.service';
import { LoanController } from '../controllers/loan.controller';
import { PrismaService } from '../config/database/prisma.service';
import { ClientModule } from './client.module';
import { LoanRepository } from 'src/repository/loan/loan.repository';
import { PaymentModule } from './payment.module';
import { IterestDelayService } from 'src/services/iterestDelay.service';
import { IterestDelayRepository } from 'src/repository/iterestDelay/iterestDelay.repository';
import { IterestDelayController } from 'src/controllers/iterestDelay.controller ';

@Module({
      imports: [],
      providers: [
            IterestDelayService,
            {
                  provide: 'IIterestDelayRepository',
                  useClass: IterestDelayRepository,
            },
      ],
      controllers: [IterestDelayController],
      exports: [IterestDelayService],
})
export class IterestDelayModule {}
