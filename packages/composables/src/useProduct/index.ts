import {
  Context,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/horizon-api';
import type {
  UseProductSearchParams as SearchParams
} from '../types';

const params: UseProductFactoryParams<Product, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    console.log('IN PROGRESS: useProduct.productsSearch with params: ' + JSON.stringify(params));

    const data = await context.$horizon.api.getProduct(params);
    // console.log('COMPLETE WITH DATA RETURNED: ', data);
    return data;
  }
};

export const useProduct = useProductFactory<Product, SearchParams>(params);
