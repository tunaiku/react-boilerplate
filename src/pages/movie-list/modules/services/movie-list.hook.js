import { useState, useEffect } from 'react';
import useMovieApi from './movie-api.hook';

const useMovieList = () => {
  const { fetchMovieList } = useMovieApi();
  const [movieList, setMovieList] = useState([]);
  const [isRequest, setIsRequest] = useState(false);
  const [isError, setIsError] = useState(false);

  const getMovieList = async () => {
    setIsRequest(true);
    try {
      const movieListResponse = await fetchMovieList({ keyword: 'avengers' });
      setMovieList(movieListResponse.data);
      setIsRequest(false);
    } catch (error) {
      console.log(error);
      setIsRequest(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return { getMovieList, movieList, isError, isRequest };
};

export default useMovieList;
