import { CreateUserDTO } from 'src/dto/user/createUser.dto';
import { User } from '../../entities/user.entity';

export default interface IUserRepository {
      create(data: CreateUserDTO): Promise<User>;
}
