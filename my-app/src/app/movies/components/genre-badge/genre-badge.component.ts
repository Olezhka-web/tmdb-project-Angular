import {Component, Input, OnInit} from '@angular/core';
import {GenreModel} from "../../../models/genre.model";

@Component({
  selector: 'app-genre-badge',
  templateUrl: './genre-badge.component.html',
  styleUrls: ['./genre-badge.component.css']
})
export class GenreBadgeComponent implements OnInit {

  @Input()
  genres: GenreModel;

  @Input()
  movieGenres: number[];

  movieGenreArr: string[] = [];

  constructor() { }

  ngOnInit(): void {

    this.movieGenres.map(id => {
      this.genres.genres.map(value => {
        if(id === value.id){
          this.movieGenreArr.push(value.name);
        }
      })
    });
  }

}
