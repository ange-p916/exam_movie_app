import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../services/movie.service';
import { Movie } from '../entities/movie';
import { Router } from '@angular/router';
import { MovieActions } from '../store/movie.actions';
import { MovieState, AppState } from '../store/store';
import { NgRedux } from '@angular-redux/store';

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

  constructor(private fb: FormBuilder, private movieService: MovieService, private router: Router,
    private movieActions: MovieActions, private movieState: MovieState, private ngRedux: NgRedux<AppState>) { }

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

    this.movieService.getMovies().subscribe(movie => {
      this.ngRedux.dispatch({
        type: MovieActions.CREATE_MOVIE,
        payload: movie
      })
    });   
    this.router.navigate(['/home'])
    }
}
