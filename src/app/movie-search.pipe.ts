import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './entities/movie';

@Pipe({
  name: 'movieSearch'
})
export class MovieSearchPipe implements PipeTransform {

  transform(allMovies: Movie[], searchText: string): any{
    if(searchText == null) return allMovies;


    return allMovies.filter(function(allMovies)
    {
      return allMovies.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }

}
