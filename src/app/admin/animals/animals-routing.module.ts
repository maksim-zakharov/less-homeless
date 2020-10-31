import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsDetailsComponent } from './animals-details/animals-details.component';
import { AnimalsEditComponent } from './animals-edit/animals-edit.component';
import { AnimalsAviariesComponent } from './animals-aviaries/animals-aviaries.component';

const routes: Routes = [
  {path: 'aviaries', component: AnimalsAviariesComponent},
  {path: 'list', component: AnimalsListComponent},
  {path: 'new', component: AnimalsEditComponent},
  {path: ':id/edit', component: AnimalsEditComponent},
  {path: ':id', component: AnimalsDetailsComponent},
  {
    path: '**', redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalsRoutingModule {
}
