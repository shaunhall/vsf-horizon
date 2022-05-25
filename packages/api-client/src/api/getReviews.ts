import { Context } from '@vue-storefront/core';
import { ReviewsQueryVariables } from 'src/graphql-types';
import { Review } from 'src/types';
import reviewsQuery from 'src/graphql-operations/queries/reviews.graphql';

export async function getReviews(context: Context, params: ReviewsQueryVariables): Promise<Review> {

  if (params.sku) {
    const variables = { sku: params.sku } as any;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    const data = await context.client.query({ query: reviewsQuery, variables });
    return data.product.reviews;
  } else {
    return null;
  }
}
