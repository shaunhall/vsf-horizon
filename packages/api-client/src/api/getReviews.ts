import { Context } from '@vue-storefront/core';
import { ReviewsQuery, ReviewsQueryVariables } from 'src/graphql-types';
import { Review } from 'src/types';
import reviewsQuery from 'src/graphql-operations/queries/reviews.graphql';
import { queryWithCookies } from './_utils';

export async function getReviews(context: Context, params: ReviewsQueryVariables): Promise<Review> {

  if (params.sku) {
    const variables = { sku: params.sku } as any;
    if (params.offset) variables.offset = params.offset;
    if (params.limit) variables.limit = params.limit;
    const data = await queryWithCookies<ReviewsQuery>(context, reviewsQuery, variables).then(res => res.data);
    return data.product.reviews;
  } else {
    return null;
  }
}
