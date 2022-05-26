module.exports = {
  integrations: {
    horizon: {
      location: '@vue-storefront/horizon-api/server',
      configuration: {
        api: {
          url: process.env.API_URL
        }
      }
    }
  }
};
