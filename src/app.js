import React from 'react';
import { render, hydrate } from 'react-dom';
import Loadable from 'react-loadable';
import Main from 'pages';
import { Frontload } from 'react-frontload';
import { BrowserRouter } from 'react-router-dom';

import 'app.scss';

const root = document.querySelector('#root');

const App = () => (
  <BrowserRouter>
    <Frontload noServerRender={true}>
      <Main />
    </Frontload>
  </BrowserRouter>
);

export default (() => {
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
