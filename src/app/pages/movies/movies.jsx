import React from 'react';

const Movies = ({ movies, getMovies }) => {
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

      <button onClick={() => getMovies('american')}>Change List</button>
    </section>
  );
};

export default Movies;
