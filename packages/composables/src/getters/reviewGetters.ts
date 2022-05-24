import { ReviewGetters, AgnosticRateCount } from '@vue-storefront/core';
import type { Review, ReviewItem } from '@vue-storefront/horizon-api';
import { RatingReviewElement, TextReviewElement } from '@vue-storefront/horizon-api/lib/graphql-types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(review: Review): ReviewItem[] {
  return review?.reviews?.reviews || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewId(item: ReviewItem): string {
  return item?.id || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewAuthor(item: ReviewItem): string {
  return item?.authorName || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewMessage(item: ReviewItem): string {
  const content = item.elements?.find(element => element.key === 'content') as TextReviewElement;
  return content?.value || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewRating(item: ReviewItem): number {
  const content = item.elements?.find(element => element.key === 'score') as RatingReviewElement;
  return content?.score || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewDate(item: ReviewItem): string {
  return item.posted || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(review: Review): number {
  return review.total;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(review: Review): number {
  return review.averageScore;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getRatesCount(review: Review): AgnosticRateCount[] {
  const rateCount: AgnosticRateCount[] = [];
  for (let i = 1; i <= 5; i++) {
    rateCount.push({
      rate: i,
      count: review[`count${i}score`]
    });
  }
  return rateCount;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getReviewsPage(review: Review): number {
  return 1;
}

export const reviewGetters: ReviewGetters<Review, ReviewItem> = {
  getItems,
  getReviewId,
  getReviewAuthor,
  getReviewMessage,
  getReviewRating,
  getReviewDate,
  getTotalReviews,
  getAverageRating,
  getRatesCount,
  getReviewsPage
};
