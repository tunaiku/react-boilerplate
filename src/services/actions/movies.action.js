// import constants
import {
  FETCH_MOVIES_START,
  FETCH_MOVIES_FAILURE,
  FETCH_MOVIES_SUCCESS
} from 'services/constants/movies.constant';

// import utils
import { fetchThunkCompose } from './fetch.action';
import { fetchMovies } from 'services/utils/fetchApiData.util';

const moviesActionTypes = {
  fetchStart: FETCH_MOVIES_START,
  fetchSuccess: FETCH_MOVIES_SUCCESS,
  fetchFailure: FETCH_MOVIES_FAILURE
};

// prettier-ignore
export const fetchMoviesAction = (options) => fetchThunkCompose(fetchMovies(options), moviesActionTypes);
