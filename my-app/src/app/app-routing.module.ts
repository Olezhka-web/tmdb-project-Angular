import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'movies', pathMatch: 'full'},
  {path: 'movies', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)},
  {path: 'movies/page/:id', loadChildren: () => import('./movies/movies.module').then(m => m.MoviesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
