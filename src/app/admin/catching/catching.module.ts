import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatchingComponent } from './catching.component';
import { CatchingRoutingModule } from './catching-routing.module';
import { CatchingService } from './catching.service';
import { NzButtonModule, NzTableModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [CatchingComponent],
  providers: [CatchingService],
  imports: [
    CommonModule,
    CatchingRoutingModule,
    NzTableModule,
    NzButtonModule
  ]
})
export class CatchingModule { }
