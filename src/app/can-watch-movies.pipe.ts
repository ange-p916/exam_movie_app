import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './entities/movie';

@Pipe({
  name: 'canWatchMovies',
  pure: true
})
export class CanWatchMoviesPipe implements PipeTransform {

  transform(allMovies: Movie[]) {
    return allMovies.filter(movie => movie.canWatch);
  }

}
