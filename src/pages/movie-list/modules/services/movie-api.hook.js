import axios from 'axios';
import { API } from 'environments';

const useMovieApi = () => {
  const fetchMovieList = ({ keyword } = {}) => {
    const options = {};

    if (keyword) options.q = keyword;

    return axios({ url: API.HOST_URL, method: 'get', params: options });
  };

  return { fetchMovieList };
};

export default useMovieApi;
