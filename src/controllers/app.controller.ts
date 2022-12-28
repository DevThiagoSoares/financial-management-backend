import { Controller, Get } from '@nestjs/common';
import { IsPublic } from '../decorators/public.decorator';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
      constructor(private readonly appService: AppService) {}

      @IsPublic()
      @Get()
      getHello(): string {
            return this.appService.getHello();
      }
}
