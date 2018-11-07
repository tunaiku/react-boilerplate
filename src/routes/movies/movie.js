import React, { memo } from 'react';

export default memo(function Movie({ movie }) {
  return (
    <div class="pd-small">
      <div className="card">
        <div className="card__image">
          <img src={movie.show.image && movie.show.image.original} alt="" />>
        </div>
        <div className="card__body">
          <article className="article">
            <div className="heading">
              <h4 className="title">{movie.show.name}</h4>
              <h6 className="subtitle color-gray">language: {movie.show.language}</h6>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
});
