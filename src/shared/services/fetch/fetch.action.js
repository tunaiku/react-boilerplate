import { FETCH_START, FETCH_SUCCESS, FETCH_FAILURE } from './fetch.constant';

export function fetchStart(actionType) {
  return {
    type: actionType,
    isFetching: true,
    isFetched: false,
    isError: false
  };
}

export function fetchFailure(actionType) {
  return {
    type: actionType,
    isError: true,
    isFetching: false
  };
}

export function fetchSuccess(actionType, results) {
  return {
    type: actionType,
    isFetched: true,
    results,
    isFetching: false
  };
}

/**
 * generate action types for fething actions creators
 * @param {*} { fetchStart, fetchFailure, fetchSuccess }
 * @returns
 */
export const generateFetchActionTypes = ({ fetchStart, fetchFailure, fetchSuccess }) => {
  return {
    [FETCH_START]: fetchStart,
    [FETCH_FAILURE]: fetchFailure,
    [FETCH_SUCCESS]: fetchSuccess
  };
};

/**
 * fetch thunk function for fetching articles
 * @param {object} response the promises from api request
 * @param {object} actionTypes action types for specific action. that the action  who used this fetch thunk action
 * @param {string} stateName state name of the action
 * @returns
 */
export function fetchThunkCompose(response, actionTypes, isUseServerErrorHandle = true) {
  return async (dispatch, getState) => {
    // prettier-ignore
    dispatch(fetchStart(actionTypes[FETCH_START]));

    try {
      let results = [];
      if (response && !response.length) {
        // here we check if the response is just single promise , then handle it
        const resolvedResponse = await response;
        results = resolvedResponse.data;
      } else {
        const resolvedResponse = await Promise.all(response);
        resolvedResponse.map(result => (results = [...results, ...result.data])); // assign all data from all resolved promises to results.
      }

      // prettier-ignore
      dispatch(fetchSuccess(actionTypes[FETCH_SUCCESS], results));
    } catch (err) {
      dispatch(fetchFailure(actionTypes[FETCH_FAILURE]));
    }
  };
}
