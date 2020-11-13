import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YandexMapsApiService {

  constructor(private http: HttpClient) {
  }

  searchAddress(query: string, count: number = 10): Observable<any> {
    return this.http.get(`/api/search/address`
      , {params: {query, count: count.toString()}});
  }

  searchCity(query: string, count: number = 10): Observable<any> {
    return this.http.get(`/api/search/city`
      , {params: {query, count: count.toString()}});
  }
}
