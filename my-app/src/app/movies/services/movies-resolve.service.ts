import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {MovieModel} from "../../models/movie.model";
import {MoviesService} from "./movies.service";
import {Observable} from "rxjs";
import {GenresService} from "./genres.service";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolveService implements Resolve<MovieModel>{

  constructor(private moviesService: MoviesService, private genresService: GenresService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieModel> | Promise<MovieModel> | MovieModel {
    return this.genresService.getGenres().pipe(switchMap(value => route.queryParams['sortedBy'] && route.queryParams['sortedBy'] != 'All' ? route.params['id'] ? this.moviesService.getMovies(+route.params['id'], value.genres[value.genres.map(value => value.name).indexOf(route.queryParams['sortedBy'])].id) : this.moviesService.getMovies(1, value.genres[value.genres.map(value => value.name).indexOf(route.queryParams['sortedBy'])].id) : route.params['id'] ? this.moviesService.getMovies(+route.params['id'], null) : this.moviesService.getMovies(1, null)));
  }
}
