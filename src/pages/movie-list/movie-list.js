import React from 'react';
import Movie from './movie-item';
import { Grids, Grid, Container } from 'shared/components/grids';
import useMovieList from './modules/services/movie-list.hook';

import './movie-list.scss';

const MovieList = () => {
  const { movieList, isError, isRequest } = useMovieList();

  console.log(movieList);

  if (isRequest) {
    return <h1>Fetching movies ..</h1>;
  }
  if (isError) {
    return <h1>Something wrong!</h1>;
  }

  const renderMovieList = () =>
    movieList.length &&
    movieList.map(movie => (
      <Grid xs="12" lg="4" key={movie.score}>
        <Movie key={movie.score} movie={movie} />
      </Grid>
    ));

  return (
    <Container>
      <Grids>{renderMovieList()}</Grids>
    </Container>
  );
};

export default MovieList;
