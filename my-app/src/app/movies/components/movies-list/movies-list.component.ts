import { Component, OnInit } from '@angular/core';
import {MovieModel} from "../../../models/movie.model";
import {ActivatedRoute, Router} from "@angular/router";
import {GenreModel} from "../../../models/genre.model";
import {MoviesService} from "../../services/movies.service";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: MovieModel;
  genres: GenreModel;

  checked: boolean = false;

  chosenGenre: {id: number, name: string};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private moviesService: MoviesService, private dateService: DataService) { }

  ngOnInit(): void {
    this.dateService.dataCell.subscribe(value => this.checked = value);
    this.activatedRoute.data.subscribe(value => this.movies = value.moviesResolveService);
    this.activatedRoute.data.subscribe(value => {
      this.genres = value.genresResolveService;
      if(!this.genres.genres.find(item => JSON.stringify(item) === JSON.stringify({id: 0, name: 'All'}))){
        this.genres.genres.unshift({id: 0, name: 'All'});
      }
      this.activatedRoute.snapshot.queryParams['sortedBy'] ? this.chosenGenre = this.genres.genres[this.genres.genres.map(value => value.name).indexOf(this.activatedRoute.snapshot.queryParams['sortedBy'])] : this.chosenGenre = this.genres.genres[0];
    });
  }

  chooseGenre() {
    this.router.navigate([], {relativeTo: this.activatedRoute, queryParams: {sortedBy: this.chosenGenre.name}, queryParamsHandling: 'merge', state: {idGenre: this.chosenGenre.id} });
    this.activatedRoute.snapshot.params['id'] ? this.moviesService.getMovies(this.activatedRoute.snapshot.params['id'], this.chosenGenre.id).subscribe(value => this.movies = value) : this.moviesService.getMovies(1, this.chosenGenre.id).subscribe(value => this.movies = value);

    this.activatedRoute.queryParams.subscribe(value => {
      value['sortedBy'] ? this.chosenGenre = this.genres.genres[this.genres.genres.map(item => item.name).indexOf(value['sortedBy'])] : this.chosenGenre = this.genres.genres[0];
    });
  }

}
