import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import Main from 'components/main';
import Header from 'components/header';
const routes = [
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
    <Main>
      <Switch>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
    </Main>
  </>
);
