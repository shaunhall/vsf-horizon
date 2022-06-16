import {
  Context,
  useFacetFactory,
  FacetSearchResult
} from '@vue-storefront/core';
import type {
  UseFacetSearchParams as SearchParams
} from '../types';
import { convertToLocalSearchParams } from './_utils';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<SearchParams>) => {
    const convertedParams = convertToLocalSearchParams(params.input);
    const data = await context.$horizon.api.getSearch(convertedParams);
    return data;
  }
};

export const useSearch = useFacetFactory<SearchParams>(factoryParams);
