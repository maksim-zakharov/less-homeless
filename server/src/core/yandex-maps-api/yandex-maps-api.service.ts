import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class YandexMapsApiService {

  constructor(private http: HttpService) {
  }

  searchAddress(query: string, results: number = 10): Observable<any> {
    return this.search(query, results);
  }

  searchCity(query: string, results: number = 10): Observable<any> {
    return this.search(query, results).pipe(
      // map(components => components.map(c => ({
      //   country: c.find(i => i.kind === 'country')?.name,
      //   city: c.find(i => i.kind === 'locality')?.name
      // }))),
      map(cities =>
        cities
          .filter(c => c.components.find(cs => cs.kind === 'country')?.name.toLowerCase().includes('россия'))
          .filter(c => c.city?.toLowerCase().includes(query.toLowerCase()))
          .map(result => {
            const {components, ...nonComponents} = result;
            return nonComponents;
          })
      )
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
          address: m.GeoObject.metaDataProperty.GeocoderMetaData.text.replace('Россия, ', ''),
          components: m.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components,
          longitude: +m.GeoObject.Point.pos.split(' ')[0],
          latitude: +m.GeoObject.Point.pos.split(' ')[1],
          city: m.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(i => i.kind === 'locality')?.name
            || m.GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.filter(i => i.kind === 'province').pop()?.name
        })))
    );
  }
}
