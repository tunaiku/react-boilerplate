import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import NotFound from './not-found';

const Homepage = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './home'),
  loading: null,
  modules: ['homepage']
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "homepage" */ './404'),
  loading: null,
  modules: ['404']
});

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/404" component={NotFound} />
    <Route render={() => <Redirect to="/404" />} />
  </Switch>
);
