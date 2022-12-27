import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientModule } from './client.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AddressModule } from './address.module';
import { LoanModule } from './loan.module';
import { RepositoryModule } from './repository.module';

@Module({
      imports: [
            ConfigModule.forRoot({ envFilePath: '.env' }),
            ClientModule,
            AddressModule,
            LoanModule,
            RepositoryModule,
      ],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}
