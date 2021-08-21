import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataCell: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(localStorage.getItem('data-theme') === 'Dark');

  constructor() { }
}
