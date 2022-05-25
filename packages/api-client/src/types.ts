import {
  ProductContentFragment,
  ProductReviews,
  Review as GqlReview,
  BasketContentsFragment,
  VariantContentFragment
} from './graphql-types';
import type { ArrElement } from './_utils';

export type TODO = unknown;

export type Api = {
  url: string
};

export type Setttings = {
  api: Api
};

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = BasketContentsFragment;

export type CartItem = ArrElement<BasketContentsFragment['items']>;

export type Category = TODO;

export type Coupon = TODO;

export type Facet = TODO;

export type FacetSearchCriteria = TODO;

export type Order = TODO;

export type OrderItem = TODO;

export type PasswordResetResult = TODO;

export type Product = ProductContentFragment;

export type ProductVariant = VariantContentFragment;

export type ProductVariantFilter = {
  sku?: number
  title?: string
  inStock?: boolean
};

export type ProductFilter = TODO;

export type Review = ProductReviews;

export type ReviewItem = GqlReview;

export type User = TODO;

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Store = TODO;

export type Wishlist = TODO;

export type WishlistItem = TODO;
