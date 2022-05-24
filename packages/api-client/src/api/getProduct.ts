import { productQuery } from '@horizon-base-api/node';
import { Context } from '@vue-storefront/core';
import { Product } from 'src/graphql-types';

export async function getProduct(context: Context, params): Promise<Product[]> {

  if (params.id) {
    const productInfo = await context.client.apply(productQuery, { sku: params.id });
    return [productInfo.product];
  } else {
    return [];
  }
}
