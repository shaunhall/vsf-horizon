import { Context } from '@vue-storefront/core';
import { SearchQuery, SearchQueryVariables } from 'src/graphql-types';
import { Search } from 'src/types';
import searchQuery from 'src/graphql-operations/queries/search.graphql';
import { queryWithCookies } from './_utils';

export async function getSearch(context: Context, params: SearchQueryVariables): Promise<Search> {
  const variables = {
    query: params.query,
    sort: params.sort
  } as SearchQueryVariables;
  if (params.offset) variables.offset = params.offset;
  if (params.limit) variables.limit = params.limit;
  if (params.facets) variables.facets = params.facets;
  const searchData: SearchQuery = await queryWithCookies(context, searchQuery, variables)
    .then(res => res.data);
  return searchData.search;
}
