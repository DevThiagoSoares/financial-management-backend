import { Module } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserModule } from '../modules/user.module';
import { LocalStrategy } from '../config/authentication/strategys/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../config/authentication/strategys/jwt.strategy';
import { AuthController } from '../controllers/auth.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
      imports: [
            ConfigModule.forRoot({ envFilePath: '.env' }),
            UserModule,
            PassportModule,
            JwtModule.register({
                  secret: process.env.JWT_SECRET,
                  signOptions: { expiresIn: '60d' },
            }),
      ],
      providers: [AuthService, LocalStrategy, JwtStrategy],
      exports: [AuthService],
      controllers: [AuthController],
})
export class AuthModule {}
