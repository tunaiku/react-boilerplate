const appEnv = process.env.REACT_APP_HOST_ENV;
const env = {};

switch (appEnv) {
  case 'development':
    env.apiEndpoints = {
      movies: 'https://api.tvmaze.com/search/shows'
    };
    break;
  default:
    env.apiEndpoints = {
      movies: 'https://api.tvmaze.com/search/shows'
    };
    break;
}

// export default envConstants;

export default env;
