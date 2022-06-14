import { apiClientFactory } from '@vue-storefront/core';
import type { Endpoints } from './types';
import { getProduct } from './api/getProduct';
import { getCategories } from './api/getCategory';
import { getPage } from './api/getPage';
import { getSearch } from './api/getSearch';
import { getState } from './api/getState';
import {
  getUser,
  updateUserDetails,
  updateUserEmail,
  updateUserPassword,
  login,
  logout
} from './api/getUser';
import { getReviews } from './api/getReviews';
import { startCheckout } from './api/checkout';
import {
  getBasket,
  addToBasket,
  removeFromBasket,
  updateItemQty,
  clearBasket,
  applyCodeToBasket,
  removeCodeFromBasket
} from './api/basket';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  ApolloLink,
  from,
  InMemoryCache,
  HttpLink
} from '@apollo/client/core';

let cookieResponse: string;

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext();
    const {
      response: { headers }
    } = context;
    if (headers) {
      const initialCookie = headers.get('set-cookie');
      console.log(initialCookie);
      cookieResponse = process.env.NODE_ENV === 'production' ? initialCookie : initialCookie?.replace(/Domain=[^;]+;|Secure;/g, '');
      console.log(cookieResponse);
    }

    return response;
  });
});

function onCreate(settings) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      afterwareLink,
      new HttpLink({
        uri: settings.api.url,
        credentials: 'include',
        fetch })]),
    defaultOptions: {
      query: {
        errorPolicy: 'ignore'
      },
      mutate: {
        errorPolicy: 'ignore'
      }
    }
  });
  return {
    config: settings,
    client
  };
}

const setCookieExtension = {
  name: 'setCookieExtension',
  hooks: (req, res) => {
    return {
      afterCall: ({ response }) => {
        res.cookie(cookieResponse);
        return response;
      }
    };
  }
};

const { createApiClient } = apiClientFactory<unknown, Endpoints>({
  onCreate,
  extensions: [setCookieExtension],
  api: {
    getProduct,
    getReviews,
    getCategories,
    getPage,
    getBasket,
    getSearch,
    getState,
    getUser,
    updateUserDetails,
    updateUserPassword,
    updateUserEmail,
    login,
    logout,
    addToBasket,
    removeFromBasket,
    updateItemQty,
    clearBasket,
    applyCodeToBasket,
    removeCodeFromBasket,
    startCheckout
  }
});

export {
  createApiClient
};
