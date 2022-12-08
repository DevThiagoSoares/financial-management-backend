import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { AddressModule } from './address.module';
import { LoanModule } from './loan.module';

@Module({
      imports: [
            ConfigModule.forRoot({ envFilePath: '.env' }),
            UserModule,
            AddressModule,
            LoanModule,
      ],
      controllers: [AppController],
      providers: [AppService],
})
export class AppModule {}
