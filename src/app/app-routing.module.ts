import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InitializationGuard } from './login/initialization.guard';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registration', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'registration-shelter',
    loadChildren: () => import('./register-shelter/register-shelter.module').then(m => m.RegisterShelterModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'admin', canActivate: [InitializationGuard], loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: '',
        canActivate: [InitializationGuard],
        data: {noRedirect: true},
        loadChildren: () => import('./market/market.module').then(m => m.MarketModule)
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: 'enabled', scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
