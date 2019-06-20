import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MovieService } from '../movie.service';
import { Movie } from '../entities/movie';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<Movie>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MovieService
  ) { }

  ngOnInit() {
    this.movie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMovie(params.get('id')))
    );
  }

  gotoMovies(movie: Movie) {
    let movieId = movie ? movie.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/movies', { id: movieId, foo: 'foo' }])
  }
}
