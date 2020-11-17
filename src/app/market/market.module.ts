import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsService } from '../admin/animals/animals.service';
import { MarketDetailsComponent } from './market-details/market-details.component';
import { MarketListComponent } from './market-list/market-list.component';
import { KrasnodogComponent } from './krasnodog/krasnodog.component';
import { FormsModule } from '@angular/forms';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

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
