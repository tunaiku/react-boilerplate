// import server dependencies

const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const loadable = require('react-loadable');
const cookieParser = require('cookie-parser');

// compile our react and esnext code
require('./bootstrapper.js');

// Our loader - this basically acts as the entry point for each page load
const loader = require('./loader.js');

// Create our express app using the port optionally specified
const app = express();
const PORT = process.env.PORT || 3001;

// Compress, parse, log, and raid the cookie jar
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cookieParser());

// Set up homepage, static assets, and capture everything else
app.use(express.Router().get('/', loader));
app.use(express.static(path.resolve(__dirname, '../build')));
app.use(loader);

// We tell React Loadable to load all required assets and start listening - ROCK AND ROLL!
loadable.preloadAll().then(() => {
  app.listen(PORT, console.log(`App listening on port ${PORT}!`));
});

// Handle the bugs somehow
app.on('error', error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
});
