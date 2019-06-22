import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Movie } from '../entities/movie';
import { Router } from '@angular/router';
import { MovieActions } from '../store/movie.actions';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  
  createMovieForm = this.fb.group({
    title: [''],
    filmDirector: [''],
    releaseDate: ['']
  });

  constructor(private fb: FormBuilder, private movieAPIService: MovieService, private router: Router, private movieActions: MovieActions) { }

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
    if (!title) { return; }

    this.movieAPIService.createMovie({ title, filmDirector, releaseDate } as Movie).subscribe(movie => {
        this.movieActions.createMovie(movie);
    })
  }

}
