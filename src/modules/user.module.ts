import { Module } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserController } from '../controllers/user.controller';
import { PrismaService } from '../config/database/prisma.service';
import { UserRepository } from 'src/repository/user/user.repository';
@Module({
      controllers: [UserController],
      providers: [
            UserService,
            PrismaService,
            { provide: 'IUserRepository', useClass: UserRepository },
      ],
      exports: [UserService],
})
export class UserModule {}
