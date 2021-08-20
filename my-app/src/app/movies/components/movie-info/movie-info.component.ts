import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResultsModel} from "../../../models/results.model";
import {GenreModel} from "../../../models/genre.model";
import {MovieItemModel} from "../../../models/movie-item.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: ResultsModel;

  genres: GenreModel;

  genresFromId: MovieItemModel;

  genre_ids: number[] = [];

  checked: boolean;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataCell.subscribe(value => this.checked = value);
    this.activatedRoute.data.subscribe(value => this.genres = value.genresResolveService);
    this.activatedRoute.data.subscribe(value => {
      if(value.moviesItemResolveService.state){
        this.movie = value.moviesItemResolveService.state
      }
      else {
        this.genresFromId = value.moviesItemResolveService;
        this.genre_ids = this.genresFromId.genres.map(item => item.id);
      }
    });
  }

}
