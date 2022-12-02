
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { NZ_I18N, NzI18nModule, ru_RU } from 'ng-zorro-antd/i18n';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptorService } from './core/universal-interceptor.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    NzI18nModule
],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptorService,
      multi: true // <-- important (you can have many interceptors)
    },
    {provide: NZ_I18N, useValue: ru_RU}
  ]
})
export class AppServerModule {
}
