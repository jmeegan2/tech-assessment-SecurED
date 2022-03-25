import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const routes: Routes = [
  { path: '', component: HeroesListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
