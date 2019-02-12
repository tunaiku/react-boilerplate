import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import Movies from './movie-list';
import { fetchMoviesAction } from './services/movies.action';
import {
  getMoviesResults,
  isFetchedMovies,
  isFetchingMovies,
  isErrorMovies
} from './services/movies.reducer';

const mapStateToProps = state => ({
  moviesResults: getMoviesResults(state),
  isFetched: isFetchedMovies(state),
  isFetching: isFetchingMovies(state),
  isError: isErrorMovies(state)
});

const mapActionsToProps = {
  fetchMoviesAction
};

const frontload = async props => {
  const { isFetched, isError } = props;
  if (!isFetched && !isError) {
    return await props.fetchMoviesAction({ keyword: 'avenger' });
  }
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(
  frontloadConnect(frontload, {
    onUpdate: false
  })(Movies)
);
