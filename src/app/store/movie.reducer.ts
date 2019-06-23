import { MovieActions } from './movie.actions';
import { tassign } from 'tassign';
//import { TempDataService } from './service/temp-data.service';
import { MovieState, InitMovieState } from './store';
//let temp = new TempDataService();
const INITIAL_STATE: MovieState = { isLoggedIn: false, movies: [], isLoading: false }

export function movieReducer(state: MovieState = INITIAL_STATE, action: any, initstate: InitMovieState) {
  switch (action.type) {

    case MovieActions.IS_CREATING_MOVIE:
      return tassign(initstate, {isCreating: true})

    case MovieActions.GET_MOVIES_LOADING:
      return tassign(state, { isLoading: true });

    case MovieActions.GET_MOVIES_SUCCESS:
      return tassign(state, { isLoading: false, movies: action.payload });


    case MovieActions.GET_MOVIES_FAILED:
      return tassign(state, { isLoading: false });

    case MovieActions.CREATE_MOVIE:
                                      //spread operator /- returns all elements of an array
      return tassign(state, { movies: [...state.movies, action.payload] });


    case MovieActions.UPDATE_MOVIE:
      return

    case MovieActions.DELETE_MOVIE:
      return tassign(state, { movies: state.movies.filter(movie => movie.id !== action.payload) });


    case MovieActions.LOG_IN:
      return tassign(state, { isLoggedIn: action.payload });
    
    default:
      return state;
  }
}
