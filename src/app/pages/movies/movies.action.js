import axios from 'axios';
import { GET_MOVIES } from './movies.constant';

export const getMovies = keyword => dispatch => {
  return new Promise(async (resolve, reject) => {
    dispatch({ type: GET_MOVIES, isFetching: true });
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${keyword ? keyword : 'avenger'}`);
      dispatch({ type: GET_MOVIES, results: response.data, isFetching: false });
      resolve(response.data);
    } catch (err) {
      reject({
        results: err,
        message: 'ERROR!!'
      });

      dispatch({ type: GET_MOVIES, isError: true });
    }
  });
};
