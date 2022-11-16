import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { UserModule } from './user.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
