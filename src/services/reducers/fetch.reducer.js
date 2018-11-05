const defaultInitialState = {
  results: [],
  isFetching: false,
  isError: false,
  isFetched: false
};

/**
 * reusable reducer for fetching pattern
 * @param {string} [ACTION_CONTEXT] note the state ACTION_CONTEXT here should same with its action types constant string prefix.
 * @param {*} [initialState=defaultInitialState]
 * @returns
 */

export default function fetchReducer(ACTION_CONTEXT, initialState = defaultInitialState) {
  return function(state = initialState, action) {
    switch (action.type) {
      case `FETCH_${ACTION_CONTEXT}_START`:
        return {
          ...state,
          isFetching: action.isFetching,
          isFetched: action.isFetched,
          isError: action.isError
        };
      case `FETCH_${ACTION_CONTEXT}_FAILURE`:
        return { ...state, isError: action.isError, isFetching: action.isFetching };

      case `FETCH_${ACTION_CONTEXT}_SUCCESS`:
        return {
          ...state,
          isFetched: action.isFetched,
          results: action.results,
          isFetching: action.isFetching
        };
      default:
        return state;
    }
  };
}
