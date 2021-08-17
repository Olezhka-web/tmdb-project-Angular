import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieModel} from "../../models/movie.model";
import {ResultsModel} from "../../models/results.model";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private API_Key = 'b6d7e5c7703d8171d46592ce88a6025d';
  private _url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.API_Key}`;
  private _urlGetMovie = `https://api.themoviedb.org/3/movie/`;

  constructor(private httpClient: HttpClient) { }

  getMovies(pageId: number): Observable<MovieModel>{
    return this.httpClient.get<MovieModel>(this._url + '&page=' + pageId);
  }

  getMovie(id: number): Observable<ResultsModel>{
    return this.httpClient.get<ResultsModel>(this._urlGetMovie + id + `?api_key=${this.API_Key}`);
  }
}
