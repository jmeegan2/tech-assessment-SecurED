import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HeroesListComponent },
  //This is the route for displaying hero details/info
  { path: 'hero-details', component: HeroDetailsComponent },
  /*I couldnt make the path blank because thats the path for heroesList so 
  I just did ** and it works. I tested it with /hero-details too and it works */
  { path: '**', redirectTo: '/', pathMatch: 'full' }
  //Route for 404/wildcard page
  // { path: '**', component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
