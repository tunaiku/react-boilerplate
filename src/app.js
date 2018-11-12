import React, { PureComponent } from 'react';
import { render, hydrate } from 'react-dom';
import Loadable from 'react-loadable';

// Action creators and helpers
import Pages from 'pages';
import AppStore from 'app.store';
import { Provider } from 'react-redux';
import { Frontload } from 'react-frontload';
import { ConnectedRouter } from 'connected-react-router';

import 'app.scss';

const { store, history } = AppStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Frontload noServerRender={true}>
            <Pages />
          </Frontload>
        </ConnectedRouter>
      </Provider>
    );
  }
}

const root = document.querySelector('#root');

export default (function() {
  if (root.hasChildNodes() === true) {
    // If it's an SSR, use hydrate to get fast page loads by just
    // attaching event listeners after the initial render
    Loadable.preloadReady().then(() => {
      hydrate(<App />, root);
    });
  } else {
    // If application not running on the server, just render like normal
    render(<App />, root);
  }
})();
