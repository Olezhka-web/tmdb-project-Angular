import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from "./components/movies-list/movies-list.component";
import {MoviesResolveService} from "./services/movies-resolve.service";
import {MovieInfoComponent} from "./components/movie-info/movie-info.component";
import {MoviesItemResolveService} from "./services/movies-item-resolve.service";
import {GenresResolveService} from "./services/genres-resolve.service";

const routes: Routes = [
  {path: '', component: MoviesListComponent, resolve: {moviesResolveService: MoviesResolveService, genresResolveService: GenresResolveService}, pathMatch: 'full' },
  {path: ':id', component: MovieInfoComponent, resolve: {moviesItemResolveService: MoviesItemResolveService, genresResolveService: GenresResolveService}},
  {path: 'page/:id', component: MoviesListComponent, resolve: {moviesResolveService: MoviesResolveService, genresResolveService: GenresResolveService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
