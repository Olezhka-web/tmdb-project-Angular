import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieModel} from "../../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_Key = 'b6d7e5c7703d8171d46592ce88a6025d';
  private _url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_Key}&page=`; // currentPage

  constructor(private httpClient: HttpClient) { }

  getMovies(id: number): Observable<MovieModel>{
    return this.httpClient.get<MovieModel>(this._url + id);
  }


}
