import env from './env';

export default (() => {
  switch (env) {
    case 'development':
      return {
        HOST_URL: 'https://api.tvmaze.com/search/shows'
      };
    case 'staging':
      return {
        HOST_URL: 'https://api.tvmaze.com/search/shows'
      };
    case 'production':
      return {
        HOST_URL: 'https://api.tvmaze.com/search/shows'
      };
    default:
      return {
        HOST_URL: 'https://api.tvmaze.com/search/shows'
      };
  }
})();
