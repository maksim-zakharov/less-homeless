import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NZ_DATE_LOCALE, NZ_I18N, ru_RU } from 'ng-zorro-antd/i18n';
import ru from '@angular/common/locales/ru';
import * as ruDateLocale from 'date-fns/locale/ru';
import { CoreModule } from './core/core.module';
import { LayoutComponent } from './layout/layout.component';
import { AuthInterceptor } from './login/auth.interceptor';
import { InitializationGuard } from './login/initialization.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


registerLocaleData(ru);

@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    InitializationGuard,
    {provide: NZ_I18N, useValue: ru_RU},
    {provide: NZ_DATE_LOCALE, useValue: ruDateLocale}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
