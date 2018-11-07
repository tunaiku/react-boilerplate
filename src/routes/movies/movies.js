import React from 'react';
import Movie from './movie';
import { Row } from 'components/grid';
import { Column } from '../../components/grid/index';

const Movies = ({ moviesResults, isError, isFetching, isFetched }) => {
  if (isFetching) {
    return <h1>waiting for data ..</h1>;
  }
  if (isError) {
    return <h1>Something wrong!</h1>;
  }

  const movies = moviesResults.map(movie => (
    <Column xs="12" lg="4">
      <Movie key={movie.score} movie={movie} />
    </Column>
  ));

  return (
    <section className="container">
      <Row>{movies}</Row>
    </section>
  );
};

export default Movies;
