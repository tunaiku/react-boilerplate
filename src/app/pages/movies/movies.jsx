import React from 'react';

const Movies = ({ movies }) => {
  return (
    <section>
      {movies.map(movie => (
        <ul key={movie.show.name}>
          <h2>{movie.show.name}</h2>
          <li style={{ listStyleType: 'none' }}>
            <span>type : {movie.show.type}</span>
          </li>
        </ul>
      ))}
    </section>
  );
};

export default Movies;
