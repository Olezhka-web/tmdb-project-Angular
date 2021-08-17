import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {MoviesModule} from "../../movies.module";
import {ResultsModel} from "../../../models/results.model";
import {MovieModel} from "../../../models/movie.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: MovieModel;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.movies = value.moviesResolveService);
  }

}
