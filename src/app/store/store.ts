import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { movieReducer } from './movie.reducer';
import { Movie } from '../entities/movie';

export class MovieState {
  isLoggedIn: boolean;
  movies: Movie[];
  isLoading: boolean;
}

export class InitMovieState {
  isCreating: boolean;
}

export class AppState {
  movies?: MovieState;
}
export const rootReducer = combineReducers<AppState>({
  movies: movieReducer,
  router: routerReducer
} as any);
