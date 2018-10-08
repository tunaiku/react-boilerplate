import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Movies from './movies';
import { getMovies } from '../../redux/movies/movies.action';

const frontload = async props => {
  if (props.movies.results && !props.movies.results.length) {
    await props.getMovies();
  }
};

class MoviesContainer extends Component {
  render() {
    const { movies, getMovies } = this.props;
    const { isFetching, isError, results } = movies;
    if (isFetching) {
      return <h1>Waiting for data..</h1>;
    }
    if (isError) {
      return <h1>Something wrong!!</h1>;
    }
    return <Movies movies={results} getMovies={getMovies} />;
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

export default withRouter(
  connect(
    mapStateToProps,
    { getMovies }
  )(
    frontloadConnect(frontload, {
      onUpdate: false
    })(MoviesContainer)
  )
);
