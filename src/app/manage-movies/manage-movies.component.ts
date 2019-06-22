import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities/movie';
import { MovieService } from '../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/store';
import { MovieActions } from '../store/movie.actions';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {

  movies: any[] = [];
  selectedMovie: Movie;
  movies$: Observable<Movie[]>;
  selectedId: number;
  isLoading: boolean;


  constructor(private movieService: MovieService, private router: Router, private route: ActivatedRoute,
    private ngRedux: NgRedux<AppState>, private movieActions: MovieActions) {
  }

  ngOnInit() {

    this.ngRedux.select(state => state.movies).subscribe(result => {
      this.movies = result.movies;
      this.isLoading = result.isLoading;
    });

    this.movieActions.getMovies();

    /*this.movies = this.movieService.movies;
    this.movies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.movieService.getMovies();
      })
    );*/
    //this.movies = this.movieService.movies;
  }

  
  

  editMovie(movie: Movie)
  {
    console.log(this.selectedMovie + " " + movie);
    this.movieService.editMovie(movie).subscribe();
  }

  deleteMovie(id: number)
  {
    console.log(this.selectedMovie);
    this.movieService.deleteMovie(this.selectedMovie.id).subscribe();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }


  getMovies() : void{
    this.movieService.getMovies()
      .subscribe(movies => this.movieService.movies = movies);
      console.log(this.movieService.movies);
    this.router.navigate(['admin/manage-movies']);
  }

}
