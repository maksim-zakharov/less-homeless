import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class CatchingService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private readonly platformId: object) {
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/api/orders`);
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(`/api/orders/${id}`);
  }

  deleteOrderById(id: number): Observable<void> {
    return this.http.delete<void>(`/api/orders/${id}`);
  }
}
