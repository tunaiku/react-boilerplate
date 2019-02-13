import fetchReducer from 'shared/services/fetch/fetch.reducer';
import { moviesActionTypes } from './movies.action';

// new articles selectors
export const getMoviesResults = state => state.movies.results;
export const isFetchedMovies = state => state.movies.isFetched;
export const isFetchingMovies = state => state.movies.isFetching;
export const isErrorMovies = state => state.movies.isError;

// new articles reducer
export default fetchReducer(moviesActionTypes);
