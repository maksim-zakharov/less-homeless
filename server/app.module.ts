import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './src/animals/animals.module';
import { CoreModule } from './src/core/core.module';
import { AuthModule } from './src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { YandexMapsApiModule } from './src/yandex-maps-api/yandex-maps-api.module';
import { AppServerModule } from '../src/main.server';

@Module({
  imports: [
    ConfigModule.forRoot(), // load .env file
    CoreModule,
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/browser'),
      // bundle: require('../server/main'),
      // liveReload: false,
      cache: true
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USERNAME || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'admin',
      database: process.env.POSTGRES_DATABASE || 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }),
    YandexMapsApiModule,
    AnimalsModule,
    AuthModule
  ]
})
export class ApplicationModule {
}
