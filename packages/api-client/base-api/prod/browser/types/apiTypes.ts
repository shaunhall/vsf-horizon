import { ASTNode } from 'graphql'
import { Country, Currency, DiscussionCategory, OrderCancellationReason, ProductSort, WishlistSort } from './apiBaseTypes'

export interface FetchOptions {
  operationName?: string;
  protectedFetch?: boolean;
}

export interface FetchAPIVariables {
  operation: ASTNode;
  variables?: Record<string, any>;
  options?: FetchOptions
}

export interface GraphQLBody extends Response {
  data?: Record<string, any>;
  errors?: Record<string, any>[];
  extensions?: Record<string, any>;
}

export type FetchAPI = (operation: ASTNode, variables?: Record<string, any>, options?: FetchOptions, overrideProtectedFetch?: boolean) => Promise<GraphQLBody>

interface FacetInput {
  facetName: string
  selections: {
    optionName?: string
    from?: number
    to?: number
  }[]
}

type ID = number | string

export interface BasketQueryVariables {
  id: ID,
  currency?: Currency
  shippingDestination?: Country
}

export interface CollectionClientQueryVariables {
  handle: string
  offset?: number
  limit?: number
  sort: ProductSort
  facets?: FacetInput[]
}

export interface CollectionServerQueryVariables {
  handle: string
  offset?: number
  limit?: number
  sort: ProductSort
}

export interface DiscussionQueryVariables {
  id: ID
  offset?: number
  limit?: number
}

export interface DiscussionsQueryVariables {
  offset?: number
  limit?: number
}

export interface OrderDetailsQueryVariables {
  id: string
}

export interface OrderHistoryQueryVariables {
  offset?: number
}

export interface ProductQueryVariables {
  sku: number
}

export interface RecentOrdersQueryVariables {
  offset?: number
  limit?: number
}

export interface ReviewsQueryVariables {
  sku: number
  offset?: number
  limit?: number
}

export interface SearchQueryVariables {
  query: string
  offset?: number
  limit?: number
  sort: ProductSort
  facets?: FacetInput[]
}

export interface AccountAddAddressMutationVariables {
  addresseeName: string
  addressLine1: string
  addressLine2: string
  addressLine3: string
  addressLine4: string
  addressLine5: string
  postalCode: string
  country: Country
  phoneNumber: number
  companyName: string
}

export interface AccountReplaceAddressMutationVariables {
  addresseeName: string
  addressLine1: string
  addressLine2: string
  addressLine3: string
  addressLine4: string
  addressLine5: string
  postalCode: string
  country: Country
  phoneNumber: number
  companyName: string
  id: ID
}

export interface SearchProductQueryVariables {
  offset: number
  limit: number
}

export interface AccountUpdateDetailsMutationVariables {
  fieldList: {
    fieldName: string
    value: string
  }[]
}

export interface AccountUpdateEmailMutationVariables {
  password: string
  newEmail: string
}

export interface AccountUpdatePasswordMutationVariables {
  currentPassword: string
  newPassword: string
}

export interface AddSampleToBasketMutationVariables {
  sku: number
  basketId: ID
  selectYourSampleId: ID
  tierId: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface ApplyDiscountCodeToBasketMutationVariables {
  basketId: ID
  code: string
  shippingDestination?: Country
  currency?: Currency
}

export interface AddToBasketMutationVariables {
  sku: number
  qty: number
  id?: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface AddToWishlistMutationVariables {
  sku: number
}

export interface CreateDiscussionMutationVariables {
  input: {
    category: DiscussionCategory
    selection?: {
      selectedOrderId: ID
      selectedProductSkus: number[]
    }
    message: {
      message: string
      attachmentToken?: string
    }
  }
}

export interface CancelFullOrderMutationVariables {
  orderNumber: string
  reason: OrderCancellationReason
}

export interface CancelPartOrderMutationVariables {
  orderNumber: string
  products: {
    sku: number
    quantity: number
    reason: OrderCancellationReason
  }[]
}

export interface CancelOrderSpecialOfferGroupsMutationVariables {
  orderNumber: string
  groups: {
    group: string
    reason: OrderCancellationReason
  }[]
}

export interface ForgottenPasswordMutationVariables {
  username: string
}

export interface MarkDiscussionMessagesAsReadMutationVariables {
  discussionId: ID
  latestMessage: ID
}

export interface RegisterAccountMutationVariables {
  email: string
  password: string
  fullName: string
  marketingConsent: string
}

export interface RemoveAddressMutationVariables {
  addressId: ID
}

export interface RemoveCardMutationVariables {
  cardId: ID
}

export interface RemoveDiscountCodeFromBasketMutationVariables {
  basketId: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface RemoveFromBasketMutationVariables {
  itemId: ID
  basketId: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface RemoveSampleFromBasketMutationVariables {
  sku: number
  basketId: ID
  selectYourSampleId: ID
  tierId: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface RemoveSocialLinkMutationVariables {
  socialLinkId: string
}

export interface ReplyToDiscussionMutationVariables {
  discussionId: ID
  input: {
    message: string
    attachmentToken?: string
  }
}

export interface ResolvePaymentProblemVariables {
  orderNumber: string
}

export interface StartCheckoutMutationVariables {
  basketId: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface StartCheckoutWithPaymentMethodMutationVariables {
  paymentMethod: string
  basketId: ID
  shippingDestination?: Country
  currency?: Currency
}

export interface UpdateMarketingPreferencesMutationVariables {
  newValue: boolean
  messageShown: string
  formIdentifier: string
  formLocation: string
}

export interface UserLoginMutationVariables {
  username: string
  password: string
}

export interface CreditQueryVariables {
  currency: Currency
}

export interface ResetPasswordMutationVariables {
  username: string
  token: string
  password: string
}

export interface RemoveFromWishlistMutationVariables {
  sku: number
}
export interface WishlistQueryVariables {
  currency?: Currency
  shippingDestination?: Country
  sort: WishlistSort
  offset?: number
  limit?: number
}

export type VariableOperation<T> = (variables: T, options?: FetchOptions) => ReturnType<FetchAPI>

export type NonVariableOperation = (options?: FetchOptions) => ReturnType<FetchAPI>

export type ProtectedVariableOperation<T> = (variables?: T, options?: FetchOptions) => ReturnType<FetchAPI>

export type ProtectedNonVariableOperation = (options?: FetchOptions) => ReturnType<FetchAPI>