import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie';
import { Router } from '@angular/router';
import { routerConfig } from '../app-routing/app-routing.module';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {
  movies: any[] = [];
  //movies: Movie[];
  canWatch = true;
  selectedMovie: Movie;

  constructor(private movieService: MovieService, private router: Router) {
    this.reset()
   }

  addMovie(name: string){
    name = name.trim();
    if(!name){return;}
    let movie = {name, canWatch: this.canWatch};
    this.movies.push(movie);

  }

  reset() {this.movies = this.movieService.movies.slice();}

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
