import { Controller, Get, Query } from '@nestjs/common';
import { YandexMapsApiService } from '../core/yandex-maps-api/yandex-maps-api.service';
import { Observable } from 'rxjs';

@Controller('search')
export class YandexMapsApiController {

  constructor(private yandexMapsApiService: YandexMapsApiService) {
  }

  @Get('city')
  searchCity(@Query('query') query: string, @Query('count') results: number): Observable<any> {
    return this.yandexMapsApiService.searchCity(query, results);
  }

  @Get('address')
  searchAddress(@Query('query') query: string, @Query('count') results: number): Observable<any> {
    return this.yandexMapsApiService.searchAddress(query, results);
  }
}
