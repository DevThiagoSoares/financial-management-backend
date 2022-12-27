import { Module } from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientController } from '../controllers/client.controller';
import { PrismaService } from '../config/database/prisma.service';
import { ClientRepository } from 'src/repository/client/client.repository';
@Module({
      controllers: [ClientController],
      providers: [
            ClientService,
            { provide: 'IClientRepository', useClass: ClientRepository },
      ],
      exports: [ClientService],
})
export class ClientModule {}
