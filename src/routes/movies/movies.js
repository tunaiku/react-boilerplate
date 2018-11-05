import React from 'react';

const Movies = ({ moviesResults, isError, isFetching, isFetched }) => {
  if (isFetching) {
    return <h1>waiting for data ..</h1>;
  }
  if (isError) {
    return <h1>Something wrong!</h1>;
  }

  const movies = moviesResults.map(movie => (
    <ul key={movie.show.name}>
      <h2>{movie.show.name}</h2>
      <li style={{ listStyleType: 'none' }}>
        <span>type : {movie.show.type}</span>
      </li>
    </ul>
  ));

  return <section>{movies}</section>;
};

export default Movies;
