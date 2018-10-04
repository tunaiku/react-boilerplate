import { combineReducers } from 'redux';
import moviesReducer from './pages/movies/movies.reducer';

export default combineReducers({
  movies: moviesReducer
});
