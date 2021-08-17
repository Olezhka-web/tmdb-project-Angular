import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ResultsModel} from "../../../models/results.model";

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

  constructor() { }

  ngOnInit(): void {
  }

}
