import { Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  loading: boolean = true;

  constructor(router: Router) {
    router.events.subscribe(event =>{
      if(event instanceof NavigationStart || event instanceof NavigationError || event instanceof NavigationCancel){
        this.loading = true;
      }
      else if(event instanceof NavigationEnd){
        this.loading = false;
      }
    });
  }
}
