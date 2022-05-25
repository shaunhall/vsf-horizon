import { Context } from '@vue-storefront/core';
import { Product, ProductQueryVariables } from 'src/graphql-types';
import productQuery from 'src/graphql-operations/queries/product.graphql';

export async function getProduct(context: Context, params: ProductQueryVariables): Promise<Product[]> {

  if (params.sku) {
    const variables = { sku: params.sku } as any;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    let productData;
    try {
      productData = await context.client.query({ query: productQuery, variables });
    } catch (err) {
      console.error(err);
    }
    return [productData.data];
  } else {
    return [];
  }
}
