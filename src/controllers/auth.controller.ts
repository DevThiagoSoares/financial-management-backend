import {
      Controller,
      Request,
      Post,
      UseGuards,
      Get,
      HttpCode,
      HttpStatus,
      Body,
} from '@nestjs/common';

import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../config/authentication/guards/localAuth.guard';
import { JwtAuthGuard } from '../config/authentication/guards/jwtAuth.guard';
import { IsPublic } from 'src/decorators/public.decorator';
import { AuthRequest } from 'src/dto/user/authRequest.dto';
import { AuthGuard } from '@nestjs/passport';
import { UserToken } from 'src/dto/auth/userToken.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
      constructor(private authService: AuthService) {}

      @ApiOperation({
            summary: 'Login',
            description:
                'Utilize este endpoint para realizar o login.',
        })
      @IsPublic()
      @UseGuards(LocalAuthGuard)
      @Post('login')
      @HttpCode(HttpStatus.OK)
      async login(@Request() req: AuthRequest) {
            return this.authService.login(req.user);
            /* console.log(req);
            return req; */
      }

      @ApiOperation({
            summary: 'Profile',
            description:
                'Utilize este endpoint para obter o perfil do usuário.',
        })
      @UseGuards(JwtAuthGuard)
      @Get('profile')
      getProfile(@Request() req) {
            return req.user;
      }

      @ApiOperation({
            summary: 'Logout',
            description:
                'Utilize este endpoint para realizar o logout.',
        })
      @IsPublic()
      @Post('/verify/token')
      async verify(@Body() payload: UserToken) {
            console.log(payload);
            return this.authService.decodeJWT(payload.access_token);
      }
}
