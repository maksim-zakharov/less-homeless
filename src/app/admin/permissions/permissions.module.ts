import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsComponent } from './permissions.component';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbModule, NzButtonModule, NzCardModule, NzSwitchModule, NzTransferModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';

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
