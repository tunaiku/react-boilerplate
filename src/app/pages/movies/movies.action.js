import axios from 'axios';
import { GET_MOVIES } from './movies.constant';

export const getMovies = id => dispatch => {
  return new Promise(async resolve => {
    const response = await axios.get('https://api.tvmaze.com/search/shows?q=sex');

    dispatch({ type: GET_MOVIES, movies: response.data });

    resolve(response.data);
  });
};
