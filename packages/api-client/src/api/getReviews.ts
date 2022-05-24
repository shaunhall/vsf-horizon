import { reviewsQuery } from '@horizon-base-api/node';
import { Context } from '@vue-storefront/core';
import { Review } from 'src/types';

export async function getReviews(context: Context, params): Promise<Review> {

  if (params.sku) {
    const variables = { sku: params.sku } as any;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    const data = await context.client.apply(reviewsQuery, variables);
    return data.product.reviews;
  } else {
    return null;
  }
}
