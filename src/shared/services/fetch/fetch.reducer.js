import { FETCH_START, FETCH_FAILURE, FETCH_SUCCESS } from './fetch.constant';

const initialState = {
  results: [],
  isFetching: false,
  isError: false,
  isFetched: false
};

/**
 * get fetch action type (FETCH_START/FETCH_FAILURE/FETCH_SUCCESS) according to action type from executed dispatch function.
 * @param {object} actionType = action types from dispatched function
 * @returns
 */
const getReducerActionType = (actionTypes, actionType) => {
  return Object.entries(actionTypes).reduce((result, action) => {
    const [key, value] = action;
    return value === actionType ? key : '';
  });
};

/**
 * reusable reducer for fetching pattern
 * @param {string} [ACTION_CONTEXT] note the state ACTION_CONTEXT here should same with its action types constant string prefix.
 * @param {*} [initialState=defaultInitialState]
 * @returns
 */

export default function fetchReducer(actionTypes) {
  return function(state = initialState, action) {
    const dispatchedActionType = getReducerActionType(actionTypes, action.type);

    switch (dispatchedActionType) {
      case FETCH_START:
        return {
          ...state,
          isFetching: action.isFetching,
          isFetched: action.isFetched,
          isError: action.isError
        };
      case FETCH_FAILURE:
        return { ...state, isError: action.isError, isFetching: action.isFetching };

      case FETCH_SUCCESS:
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
