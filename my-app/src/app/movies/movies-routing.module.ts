import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MoviesResolveService} from "./services/movies-resolve.service";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {MoviesItemResolveService} from "./services/movies-item-resolve.service";

const routes: Routes = [
  {path: '', component: MoviesListComponent, resolve: {moviesResolveService: MoviesResolveService}, pathMatch: 'full' },
  {path: ':id', component: MovieInfoComponent, resolve: {moviesItemResolveService: MoviesItemResolveService}},
  {path: 'page/:id', component: MoviesListComponent, resolve: {moviesResolveService: MoviesResolveService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
