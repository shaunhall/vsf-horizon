import {
  Context,
  useCategoryFactory,
  UseCategoryFactoryParams
} from '@vue-storefront/core';
import type { Category } from '@vue-storefront/horizon-api';
import type {
  UseCategorySearchParams as SearchParams
} from '../types';

const params: UseCategoryFactoryParams<Category, SearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  categorySearch: async (context: Context, params) => {
    const data = await context.$horizon.api.getCategories(params);
    console.log(data);
    return data;
  }
};

export const useCategory = useCategoryFactory<Category, any>(params);
