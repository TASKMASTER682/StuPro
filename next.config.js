module.exports = {
  publicRuntimeConfig: {
    APP_NAME: 'ProGrad',
    API_DEVELOPMENT: 'http://localhost:8000/api',
    PRODUCTION: true,
    DOMAIN_PRODUCTION: 'https://www.theprograd.com',
    FB_APP_ID: '721482821740858',
    DISQUS_SHORTNAME: 'stupro-1',
    GOOGLE_CLIENT_ID: '589470153090-ktn1h4h0bc4jfcrd5uj47ibf8mfj6gp8.apps.googleusercontent.com',
    API_PRODUCTION: 'https://kind-lime-jackrabbit-slip.cyclic.app/api',
    DOMAIN_DEVELOPMENT: 'http://localhost:3000',
  },

  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/jobs-sitemap/",
      },
      {
        source: "/feed.xml",
        destination: "/api/rss-feed/",
      },

    ];
  },
}


