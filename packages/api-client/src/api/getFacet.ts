import { Context } from '@vue-storefront/core';
import { CollectionQuery, CollectionQueryVariables } from 'src/graphql-types';
import { Facet } from 'src/types';
import collectionQuery from 'src/graphql-operations/queries/collection.graphql';

export async function getFacets(context: Context, params: CollectionQueryVariables): Promise<Facet> {

  if (params.handle) {
    const variables = {
      handle: params.handle,
      sort: params.sort
    } as CollectionQueryVariables;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    if (params.facets) variables.facets = params.facets;
    const collectionData: CollectionQuery = await context.client.query({ query: collectionQuery, variables })
      .then(res => res.data)
      .catch((err) => {
        console.log(err);
      });
    return collectionData.page;
  } else {
    return undefined;
  }
}
