import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from 'app.reducer';
import isServer from 'shared/utils/is-server.util.js';

export default (url = '/') => {
  // Create a history depending on the environment
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  let initialState = {};

  if (!isServer) {
    initialState = window.__PRELOADED_STATE__;
    delete window.__PRELOADED_STATE__;
  }

  const middleware = [thunk, routerMiddleware(history)];
  const composeEnhancers = composeWithDevTools({});

  // Create the store
  const store = createStore(
    connectRouter(history)(appReducer),
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return {
    store,
    history
  };
};
