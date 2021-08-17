import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ResultsModel} from "../../models/results.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesItemResolveService implements Resolve<ResultsModel>{

  constructor(private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResultsModel> | Promise<ResultsModel> | ResultsModel {
    return this.router.getCurrentNavigation()?.extras as ResultsModel;
  }
}
