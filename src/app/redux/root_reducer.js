import { combineReducers } from 'redux';
import moviesReducer from './movies/movies.reducer';

export default combineReducers({
  movies: moviesReducer
});
