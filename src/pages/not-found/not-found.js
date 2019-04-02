import React, { Fragment } from 'react';
import Head from 'shared/components/head';
import ScriptInjection from 'shared/components/script-injection';

const NotFound = () => (
  <Fragment>
    <Head id="not-found" title="Not Found" noCrawl />
    <h1>Page Not Found</h1>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse corrupti maxime eaque rerum
      expedita ipsum obcaecati debitis odit et repellat, dolore, voluptatibus quam consequatur minus
      numquam nihil repudiandae ex dolor perferendis.
    </p>
  </Fragment>
);

export default NotFound;
