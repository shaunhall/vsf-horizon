import { integrationPlugin } from '@vue-storefront/core';

export default integrationPlugin(({
  integration,
  app
  // Other properties from Nuxt.js context like `app`, `route`, `res`, `req`, etc.
}) => {
  const configuration = { app };

  integration.configure('horizonApp', configuration);
});
