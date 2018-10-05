import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { getMovies } from './movies.action';
import Movies from './movies';

const frontload = async props => await props.getMovies();

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
      onMount: true,
      onUpdate: false
    })(MoviesContainer)
  )
);
