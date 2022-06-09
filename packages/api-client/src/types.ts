import {
  ProductContentFragment,
  ProductReviews,
  Review as GqlReview,
  BasketContentsFragment,
  VariantContentFragment,
  CollectionQuery,
  ProductListContentsFragment,
  HeaderFooterQuery,
  SearchQuery
} from './graphql-types';
import type { ArrElement } from './_utils';

export type TODO = unknown;

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = BasketContentsFragment;

export type CartItem = ArrElement<BasketContentsFragment['items']>;

export type Category = ArrElement<HeaderFooterQuery['header']['navigation']['topLevel']>;

export type Coupon = TODO;

export type Page = CollectionQuery['page'];

export type Facet = ProductListContentsFragment;

export type Widget = ArrElement<CollectionQuery['page']['widgets']>;

export type FacetSearchCriteria = ProductListContentsFragment['products'];

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

export type Search = SearchQuery['search'];

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
