import { apiClientFactory } from '@vue-storefront/core';
import type { Endpoints } from './types';
import { getProduct } from './api/getProduct';
import { getForm } from './api/getForm';
import { getPage } from './api/getPage';
import { getSearch } from './api/getSearch';
import { getSettings } from './api/getSettings';
import {
  getUser,
  updateUserDetails,
  updateUserEmail,
  updateUserPassword,
  login,
  logout,
  register
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

const middlewareLink = new ApolloLink((operation, forward) => {
  const context = operation.getContext();
  const cookie = context?.headers?.cookie;
  const currencyCookie = cookie?.match(/en_currency_V6=([^;]+)/)?.length ? cookie.match(/en_currency_V6=([^;]+)/)[1] : '';
  const shippingCookie = cookie?.match(/en_shippingCountry_V6=([^;]+)/)?.length ? cookie.match(/en_shippingCountry_V6=([^;]+)/)[1] : '';
  operation.variables = {
    ...operation.variables,
    currency: currencyCookie,
    shippingDestination: shippingCookie
  };
  return forward(operation);
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const context = operation.getContext();
    const {
      response: { headers }
    } = context;
    const initialCookie = headers && headers.get('set-cookie');
    cookieResponse = process.env.NODE_ENV === 'production' ? initialCookie : initialCookie?.replace(/Domain=[^;]+;|Secure;/g, '');
    return response;
  });
});

function onCreate(settings) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
      middlewareLink,
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
        errorPolicy: 'all'
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
        cookieResponse && res.cookie(cookieResponse);
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
    getForm,
    getReviews,
    getPage,
    getBasket,
    getSearch,
    getSettings,
    getUser,
    updateUserDetails,
    updateUserPassword,
    updateUserEmail,
    login,
    register,
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
