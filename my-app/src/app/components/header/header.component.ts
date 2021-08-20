import { Component, OnInit } from '@angular/core';
import {DataService} from "../../movies/services/data.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  checked: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.dataCell.subscribe(value => console.log(value));
    localStorage.getItem('data-theme') === 'Dark' ? this.checked = true : this.checked = false;
  }

  checkSwitcher() {
    this.checked ? localStorage.setItem('data-theme', 'Dark') : localStorage.setItem('data-theme', 'Light');
    this.checked ? this.dataService.dataCell.next(true) : this.dataService.dataCell.next(false);
  }
}
