import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MovieState } from '../store/store';
import { MovieActions } from '../store/movie.actions';
import { CanActivate } from '@angular/router/';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
  
    isLoginSubject = new BehaviorSubject<boolean>(this.hasToken())
    //isLoggedIn: Observable<boolean>;

  constructor(private router: Router, private movieActions: MovieActions, private movieState: MovieState) {
  }

  ngOnInit() {
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
      return true;
    }
    else {
      return false;
    }
    
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
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

  login(): void {

    localStorage.setItem('token', 'admin');
    console.log(localStorage.length)
    this.isLoginSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem('token');
    console.log(localStorage.length)
    this.isLoginSubject.next(false);
  }

}
