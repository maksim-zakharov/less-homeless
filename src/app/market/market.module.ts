import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { RouterModule, Routes } from '@angular/router';
import {
  NzAutocompleteModule,
  NzBreadCrumbModule,
  NzButtonModule,
  NzDividerModule,
  NzDropDownModule,
  NzInputModule, NzListModule,
  NzModalModule
} from 'ng-zorro-antd';
import { AnimalsService } from '../admin/animals/animals.service';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { MarketListComponent } from './market-list/market-list.component';
import { KrasnodogComponent } from './krasnodog/krasnodog.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    {
      path: '', component: MarketComponent, children: [
        {
          path: '', component: MarketListComponent
        },
        {
          path: ':id', component: MarketDetailsComponent
        }
      ]
    }
  ]
;

@NgModule({
  declarations: [MarketComponent, MarketDetailsComponent, MarketListComponent, KrasnodogComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzDividerModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    NzModalModule,
    NzButtonModule,
    NzAutocompleteModule,
    NzInputModule,
    FormsModule,
    NzListModule
  ],
  providers: [AnimalsService]
})
export class MarketModule {
}
