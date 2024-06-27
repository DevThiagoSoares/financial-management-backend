import { Module, forwardRef } from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientController } from '../controllers/client.controller';
import { PrismaService } from '../config/database/prisma.service';
import { ClientRepository } from 'src/repository/client/client.repository';
import { LoanModule } from './loan.module';
@Module({
      controllers: [ClientController],
      imports: [forwardRef(() => LoanModule)],
      providers: [
            ClientService,
            { provide: 'IClientRepository', useClass: ClientRepository },
      ],
      exports: [ClientService],
})
export class ClientModule {}
