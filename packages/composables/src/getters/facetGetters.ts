import {
  FacetsGetters,
  FacetSearchResult,
  AgnosticCategoryTree,
  AgnosticPagination,
  AgnosticSort,
  AgnosticBreadcrumb,
  AgnosticFacet
} from '@vue-storefront/core';
import type { Facet, FacetSearchCriteria } from '@vue-storefront/horizon-api';
import { ProductListContentsFragment } from '@vue-storefront/horizon-api/lib/graphql-types';
import { getAgnosticFacets, getGroupedAgnosticFacets, GroupedFacetWithType } from 'src/usePage/_utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAll(params: FacetSearchResult<Facet>, criteria?: unknown): AgnosticFacet[] {
  return getAgnosticFacets(params.data.facets, params.input);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFacetIds(params: FacetSearchResult<Facet>): string[] {
  return params.data.facets.map(facet => facet.facetName);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGrouped(params: FacetSearchResult<Facet>, criteria?: unknown): GroupedFacetWithType[] {
  return getGroupedAgnosticFacets(params.data?.facets, params.input);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getSortOptions = (params: FacetSearchResult<Facet>): AgnosticSort => {
  const options = [
    { type: 'sort', id: 'RELEVANCE', value: 'Default', count: null },
    { type: 'sort', id: 'POPULARITY', value: 'Popularity', count: null },
    { type: 'sort', id: 'PRICE_LOW_TO_HIGH', value: 'Price: Low to High', count: null },
    { type: 'sort', id: 'PRICE_HIGH_TO_LOW', value: 'Price: High to Low', count: null },
    { type: 'sort', id: 'NAME_ALPHABETICALLY', value: 'A - Z', count: null },
    { type: 'sort', id: 'NEWEST_TO_OLDEST', value: 'Newest Arrivals', count: null },
    { type: 'sort', id: 'DISCOUNT_PERCENTAGE_HIGH_TO_LOW', value: 'Percentage Discount', count: null }
  ];
  return { options, selected: params.input.sort };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryTree(params: FacetSearchResult<Facet>): AgnosticCategoryTree {
  return undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getProducts(params: FacetSearchResult<Facet>): ProductListContentsFragment['products'] {
  return params?.data?.products;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPagination(params: FacetSearchResult<Facet>): AgnosticPagination {
  return params ? {
    currentPage: params?.input?.page || 1,
    totalPages: Math.ceil(params?.data?.total / params?.input?.itemsPerPage),
    totalItems: params?.data?.total,
    itemsPerPage: params?.input?.itemsPerPage,
    pageOptions: []
  } : null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(params: FacetSearchResult<Facet>): AgnosticBreadcrumb[] {
  // NOT USED IN FACETS, GO TO COLLECTIONS
  return undefined;
}

export const facetGetters: FacetsGetters<Facet, FacetSearchCriteria> = {
  getSortOptions,
  getGrouped,
  getAll,
  getFacetIds,
  getProducts,
  getCategoryTree,
  getBreadcrumbs,
  getPagination
};
