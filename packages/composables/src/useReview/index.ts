import {
  Context,
  useReviewFactory,
  UseReviewFactoryParams
} from '@vue-storefront/core';
import type { Review } from '@vue-storefront/horizon-api';
import type {
  UseReviewSearchParams as SearchParams,
  UseReviewAddParams as AddParams
} from '../types';

const params: UseReviewFactoryParams<Review, SearchParams, AddParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchReviews: async (context: Context, params) => {
    console.log('IN PROGRESS: userReview.searchReviews with params: ' + JSON.stringify(params));

    const data = await context.$horizon.api.getReviews(params);
    // console.log('COMPLETE WITH DATA RETURNED: ', data);
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addReview: async (context: Context, params) => {
    console.log('Mocked: useReview.addReview');
    return null;
  }
};

export const useReview = useReviewFactory<Review, SearchParams, AddParams>(params);
