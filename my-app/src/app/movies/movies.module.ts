import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies.service";
import {MoviesPageComponent} from "./components/movies-page/movies-page.component";
import { GenreBadgeComponent } from './components/genre-badge/genre-badge.component';


@NgModule({
  declarations: [
    MovieInfoComponent,
    MoviesListCardComponent,
    MoviesListComponent,
    MoviesPageComponent,
    GenreBadgeComponent
  ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        HttpClientModule
    ],
  providers: [MoviesService]
})
export class MoviesModule { }
