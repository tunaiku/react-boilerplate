import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import root_reducer from './root_reducer';

// A nice helper to tell us if we're on the server
export const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

export default (url = '/') => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const enhancers = [];

  let initialState = {};

  if (!isServer) {
    // Dev tools are helpful
    if (process.env.NODE_ENV === 'development') {
      const devToolsExtension = window.devToolsExtension;

      if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
      }
    }

    initialState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
  }

  const middleware = [thunk, routerMiddleware(history)];
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  );

  // Create the store
  const store = createStore(connectRouter(history)(root_reducer), initialState, composedEnhancers);

  return {
    store,
    history
  };
};
