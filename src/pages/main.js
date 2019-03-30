import React from 'react';
import MainRoutes from './main.routes';
import { NodeManager } from 'react-register-nodes';
import { Snackbar, SnackbarProvider } from 'shared/components/snackbar';

import Head from '../shared/components/head';

const Main = () => (
  <NodeManager>
    <SnackbarProvider>
      <Head />
      <MainRoutes />
      <Snackbar />
    </SnackbarProvider>
  </NodeManager>
);

export default Main;
