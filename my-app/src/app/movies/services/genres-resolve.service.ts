import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {GenreModel} from "../../models/genre.model";
import {GenresService} from "./genres.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenresResolveService implements Resolve<GenreModel>{

  constructor(private genresService:GenresService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GenreModel> | Promise<GenreModel> | GenreModel {
    return this.genresService.getGenres();
  }
}
