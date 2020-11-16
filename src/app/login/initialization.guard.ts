import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class InitializationGuard implements CanActivate {
  constructor(
    @Inject(PLATFORM_ID) private _platformId: Object, public _authService: AuthService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.user.id || !isPlatformBrowser(this._platformId)) {
      return true;
    }

    if (isPlatformBrowser(this._platformId) && localStorage.getItem('accessToken')) {
      this._authService.user = JSON.parse(localStorage.getItem('accessToken'));
      return this._authService
        .requestTokenUpdate()
        .toPromise()
        .then(() => true);
    }

    if (!next.data.noRedirect) {
      this._authService.logout({currentUrl: state.url});
    }
    return false;
  }
}
