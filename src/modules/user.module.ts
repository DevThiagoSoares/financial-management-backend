import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { UserRepository } from 'src/repository/user/user.repository';
import { UserService } from 'src/services/user.service';

@Module({
      controllers: [UserController],
      providers: [
            UserService,
            {
                  provide: 'IUserRepository',
                  useClass: UserRepository,
            },
      ],
      exports: [UserService],
})
export class UserModule {}
