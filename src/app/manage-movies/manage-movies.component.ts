import { Component, OnInit } from '@angular/core';
import { Movie } from '../entities/movie';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.css']
})
export class ManageMoviesComponent implements OnInit {

  movies: any[] = [];
  selectedMovie: Movie;

  constructor(private movieService: MovieService, private router: Router) {
   }



  ngOnInit() {
    this.movies = this.movieService.movies;
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
      this.router.navigate(['/home']);
  }


}
