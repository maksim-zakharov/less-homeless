import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalsModule } from './src/animals/animals.module';
import { CoreModule } from './src/core/core.module';
import { AuthModule } from './src/auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // load .env file
    CoreModule,
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: false,
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
    AnimalsModule,
    AuthModule
  ]
})
export class ApplicationModule {
}
