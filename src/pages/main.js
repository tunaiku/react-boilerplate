import React from 'react';
import MainRoutes from './main.routes';
import { NodeManager } from 'react-register-nodes';
import { Snackbar, SnackbarProvider } from 'shared/components/snackbar';
import Head from 'shared/components/head';
import registerFaIcons from 'shared/utils/register-fa-icons.util';

registerFaIcons(); // register font awesome icon for client side

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
