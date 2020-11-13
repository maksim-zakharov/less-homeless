import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class YandexMapsApiService {

  constructor(private http: HttpService) {
  }

  searchAddress(query: string, results: number = 10): Observable<any> {
    return this.search(query, results).pipe(
      // map(components => components.components?.filter(c => !!c).map(c => ({
      //   fullAddress: components.fullAddress,
      //   country: c.find(i => i.kind === 'country')?.name,
      //   street: c.find(i => i.kind === 'street')?.name,
      //   city: c.find(i => i.kind === 'locality')?.name,
      //   house: c.find(i => i.kind === 'house')?.name
      // })))
    );
  }

  searchCity(query: string, results: number = 10): Observable<any> {
    return this.search(query, results).pipe(
      map(components => components.map(c => ({
        country: c.find(i => i.kind === 'country')?.name,
        city: c.find(i => i.kind === 'locality')?.name
      }))),
      map(cities => cities.filter(c => c.city?.toLowerCase().includes(query)))
    );
  }

  private search(query: string, results: number = 10): Observable<any> {
    return this.http.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${process.env.YANDEX_MAP_APIKEY}&format=json`, {
      params: {
        geocode: query,
        results
      }
    }).pipe(
      map(response => response.data),
      map(response =>
        response.response.GeoObjectCollection.featureMember.map(m => ({
          fullAddress: m.GeoObject.metaDataProperty.GeocoderMetaData.text,
          components: m.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components
        })))
    );
  }
}
