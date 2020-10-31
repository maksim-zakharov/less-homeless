import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { RouterModule, Routes } from '@angular/router';
import { NzBreadCrumbModule, NzDividerModule } from 'ng-zorro-antd';
import { AnimalsService } from '../admin/animals/animals.service';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { MarketListComponent } from './market-list/market-list.component';

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
  declarations: [MarketComponent, MarketDetailsComponent, MarketListComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NzDividerModule,
    NzBreadCrumbModule
  ],
  providers: [AnimalsService]
})
export class MarketModule {
}
