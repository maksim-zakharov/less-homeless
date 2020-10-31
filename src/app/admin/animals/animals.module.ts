import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsRoutingModule } from './animals-routing.module';
import { AnimalsService } from './animals.service';
import {
  NzBreadCrumbModule,
  NzButtonModule, NzCardModule, NzCheckboxModule, NzDatePickerModule,
  NzDescriptionsModule,
  NzDividerModule,
  NzFormModule, NzIconModule,
  NzInputModule, NzMessageModule, NzModalModule, NzRadioModule, NzSelectModule,
  NzTableModule, NzToolTipModule, NzUploadModule
} from 'ng-zorro-antd';
import { AnimalsDetailsComponent } from './animals-details/animals-details.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimalsAviariesComponent } from './animals-aviaries/animals-aviaries.component';

@NgModule({
  declarations: [
    AnimalsListComponent,
    AnimalsDetailsComponent,
    AnimalsAviariesComponent,
    AnimalsEditComponent
  ],
  providers: [AnimalsService],
  imports: [
    NzModalModule, NzMessageModule,
    CommonModule,
    AnimalsRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzDescriptionsModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzIconModule,
    NzDatePickerModule,
    NzCardModule,
    NzUploadModule, NzRadioModule
  ]
})
export class AnimalsModule {
}
