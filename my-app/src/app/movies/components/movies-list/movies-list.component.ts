import { Component, OnInit } from '@angular/core';
import {MovieModel} from "../../../models/movie.model";
import {ActivatedRoute} from "@angular/router";
import {GenreModel} from "../../../models/genre.model";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: MovieModel;
  genres: GenreModel;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.movies = value.moviesResolveService);
    this.activatedRoute.data.subscribe(value => this.genres = value.genresResolveService);
  }

}
