import { HttpModule, Module } from '@nestjs/common';
import { YandexMapsApiController } from './yandex-maps-api.controller';
import { YandexMapsApiService } from '../core/yandex-maps-api/yandex-maps-api.service';

@Module({
  imports: [HttpModule],
  controllers: [YandexMapsApiController],
  providers: [YandexMapsApiService]
})
export class YandexMapsApiModule {

}
