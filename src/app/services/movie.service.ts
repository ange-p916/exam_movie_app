import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Movie } from '../entities/movie';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies= []
  //hardcoded for test
 /* movies = [
    new Movie(1,'test-title','test-director', '1994-test-year')
  ]*/

  moviesUrl= '//127.0.0.1:3000/movies';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>
  {
    return this.http.get<Movie[]>(this.moviesUrl);
  }

  getMovie(id: number | string){
    return this.getMovies().pipe(
      map((movies: Movie[]) => movies.find(movie => movie.id === +id))
    )
  }

  createMovie(movie: Movie): Observable<Movie>{
    return this.http.post<Movie>(this.moviesUrl, JSON.stringify(movie), httpOptions);
  }


  editMovie(movie: Movie) : Observable<{}>
  {
    let url = `${this.moviesUrl}/${movie.id}`;
    return this.http.put(url, JSON.stringify(movie), httpOptions);
  }

  deleteMovie(movie: Movie | number) : Observable<{}>
  {
    const id = typeof movie === 'number' ? movie : movie.id;
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete(url, httpOptions);
  }
}
