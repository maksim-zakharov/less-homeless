import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InitializationGuard } from './login/initialization.guard';

const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'register-shelter', loadChildren: () => import('./register-shelter/register-shelter.module').then(m => m.RegisterShelterModule)
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [InitializationGuard],

    children: [
      {
        path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'market', loadChildren: () => import('./market/market.module').then(m => m.MarketModule)
      },
      {
        path: '**', redirectTo: 'admin'
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
