import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {MovieModel} from "../../models/movie.model";
import {MoviesService} from "./movies.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesResolveService implements Resolve<MovieModel>{

  constructor(private moviesService: MoviesService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieModel> | Promise<MovieModel> | MovieModel {
    return route.params['id'] ? this.moviesService.getMovies(+route.params['id']) : this.moviesService.getMovies(1);
  }
}
