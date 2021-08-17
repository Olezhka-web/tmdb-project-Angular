import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResultsModel} from "../../../models/results.model";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: ResultsModel;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.movie = value.moviesItemResolveService.state ? value.moviesItemResolveService.state : value.moviesItemResolveService);
  }

}
