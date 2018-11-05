import axios from 'axios';

/**
 * base wp api endpoint url (most used url) to get article and category list
 * @returns object
 */
export const apiEndpoints = {
  movies: `https://api.tvmaze.com/search/shows`
};

// function to request articles from wp api
export function fetchMovies({ keyword }) {
  const options = {};

  if (keyword) options.q = keyword;

  return axios({ url: apiEndpoints.movies, method: 'get', params: options });
}
