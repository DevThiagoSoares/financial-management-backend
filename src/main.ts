import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
      const app = await NestFactory.create(AppModule);

      app.useGlobalPipes(
            new ValidationPipe({
                  transform: true,
                  whitelist: true,
                  forbidNonWhitelisted: true,
            }),
      );

      await app.listen(process.env.PORT_BACKEND, () =>
            console.log(
                  `🤖 server running on port ${process.env.PORT_BACKEND}...`,
            ),
      );
}
bootstrap();
