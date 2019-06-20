import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  //title: string;
  //film

  createMovieForm = this.fb.group({
    title: [''],
    filmDirector: [''],
    releaseDate: ['']
  });

  //newMovie: Movie = {id: 12, title: "beans", filmDirector: "anthony hopkins", releaseDate: "2004", canWatch: true };
  //newMovie: Movie = {id: 1, title: JSON.stringify(this.createMovieForm.get('title')),
   //filmDirector: JSON.stringify(this.createMovieForm.get['filmDirector']),
   //releaseDate: JSON.stringify(this.createMovieForm.get['releaseDate'])};

  constructor(private fb: FormBuilder, private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.createMovieForm = new FormGroup({
      title : new FormControl(''),
      filmDirector: new FormControl(''),
      releaseDate: new FormControl(''),
    });
  }

  createMovie(title: string, filmDirector: string, releaseDate : string) : void
  {
    title = title.trim();
    filmDirector = filmDirector.trim();
    releaseDate = releaseDate.trim();
    console.log(title + ' ' + filmDirector + ' ' + releaseDate);
    if(!title) { return; }
    this.movieService.addMovie({ title, filmDirector, releaseDate } as Movie)
    .subscribe(movie => {
      this.movieService.movies.push(movie);
    })
    this.router.navigate(['admin/manage-movies']);
  }

  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(movie => movie.id)) + 1 : 0;
  }

}
