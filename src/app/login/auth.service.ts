/* tslint:disable */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, filter, first, flatMap, switchMap, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

import jwt_decode from 'jwt-decode';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userSubject: BehaviorSubject<any> = new BehaviorSubject({});

  public get user(): any {
    return this._userSubject.getValue();
  }

  public set user(value: any) {
    this._userSubject.next(value);
  }

  public get userObservable(): Observable<any> {
    return this._userSubject.asObservable();
  }

  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient) {
  }

  login(login: string, password: string): Observable<any> {
    return this.http.post('/api/auth/login', {username: login, password}).pipe(
      flatMap(user => this.updateSession(user)),
      flatMap(() => this.redirectIfNeed())
    );
  }

  register(firstName: string, lastName: string, login: string, password: string): Observable<any> {
    return this.http.post('/api/auth/register', {email: login, name: `${firstName} ${lastName}`, password}).pipe(
      flatMap(user => this.updateSession(user)),
      flatMap(() => this.redirectIfNeed())
    );
  }

  registerShelter(firstName: string, lastName: string, login: string, password: string, shelterName: string, shelterAddress: string): Observable<any> {
    return this.http.post('/api/auth/register-shelter', {email: login, name: `${firstName} ${lastName}`, password, shelterName, shelterAddress}).pipe(
      flatMap(user => this.updateSession(user)),
      flatMap(() => this.redirectIfNeed())
    );
  }

  private redirectIfNeed() {
    const url = this.activatedRoute.snapshot.queryParamMap.get('redirectUrl');
    if (url) {
      // Получаем путь
      const redirectUrl = url.split('?')[0];

      if (!url.split('?')[1]) {
        return this.router.navigate([redirectUrl]);
      }

      const params = {};
      // Получаем строку с параметрами
      url
        .split('?')[1]
        // Преобразуем строку в массив из строк с параметрами
        .split('&')
        // Берем ключи и значения и заполняем пустой объект
        .map((elem) => {
          params[elem.split('=')[0]] = elem.split('=')[1];
        });
      return this.router.navigate([redirectUrl], {queryParams: params});
    } else {
      return this.router.navigate(['']);
    }
  }

  public requestTokenUpdate(): Observable<any> {
    return this.updateSession().pipe(catchError(err => of(err)));
  }

  public logout(currentUrl?: string): Promise<boolean> {
    this._userSubject.next({});

    // Урл на котором находимся сейчас
    if (!currentUrl) {
      currentUrl = this.router.url;
    }

    // Если мы уже находимся на странице логина, никуда не редиректим
    if (currentUrl.slice(0, 6) === '/login') {
      return;
    }

    // Если мы не в руте, сохраняем редирект на текущую страницу.
    if (currentUrl && currentUrl !== '/') {
      return this.router.navigate(['/', 'login'], {queryParams: {redirectUrl: currentUrl}});
    } else {
      // Если мы в руте, сохраняем редирект на рут.
      return this.router.navigate(['/', 'login']);
    }
  }

  updateSession(tokenInfo?: any): Observable<any> {
    this.updateLocalToken(tokenInfo);
    this._userSubject.next(this.user);
    return this.http.get('/api/auth/profile').pipe(tap(user => {
      Object.assign(this.user, user);
      this._userSubject.next(this.user);
    }));
  }

  private updateLocalToken(tokenInfo?) {
    if (isPlatformBrowser(this._platformId) && tokenInfo) {
      Object.assign(this.user, tokenInfo);
      Object.assign(this.user, this.getDecodedAccessToken(tokenInfo.access_token));
      localStorage.setItem('accessToken', JSON.stringify(this.user));
    }
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (error) {
      return null;
    }
  }
}
