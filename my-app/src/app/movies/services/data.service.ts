import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataCell: BehaviorSubject<any> = new BehaviorSubject<any>(localStorage.getItem('data-theme') === 'Dark');

  constructor() { }
}
