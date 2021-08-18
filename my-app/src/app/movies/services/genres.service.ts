import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GenreModel} from "../../models/genre.model";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  private API_Key = 'b6d7e5c7703d8171d46592ce88a6025d';
  private _url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${this.API_Key}`;

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<GenreModel>{
    return this.httpClient.get<GenreModel>(this._url);
  }
}
