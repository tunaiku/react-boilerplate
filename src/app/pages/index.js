import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import NotFound from './not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './home'),
  loading: () => null,
  modules: ['homepage']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route component={NotFound} />
  </Switch>
);
