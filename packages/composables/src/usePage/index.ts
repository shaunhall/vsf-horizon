import {
  Context,
  useFacetFactory,
  FacetSearchResult
} from '@vue-storefront/core';
import type {
  UseFacetSearchParams as SearchParams
} from '../types';
import { convertToLocalFacetParams } from './_utils';

const factoryParams = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<SearchParams>) => {
    const convertedParams = convertToLocalFacetParams(params.input);
    const data = await context.$horizon.api.getPage(convertedParams, params.input?.customQuery);
    return data;
  }
};

export const usePage = useFacetFactory<SearchParams>(factoryParams);
