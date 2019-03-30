import React from 'react';
import Loadable from 'react-loadable';
import RouteList from '../shared/components/route-list';

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
    path: '/movie-list',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "movie-list" */ './movie-list'),
      loading: () => null,
      modules: ['movie-list']
    }),
    exact: true
  },
  {
    path: '/not-found',
    component: Loadable({
      loader: () => import(/* webpackChunkName: "not-found" */ './not-found'),
      loading: () => null,
      modules: ['not-found']
    }),
    exact: true
  }
];

const MainRoutes = () => <RouteList routes={routes} />;

export default MainRoutes;
