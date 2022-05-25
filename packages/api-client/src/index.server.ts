import { apiClientFactory } from '@vue-storefront/core';
import type { Setttings, Endpoints } from './types';
import { getProduct } from './api/getProduct';
import { getReviews } from './api/getReviews';
import {
  getBasket,
  addToBasket,
  removeFromBasket,
  updateItemQty,
  clearBasket,
  applyCodeToBasket,
  removeCodeFromBasket,
  isInCart
} from './api/basket';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  InMemoryCache,
  HttpLink
} from '@apollo/client/core';

function onCreate(settings: Setttings) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: settings.api.url + '/graphql', fetch })
  });
  return {
    config: settings,
    client
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getProduct,
    getReviews,
    getBasket,
    addToBasket,
    removeFromBasket,
    updateItemQty,
    clearBasket,
    applyCodeToBasket,
    removeCodeFromBasket,
    isInCart
  }
});

export {
  createApiClient
};
