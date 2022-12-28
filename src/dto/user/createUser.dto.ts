import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO {
      @IsString()
      name: string;

      @IsString()
      login: string;

      @IsString()
      @MinLength(4)
      @MaxLength(20)
      @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
            message: 'password too weak',
      })
      password: string;

      isAdm: boolean;
}
