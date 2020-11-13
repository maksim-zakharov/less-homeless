import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NzAvatarModule, NzDropDownModule, NzIconModule, NzLayoutModule, NzMenuModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: 'permissions', loadChildren: () => import('./permissions/permissions.module').then(m => m.PermissionsModule)
      },
      {
        path: 'shelters', loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)
      },
      {
        path: 'employees', loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)
      },
      {
        path: 'animals', loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)
      },
      {
        path: 'adoptions', loadChildren: () => import('./animals/animals.module').then(m => m.AnimalsModule)
      },
      {
        path: 'catching', loadChildren: () => import('./catching/catching.module').then(m => m.CatchingModule)
      },
      {
        path: '**', redirectTo: 'animals'
      }
    ]
  }
];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzAvatarModule,
    NzDropDownModule
  ]
})
export class AdminModule {
}
