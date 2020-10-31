import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USERNAME || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'admin',
  database: process.env.POSTGRES_DATABASE || 'postgres',
  autoLoadEntities: true,
  synchronize: true,
  migrations: [
    'server/src/migration/**/*.ts'
  ],
  cli: {
    migrationsDir: 'server/src/migration',
  }
};

export = config;
