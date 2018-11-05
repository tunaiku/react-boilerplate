import React, { Component } from 'react';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Movies from './movies';
import { fetchMoviesAction } from 'services/actions/movies.action';
import {
  getMoviesResults,
  isFetchedMovies,
  isFetchingMovies,
  isErrorMovies
} from 'services/reducers/movies.reducer';

const frontload = async props => {
  const { isFetched, isError } = props;
  if (!isFetched && !isError) {
    return await props.fetchMoviesAction({ keyword: 'avenger' });
  }
};

class MoviesContainer extends Component {
  render() {
    return <Movies {...this.props} />;
  }
}

const mapStateToProps = state => ({
  moviesResults: getMoviesResults(state),
  isFetched: isFetchedMovies(state),
  isFetching: isFetchingMovies(state),
  isError: isErrorMovies(state)
});

const mapDispatchToProps = {
  fetchMoviesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  frontloadConnect(frontload, {
    onUpdate: false
  })(MoviesContainer)
);
