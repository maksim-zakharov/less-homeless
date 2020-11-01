import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  // app.enableCors(); // CORS
  // app.use(csurf()); // CSRF
  app.use(compression()); // Сжатие
  // app.use(helmet()); // Безопасность

  const options = new DocumentBuilder()
    .setTitle('API для портала поиска бездомных животных')
    .setDescription('API для портала поиска бездомных животных')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT);
}

bootstrap();
