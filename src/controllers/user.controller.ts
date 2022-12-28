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
import { RolesGuard } from 'src/config/authentication/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { CreateUserDTO } from 'src/dto/user/createUser.dto';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { Role } from 'src/utils/ETypes';

@Controller('api/user')
export class UserController {
      constructor(private readonly userService: UserService) {}
      @Post()
      @Roles(Role.Admin)
      @HttpCode(HttpStatus.CREATED)
      create(@Body() payload: CreateUserDTO): Promise<User> {
            return this.userService.create(payload);
      }

      @Get(':login')
      // @UseGuards(JwtAuthGuard, RolesGuard)
      // @Roles(Role.Admin)
      findOne(@Param('login') login: string) {
            return this.userService.findOne(login);
      }
}
