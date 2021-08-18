import {Component, Input, OnInit} from '@angular/core';
import {ResultsModel} from "../../../models/results.model";
import {GenreModel} from "../../../models/genre.model";

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
  movie: ResultsModel;

  @Input()
  count: number;

  @Input()
  genres: GenreModel;

  constructor() { }

  ngOnInit(): void {
  }

}
