import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent implements OnInit {

  movies: Movie[];

  constructor(private movieService: MovieService, private http: HttpClient) { }

  ngOnInit() {
  }
  
  getMovies() : void{
    this.movieService.getMovies()
      .subscribe(movies => this.movies = movies);
      console.log(this.movies);
  }

}
