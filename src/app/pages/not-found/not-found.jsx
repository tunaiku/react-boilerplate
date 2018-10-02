import React, { Fragment } from 'react';
import Head from '../../shared/components/head';

export default () => (
  <Fragment>
    <Head id="not-found" title="Not Found" description="This is embarrassing." noCrawl />
    <h1>Page Not Found</h1>
  </Fragment>
);
