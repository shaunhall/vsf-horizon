import {
  ProductContentFragment,
  ProductReviews,
  Review as GqlReview,
  BasketContentsFragment,
  VariantContentFragment,
  CollectionQuery,
  ProductListContentsFragment,
  SearchQuery,
  UpdateAccountSettingsMutation,
  UpdateEmailMutation,
  UpdatePasswordMutation,
  LoginMutation,
  CustomerInfoFragment,
  FormFieldContentsFragment,
  RegistrationMutation,
  Currency as GqlCurrency,
  Country as GqlCountry,
  InitialSettingsQuery,
  NavigationItemFragment
} from './graphql-types';

import type { ArrElement } from './_utils';

export type TODO = unknown;

export type Endpoints = TODO;

export type BillingAddress = TODO;

export type Cart = BasketContentsFragment;

export type CartItem = ArrElement<BasketContentsFragment['items']>;

export type Coupon = TODO;

export type Page = CollectionQuery['page'];

export type Facet = ProductListContentsFragment;

export type FormField = FormFieldContentsFragment;

export type FormFieldInput = { type: 'register' | 'settings' | 'password' };

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

export type User = CustomerInfoFragment;

export type UserUpdateDetailsResult = UpdateAccountSettingsMutation['updateAccountSettings'];

export type UserUpdateEmailResult = UpdateEmailMutation['updateEmailAddress'];

export type UserUpdatePasswordResult = UpdatePasswordMutation['updatePassword'];

export type UserLoginResult = LoginMutation['login'];

export type UserRegisterResult = RegistrationMutation['register'];

export type UserBillingAddress = TODO;

export type UserBillingAddressItem = TODO;

export type UserBillingAddressSearchCriteria = TODO;

export type UserShippingAddress = TODO;

export type UserShippingAddressItem = TODO;

export type UserShippingAddressSearchCriteria = TODO;

export type ShippingAddress = TODO;

export type ShippingMethod = TODO;

export type ShippingProvider = TODO;

export type Navigation = NavigationItemFragment;

export type SiteSettings = InitialSettingsQuery;

export type Currency = GqlCurrency;

export type Country = GqlCountry;

export type Wishlist = TODO;

export type WishlistItem = TODO;
