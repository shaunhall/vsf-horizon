import { Context } from '@vue-storefront/core';
import { ProductQuery, ProductQueryVariables } from 'src/graphql-types';
import { Product } from 'src/types';
import productQuery from 'src/graphql-operations/queries/product.graphql';

export async function getProduct(context: Context, params: ProductQueryVariables): Promise<Product[]> {

  if (params.sku) {
    const variables = { sku: params.sku } as any;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    let productData: ProductQuery;
    try {
      productData = await context.client.query({ query: productQuery, variables }).data;
    } catch (err) {
      console.error(err);
    }
    return [productData.product];
  } else {
    return [];
  }
}
