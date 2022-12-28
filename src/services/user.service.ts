import { Inject, Injectable } from '@nestjs/common';
import { AuthUserDTO } from 'src/dto/user/authUser.dto';
import { CreateUserDTO } from 'src/dto/user/createUser.dto';
import { User } from 'src/entities/user.entity';
import IUserRepository from 'src/repository/user/user.repository.contract';

@Injectable()
export class UserService {
      constructor(
            @Inject('IUserRepository')
            private readonly userRepository: IUserRepository,
      ) {}

      async create(data: CreateUserDTO): Promise<User> {
            const user = { ...data };
            return await this.userRepository.create(new User(user));
      }

      async findOne(login: string): Promise<User> {
            return await this.userRepository.findByLogin(login);
      }
}
