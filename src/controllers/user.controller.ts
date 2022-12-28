import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user/createUser.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('api/user')
export class UserController {
      constructor(private readonly userService: UserService) {}
      @Post()
      @HttpCode(HttpStatus.CREATED)
      create(@Body() payload: CreateUserDTO): Promise<User> {
            console.log(payload);
            return this.userService.create(payload);
      }
}
