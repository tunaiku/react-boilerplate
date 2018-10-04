import { GET_MOVIES } from './movies.constant';

const initialState = {
  results: [],
  isFetching: false,
  isError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        results: action.results,
        isFetching: action.isFetching,
        isError: action.isError
      };
    default:
      return state;
  }
};
