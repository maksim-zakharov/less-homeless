import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';
import * as helmet from 'helmet';
import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.setGlobalPrefix('api');
  app.enableCors(); // CORS
  // app.use(csurf()); // CSRF
  app.use(compression()); // Сжатие
  // app.use(helmet()); // Безопасность

  await app.listen(process.env.PORT || 4201);
}

bootstrap();
