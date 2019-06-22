import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MovieState } from '../store/store';
import { MovieActions } from '../store/movie.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  isLoggedIn: boolean;

  constructor(private router: Router, private movieActions: MovieActions, private movieState: MovieState) { }

  ngOnInit() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if (this.movieState.isLoggedIn)
    {
        return true;
    }
    else
    {
        this.router.navigate(["home"]);
    }
  }

  logIn(val: boolean): Observable<any> {

    this.isLoggedIn = val;
    return of(this.movieState.isLoggedIn = val);
  }

}
