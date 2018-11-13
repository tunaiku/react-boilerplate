// import constants
import { FETCH_MOVIES_START, FETCH_MOVIES_FAILURE, FETCH_MOVIES_SUCCESS } from './movies.constant';

// import utils
import { fetchThunkCompose } from 'shared/services/fetch/fetch.action';
import { fetchMovies } from 'shared/utils/fetchApiData.util';

const moviesActionTypes = {
  fetchStart: FETCH_MOVIES_START,
  fetchSuccess: FETCH_MOVIES_SUCCESS,
  fetchFailure: FETCH_MOVIES_FAILURE
};

// prettier-ignore
export const fetchMoviesAction = (options) => fetchThunkCompose(fetchMovies(options), moviesActionTypes);
