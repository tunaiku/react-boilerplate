import axios from 'axios';
import env from 'environments/env';
/**
 * base wp api endpoint url (most used url) to get article and category list
 * @returns object
 */

// function to request articles from wp api
export function fetchMovies({ keyword }) {
  const options = {};

  if (keyword) options.q = keyword;

  return axios({ url: env.apiEndpoints.movies, method: 'get', params: options });
}
