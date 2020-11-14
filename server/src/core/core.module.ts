import { HttpModule, Module } from '@nestjs/common';
import { YandexS3Service } from './yandex-s3/yandex-s3.service';
import { CrudService } from './crud/crud.service';

@Module({
  providers: [YandexS3Service, CrudService],
  imports: [HttpModule]
})
export class CoreModule { }
