import {
      Body,
      Controller,
      Get,
      HttpCode,
      HttpStatus,
      Param,
      Post,
      UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/config/authentication/guards/jwtAuth.guard';
import { IsPublic } from 'src/decorators/public.decorator';
import { CreateUserDTO } from 'src/dto/user/createUser.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';

@Controller('api/user')
export class UserController {
      constructor(private readonly userService: UserService) {}
      @IsPublic()
      @Post()
      @HttpCode(HttpStatus.CREATED)
      create(@Body() payload: CreateUserDTO): Promise<User> {
            return this.userService.create(payload);
      }

      @Get(':login')
      @UseGuards(JwtAuthGuard)
      findOne(@Param('login') login: string) {
            return this.userService.findOne(login);
      }
}
