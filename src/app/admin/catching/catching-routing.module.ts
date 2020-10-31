import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatchingComponent } from './catching.component';

const routes: Routes = [
  {path: '', component: CatchingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatchingRoutingModule {
}
