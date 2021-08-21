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
    this.currentRate = this.currentRate - 6;
  }

}
