import { apiClientFactory } from '@vue-storefront/core';
import type { Endpoints } from './types';
import { getProduct } from './api/getProduct';
import { getCategories } from './api/getCategory';
import { getFacets } from './api/getFacet';
import { getReviews } from './api/getReviews';
import { startCheckout } from './api/checkout';
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

function onCreate(settings) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: settings.api.url,
      credentials: 'include',
      fetch })
  });
  return {
    config: settings,
    client
  };
}

const { createApiClient } = apiClientFactory<unknown, Endpoints>({
  onCreate,
  api: {
    getProduct,
    getReviews,
    getCategories,
    getFacets,
    getBasket,
    addToBasket,
    removeFromBasket,
    updateItemQty,
    clearBasket,
    applyCodeToBasket,
    removeCodeFromBasket,
    isInCart,
    startCheckout
  }
});

export {
  createApiClient
};
