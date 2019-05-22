import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Movie } from './entities/movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[];

  moviesUrl= '//127.0.0.1:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>
  {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  addMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.moviesUrl,movie, httpOptions);
  }
}
