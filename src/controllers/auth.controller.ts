import {
      Controller,
      Request,
      Post,
      UseGuards,
      Get,
      HttpCode,
      HttpStatus,
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../config/authentication/guards/localAuth.guard';
import { JwtAuthGuard } from '../config/authentication/guards/jwtAuth.guard';
import { IsPublic } from 'src/decorators/public.decorator';
import { User } from 'src/entities/user.entity';
import { AuthRequest } from 'src/dto/user/authRequest.dto';
import { RolesGuard } from 'src/config/authentication/guards/roles.guard';

@Controller('auth')
export class AuthController {
      constructor(private authService: AuthService) {}

      @IsPublic()
      @UseGuards(LocalAuthGuard)
      @Post('login')
      @HttpCode(HttpStatus.OK)
      async login(@Request() req: AuthRequest) {
            return this.authService.login(req.user);
      }

      @UseGuards(JwtAuthGuard)
      @Get('profile')
      getProfile(@Request() req) {
            return req.user;
      }
}
