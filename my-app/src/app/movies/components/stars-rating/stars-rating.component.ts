import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnInit {

  @Input()
  currentRate: number;

  constructor() { }

  ngOnInit(): void {
    this.currentRate = this.currentRate - 6;  // use minus 6 because from tmdb return data from 10 stars, or also I
    // can use 4 * rating / 10
  }

}
