import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { AuthUserDTO } from 'src/dto/user/authUser.dto';
import { UserToken } from 'src/dto/auth/userToken.dto';
import { UserPayload } from 'src/dto/auth/userPayload.dto';

@Injectable()
export class AuthService {
      constructor(
            private userService: UserService,
            private jwtService: JwtService,
      ) {}

      async validateUser(loginUser: string, pass: string): Promise<User> {
            const user = await this.userService.findOne(loginUser);
            if (user && user.password === pass) {
                  const { password, ...users } = user;
                  return { ...users, password: undefined };
            }
            return null;
      }

      async login(user: User): Promise<any> {
            const payload: UserPayload = {
                  login: user.login,
                  id: user.id,
                  name: user.name,
                  isAdm: user.isAdm,
            };
            return {
                  ...payload,
                  access_token: this.jwtService.sign(payload),
            };
      }
}
