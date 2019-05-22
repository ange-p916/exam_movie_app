import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';

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

  constructor(private fb: FormBuilder, private movieService: MovieService) { }

  ngOnInit() {
    this.createMovieForm = new FormGroup({
      title : new FormControl(''),
      filmDirector: new FormControl(''),
      releaseDate: new FormControl(''),
    });
  }

}
