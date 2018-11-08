import React from 'react';
import Movie from './movie';
import { Row, Column } from 'shared/components/grid';

const Movies = ({ moviesResults, isError, isFetching, isFetched }) => {
  if (isFetching) {
    return <h1>waiting for data ..</h1>;
  }
  if (isError) {
    return <h1>Something wrong!</h1>;
  }

  const movies = moviesResults.map(movie => (
    <Column xs="12" lg="4" key={movie.score}>
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
