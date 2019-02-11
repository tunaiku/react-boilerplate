import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Body from 'shared/components/body';
import Header from 'shared/components/header';

const pages = [
  {
    path: '/',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "home" */ './home'),
      loading: () => null,
      modules: ['home']
    }),
    exact: true
  },
  {
    path: '/movies',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "movies" */ './movies'),
      loading: () => null,
      modules: ['movies']
    }),
    exact: true
  },

  {
    path: '/404',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "404" */ './not-found'),
      loading: () => null,
      modules: ['404']
    }),
    exact: true
  }
];

export default () => (
  <>
    <Header />
    <Body>
      <Switch>
        {pages.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Body>
  </>
);
