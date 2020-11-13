import { HttpModule, Module } from '@nestjs/common';
import { YandexS3Service } from './yandex-s3/yandex-s3.service';

@Module({
  providers: [YandexS3Service],
  imports: [HttpModule]
})
export class CoreModule { }
