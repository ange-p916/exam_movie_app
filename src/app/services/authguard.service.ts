import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieState } from '../store/store';
import { MovieActions } from '../store/movie.actions';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
  

    isLoggedIn: boolean;

  constructor(private router: Router, private movieActions: MovieActions, private movieState: MovieState) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.movieState.isLoggedIn;
  }

  /*canActivate() {
    if (this.movieState.isLoggedIn)
    {
        return true;
    }
    else
    {
        this.router.navigate(["home"]);
    }
  }*/

  logIn(): Observable<any> {

    this.isLoggedIn = true;
    this.movieState.isLoggedIn = true;
    console.log(this.isLoggedIn + ", " + this.movieState.isLoggedIn)
    return of(true);
  }

}
