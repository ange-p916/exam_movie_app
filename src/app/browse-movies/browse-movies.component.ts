import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie';
import { MovieSearchPipe } from '../movie-search.pipe';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']  
})
export class BrowseMoviesComponent implements OnInit {
  
  movies$: Observable<Movie[]>;
  selectedId: number;
  constructor(private movieService: MovieService, private route: ActivatedRoute) { }

  

  ngOnInit() {
    this.movies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.movieService.getMovies();
      })
    );
    //this.movies = this.movieService.movies;
  }
  
  getMovies() : void{
    this.movieService.getMovies()
      .subscribe(movies => this.movieService.movies = movies);
      console.log(this.movieService.movies);
  }

}
