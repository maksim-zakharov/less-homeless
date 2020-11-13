import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzCardModule, NzDividerModule, NzFormModule, NzInputModule } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  }
];
@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzFormModule,
    NzCardModule,
    NzButtonModule,
    NzDividerModule
  ]
})
export class RegisterModule { }
