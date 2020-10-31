import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpErrorResponse, HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import {
  BehaviorSubject, from, Observable, Subject, throwError,
} from 'rxjs';
import { AuthService } from './auth.service';
import {
  catchError, finalize, switchMap, tap,
} from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  isRefreshingToken = false;
  private cachedRequests$ = new BehaviorSubject<HttpRequest<any>[]>([]);

  tokenRefreshedSource = new Subject();
  tokenRefreshed$ = this.tokenRefreshedSource.asObservable();

  constructor(private authService: AuthService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any> | any> {
    if (this.authService.user.access_token) {
      request = this.addHeadersToRequest(request);
    }
    return this._sendRequest(next, request);
  }

  private _sendRequest(next, request): Observable<any> {
    return next.handle(this.addHeadersToRequest(request)).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          switch (err.status) {
            case 401:
              return this.logoutAndThrowError(err);
            case 403:
              console.log('access-denied');
              break;
            case 504:
              console.log('Gateway Timeout');
              break;
            case 502:
              console.log('Bad Gateway');
              break;
            case 500:
              console.log('Internal Server Error');
              break;
            default:
              console.log('Unknown Error');
              break; // Неизвестная ошибка
          }
        }
        throw err;
      }),
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    this.cachedRequests$.next([...this.cachedRequests$.getValue(), request]);

    return this.refreshToken().pipe(
      switchMap(token => {
        if (!this.authService.user.refresh_token) {
          return this.logoutAndThrowError(token);
        }
        return from(this.cachedRequests$.getValue());
      }),
      switchMap((request: HttpRequest<any>) => {
        request = this.addHeadersToRequest(request);
        return next.handle(request);
      }),
      finalize(() => this.cachedRequests$.next([])),
    );
  }

  private refreshToken() {
    if (this.isRefreshingToken) {
      return new Observable(observer => {
        this.tokenRefreshed$.subscribe(() => {
          observer.next();
          observer.complete();
        });
      });
    }
    this.isRefreshingToken = true;

    return this.authService.requestTokenUpdate()
      .pipe(
        tap((token) => {
            // Если токена не дали или ошибка
            if (!token || token.error) {
              this.authService.logout();
            }
            this.isRefreshingToken = false;
            this.tokenRefreshedSource.next();
          },
          catchError((error) => {
            return this.logoutAndThrowError(error);
          }),
        ),
      );
  }

  private addHeadersToRequest(request: HttpRequest<any>): HttpRequest<any> {
    const headers: { [name: string]: string | string[] } = {};

    const token = this.authService.user.access_token;
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const existAuthHeader = request.headers.get('Authorization');
    if (existAuthHeader) {
      headers.Authorization = existAuthHeader;
    }

    return request.clone({ setHeaders: headers });
  }

  private logoutAndThrowError(error): Observable<never> {
    this.tokenRefreshedSource.unsubscribe();
    this.isRefreshingToken = false;
    this.authService.logout();
    return throwError(error);
  }
}
