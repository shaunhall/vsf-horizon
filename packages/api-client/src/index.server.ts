import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import { getProduct } from './api/getProduct';
import { getReviews } from './api/getReviews';

class HorizonClient {

  async apply (operation, variables) {
    const data = await operation(variables)
      .then((req) => {
        const data = req.data;
        console.log(`Call complete with variable: ${JSON.stringify(variables)} - `, new Date().toJSON());
        return data;
      });
    return data;
  }
}

function onCreate(settings: Setttings) {
  process.env.API_URL = settings.api.url;
  const client = new HorizonClient();
  return {
    config: settings,
    client
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getProduct,
    getReviews
  }
});

export {
  createApiClient
};
