import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
      const app = await NestFactory.create(AppModule);
      await app.listen(process.env.PORT_BACKEND, () =>
            console.log(
                  `🤖 server running on port ${process.env.PORT_BACKEND}...`,
            ),
      );
}
bootstrap();
