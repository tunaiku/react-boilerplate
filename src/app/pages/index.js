import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './home'),
  loading: () => null,
  modules: ['homepage']
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './not-found'),
  loading: () => null,
  modules: ['not-found']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/404" component={NotFound} />
    <Route render={() => <Redirect to="/404" />} />
  </Switch>
);
