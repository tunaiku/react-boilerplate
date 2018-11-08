import { combineReducers } from 'redux';
import moviesReducer from 'pages/movies/services/movies.reducer';

export default combineReducers({
  movies: moviesReducer
});
