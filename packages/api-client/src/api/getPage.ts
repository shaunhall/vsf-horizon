import { Context, CustomQuery } from '@vue-storefront/core';
import { CollectionQuery, CollectionQueryVariables } from 'src/graphql-types';
import { Page } from 'src/types';
import collectionQuery from 'src/graphql-operations/queries/collection.graphql';
import { queryWithCookies } from './_utils';

export async function getPage(context: Context, params: CollectionQueryVariables, customQuery: CustomQuery): Promise<Page> {
  if (params.handle) {
    const variables = {
      handle: params.handle,
      sort: params.sort
    } as CollectionQueryVariables;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    if (params.facets) variables.facets = params.facets;
    const collectionData = await queryWithCookies<CollectionQuery>(context, collectionQuery, variables, customQuery)
      .then(res => res.data);
    return collectionData.page;
  } else {
    return undefined;
  }
}
