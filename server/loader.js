// Express requirements
import path from 'path';
import fs from 'fs';

// React requirements
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import StaticRouter from 'react-router-dom/StaticRouter';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';
import cheerio from 'cheerio';

// Our store, entrypoint, and manifest
import Routes from 'routes';
import AppStore from 'app.store';

// import manifest from '../../build/asset-manifest.json';

// LOADER
module.exports = (req, res) => {
  // Load in our HTML file from our build
  fs.readFile(path.resolve(__dirname, '../build/index.html'), 'utf8', (err, htmlData) => {
    // If there's an error... serve up something nasty
    if (err) {
      console.error('Read error', err);

      return res.status(404).end();
    }

    // Create a store (with a memory history) from our current url
    const { store } = AppStore(req.url);
    // set device type to tell our header component what initial header type should render

    const context = {};
    const modules = [];

    /*
        Here's the core funtionality of this file. We do the following in specific order (inside-out):
          1. Load the <App /> component
          2. Inside of the Frontload HOC
          3. Inside of a Redux <StaticRouter /> (since we're on the server), given a location and context to write to
          4. Inside of the store provider
          5. Inside of the React Loadable HOC to make sure we have the right scripts depending on page
          6. Render all of this sexiness
          7. Make sure that when rendering Frontload knows to get all the appropriate preloaded requests
        In English, we basically need to know what page we're dealing with, and then load all the appropriate scripts and
        data for that page. We take all that information and compute the appropriate state to send to the user. This is
        then loaded into the correct components and sent as a Promise to be handled below.
      */
    frontloadServerRender(() =>
      renderToString(
        <Loadable.Capture report={m => modules.push(m)}>
          <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
              <Frontload isServer={true} deviceType="mobile">
                <Routes />
              </Frontload>
            </StaticRouter>
          </Provider>
        </Loadable.Capture>
      )
    ).then(routeMarkup => {
      if (context.url) {
        // context.url will contain a redirect URL to redirect  when a <Redirect> component from react router was used
        // then we need to handle a redirection
        const location = { Location: context.url };
        switch (context.url) {
          case '/server-error':
            res.writeHead(307, location);
            res.end();
            break;
          default:
            res.writeHead(301, location);
            res.end();
        }
      } else {
        // Otherwise, we carry on...

        // We need to tell Helmet to compute the right meta tags, title, and such
        const helmet = Helmet.renderStatic();

        // function to load all page-specific assets in code splitting
        // const extractAssets = (assets, chunks, assetType) =>
        //   Object.keys(assets)
        //     .filter(asset => chunks.indexOf(asset.replace('.' + assetType, '')) > -1)
        //     .map(k => assets[k]);

        // get the css chunks according the page url, wee need to render inline the extra chunks to prevent blinked page when init the page
        // const cssExtraChunksLink = extractAssets(manifest, modules, 'css');

        /*
         A simple helper function to prepare the HTML markup. This loads:
         - Page title
         - SEO meta tags
         - Preloaded state (for Redux) depending on the current route
         - Code-split script tags depending on the current route
        */
        const injectHTML = (data, { html, title, meta, body, state }) => {
          // load html with cheerio
          const $ = cheerio.load(data);
          let cssLinks = [];
          let cssInline = [];

          // get main style href link
          $('link[rel="stylesheet"]').map((i, elem) => cssLinks.push(elem.attribs.href));
          $('link[rel="stylesheet"]').remove();

          cssLinks.forEach(link =>
            cssInline.push(fs.readFileSync(path.resolve(__dirname, '../build') + link, 'utf8'))
          );

          data = $.html();
          data = data.replace('<html>', `<html ${html}>`);
          data = data.replace(/<title>.*?<\/title>/g, title);
          data = data.replace('</head>', `${meta}<style>${cssInline.join('')}</style></head>`);
          data = data.replace(
            '<div id="root"></div>',
            `<div id="root">${body}</div><script>window.__PRELOADED_STATE__ = ${state}</script>`
          );

          return data;
        };
        // Pass all this nonsense into our HTML formatting function above
        const html = injectHTML(htmlData, {
          html: helmet.htmlAttributes.toString(),
          title: helmet.title.toString(),
          meta: helmet.meta.toString(),
          body: routeMarkup,
          // extraCss: cssExtraChunksLink,
          state: JSON.stringify(store.getState()).replace(/</g, '\\u003c')
        });

        // We have all the final HTML, let's send it to the user already!
        res.send(html);
      }
    });
  });
};
