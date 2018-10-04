import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import { getMovies } from './movies.action';
import Movies from './movies';

const frontload = async props => await props.getMovies();

class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    if (!movies.length) {
      return <h1>loading data</h1>;
    }
    return <Movies {...this.props} />;
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
