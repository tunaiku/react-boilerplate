import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "homepage" */ './home'),
      loading: () => null
    }),
    exact: true
  },
  {
    path: '/movies',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "movie" */ './movies'),
      loading: () => null
    }),
    exact: true
  },

  {
    path: '/404',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "404" */ './not-found'),
      loading: () => null
    }),
    exact: true
  }
];

export default () => (
  <Switch>
    {routes.map(route => <Route key={route.path} {...route} />)}
    <Route render={() => <Redirect to="/404" />} />
  </Switch>
);
