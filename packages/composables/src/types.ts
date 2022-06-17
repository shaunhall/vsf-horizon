import {
  AgnosticFacetSearchParams,
  ProductsSearchParams
} from '@vue-storefront/core';
import { Country, Currency, SiteSettings } from '@vue-storefront/horizon-api';
import { OrderDetailsQueryVariables, OrderHistoryQueryVariables, RegistrationMutationVariables, UpdateAccountSettingsMutationVariables, UpdateEmailMutationVariables } from '@vue-storefront/horizon-api/lib/graphql-types';

export type TODO = any;

export type UseBillingAddParams = TODO;

export type UseCategorySearchParams = TODO;

export type UseFacetSearchParams = AgnosticFacetSearchParams;

export type UseProductSearchParams = ProductsSearchParams;

export type UseReviewSearchParams = TODO;

export type UseReviewAddParams = TODO;

export type UseShippingAddParams = TODO;

export type UseUserUpdateParams = UpdateAccountSettingsMutationVariables | UpdateEmailMutationVariables;

export type UseUserRegisterParams = RegistrationMutationVariables;

export type useUserOrderSearchParams = OrderDetailsQueryVariables | OrderHistoryQueryVariables;

// CUSTOM TYPES

export type ActiveSettings = {
  active: {
    currency: Currency
    shippingDestination: Country
  }
}

export type EnhancedSettings = SiteSettings & ActiveSettings
