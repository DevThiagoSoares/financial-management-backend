import { Inject, Injectable } from '@nestjs/common';
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
            return await this.userRepository.create(new User({ ...data }));
      }
}
