import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';

const routes: Routes = [
  {path: '', component: PermissionsComponent},
];

@NgModule({
  declarations: [PermissionsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzCardModule,
    NzTransferModule,
    NzSwitchModule,
    FormsModule
  ]
})
export class PermissionsModule {
}
