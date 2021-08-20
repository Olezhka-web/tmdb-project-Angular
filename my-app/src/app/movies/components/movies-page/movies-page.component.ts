import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieModel} from "../../../models/movie.model";

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {

  @Input()
  checked: boolean;

  @Input()
  movieObj: MovieModel;
  pages: number[];
  totalPages: number;
  allPage: number
  currentPage: number;

  @Output()
  numberPop: EventEmitter<any> = new EventEmitter<any>();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.snapshot.params['id'] ? this.changePaginationNumber(+this.activatedRoute.snapshot.params['id']) : this.changePaginationNumber(1);
  }

  changePaginationNumber(page: number): void{
    window.scroll(0, 0);
    this.activatedRoute.data.subscribe(value => this.totalPages = value.moviesResolveService.total_pages);
    this.pages = [];
    this.allPage = 10;
    this.currentPage = page;
    if(this.totalPages){
      this.createPages(this.pages, this.totalPages, this.currentPage, this.allPage);
    }
  }

  createPages(pages: number[], pagesCount: number, currentPage: number, allPage: number): void{
    if(pagesCount > allPage) {
      if(currentPage > 5) {
        for (let i = currentPage-4; i <= currentPage+5; i++) {
          pages.push(i);
          if(i === pagesCount) break;
        }
      }
      else {
        for (let i = 1; i <= allPage; i++) {
          pages.push(i);
          if(i === pagesCount) break;
        }
      }
    }
    else {
      for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
      }
    }
  }

}
