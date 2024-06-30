import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
      const app = await NestFactory.create(AppModule);

      const config = new DocumentBuilder()
            .setTitle('Financeira API')
            .setDescription('API gerenciamento de emprestimos a juros')
            .setVersion('1.2')
            .addTag('Auth', 'Métodos para autenticação de usuários')
            .addTag('User', 'Métodos para o gerenciamento de usuarios')
            .addTag('Client', 'Métodos para o gerenciamento de clientes')
            .addTag('Loan', 'Métodos para o gerenciamento de pagamento de empréstimos')
            .addTag('Address', 'Métodos para o gerenciamento de endereços')
            .addTag("IterestDelay", 'Métodos para o gerenciamento de Juros Mora.')
            .addBearerAuth({
                  type: 'http',
                  scheme: 'bearer',
                  bearerFormat: 'JWT',
                })
            .build();

      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('swagger', app, document, {
            swaggerOptions: {
                  persistAuthorization: true,
            },
      });

      app.enableCors({
            allowedHeaders: '*',
            origin: '*',
      });

      await app.listen(process.env.PORT, () => {
            console.log(`🤖 server running on port ${process.env.PORT}...`,);
            console.log(`🚀 Swagger running on http://localhost:${process.env.PORT}/swagger`);
      }
      );
}
bootstrap();
