import { GET_MOVIES } from './movies.constant';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return [...state, ...action.movies];
    default:
      return state;
  }
};
