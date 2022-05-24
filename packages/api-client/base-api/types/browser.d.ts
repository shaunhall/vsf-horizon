declare module "@horizon-base-api/browser" {
  import {
      ProtectedVariableOperation,
      ProtectedNonVariableOperation,
      NonVariableOperation,
      VariableOperation,
      BasketQueryVariables,
      CollectionClientQueryVariables,
      CollectionServerQueryVariables,
      CreditQueryVariables,
      DiscussionQueryVariables,
      DiscussionsQueryVariables,
      OrderDetailsQueryVariables,
      OrderHistoryQueryVariables,
      ProductQueryVariables,
      RecentOrdersQueryVariables,
      ReviewsQueryVariables,
      SearchQueryVariables,
      SearchProductQueryVariables,
      WishlistQueryVariables,
      AccountUpdateDetailsMutationVariables,
      AccountUpdateEmailMutationVariables,
      AccountUpdatePasswordMutationVariables,
      AddSampleToBasketMutationVariables,
      AddToWishlistMutationVariables,
      ApplyDiscountCodeToBasketMutationVariables,
      AddToBasketMutationVariables,
      CreateDiscussionMutationVariables,
      CancelFullOrderMutationVariables,
      CancelOrderSpecialOfferGroupsMutationVariables,
      CancelPartOrderMutationVariables,
      ResolvePaymentProblemVariables,
      ForgottenPasswordMutationVariables,
      MarkDiscussionMessagesAsReadMutationVariables,
      RegisterAccountMutationVariables,
      RemoveAddressMutationVariables,
      RemoveCardMutationVariables,
      RemoveDiscountCodeFromBasketMutationVariables,
      RemoveFromBasketMutationVariables,
      RemoveSampleFromBasketMutationVariables,
      RemoveSocialLinkMutationVariables,
      ReplyToDiscussionMutationVariables,
      StartCheckoutMutationVariables,
      StartCheckoutWithPaymentMethodMutationVariables,
      UpdateMarketingPreferencesMutationVariables,
      UserLoginMutationVariables,
      AccountAddAddressMutationVariables, 
      AccountReplaceAddressMutationVariables, 
      ResetPasswordMutationVariables,
      RemoveFromWishlistMutationVariables
  } from '~/types/apiTypes'
  export const checkQuery: NonVariableOperation
  export const accountSettingsFormQuery: ProtectedNonVariableOperation
  export const addressesQuery: ProtectedNonVariableOperation
  export const attachmentUploaderConfigQuery: ProtectedNonVariableOperation
  export const basketQuery: VariableOperation<BasketQueryVariables>
  export const collectionClientQuery: VariableOperation<CollectionClientQueryVariables>
  export const collectionServerQuery: VariableOperation<CollectionServerQueryVariables>
  export const customerQuery: NonVariableOperation
  export const creditQuery: VariableOperation<CreditQueryVariables>
  export const discussionQuery: ProtectedVariableOperation<DiscussionQueryVariables>
  export const discussionsQuery: ProtectedVariableOperation<DiscussionsQueryVariables>
  export const emailFieldQuery: ProtectedNonVariableOperation
  export const headerFooterQuery: NonVariableOperation
  export const marketingConsentFormQuery: NonVariableOperation
  export const orderDetailsQuery: ProtectedVariableOperation<OrderDetailsQueryVariables>
  export const orderHistoryQuery: ProtectedVariableOperation<OrderHistoryQueryVariables>
  export const paymentCardsQuery: ProtectedNonVariableOperation
  export const productQuery: VariableOperation<ProductQueryVariables>
  export const productSearchQuery: VariableOperation<ProductQueryVariables>
  export const recentOrdersQuery: ProtectedVariableOperation<RecentOrdersQueryVariables>
  export const reviewsQuery: ProtectedVariableOperation<ReviewsQueryVariables>
  export const registerFormQuery: NonVariableOperation
  export const searchQuery: VariableOperation<SearchQueryVariables>
  export const searchProductsQuery: VariableOperation<SearchProductQueryVariables>
  export const searchProductSkusQuery: VariableOperation<SearchProductQueryVariables>
  export const sitemapPathsQuery: NonVariableOperation
  export const socialAccountsQuery: NonVariableOperation
  export const wishlistQuery: ProtectedVariableOperation<WishlistQueryVariables>
  export const accountAddAddressMutation: ProtectedVariableOperation<AccountAddAddressMutationVariables>
  export const accountReplaceAddressMutation: ProtectedVariableOperation<AccountReplaceAddressMutationVariables>
  export const accountUpdateDetailsMutation: ProtectedVariableOperation<AccountUpdateDetailsMutationVariables>
  export const accountUpdateEmailMutation: ProtectedVariableOperation<AccountUpdateEmailMutationVariables>
  export const accountUpdatePasswordMutation: ProtectedVariableOperation<AccountUpdatePasswordMutationVariables>
  export const addSampleToBasketMutation: VariableOperation<AddSampleToBasketMutationVariables>
  export const addToWishlistMutation: ProtectedVariableOperation<AddToWishlistMutationVariables>
  export const applyDiscountCodeToBasketMutation: VariableOperation<ApplyDiscountCodeToBasketMutationVariables>
  export const addToBasketMutation: VariableOperation<AddToBasketMutationVariables>
  export const cancelFullOrderMutation: ProtectedVariableOperation<CancelFullOrderMutationVariables>
  export const cancelPartOrderMutation: ProtectedVariableOperation<CancelPartOrderMutationVariables>
  export const cancelOrderSpecialOffersMutation: ProtectedVariableOperation<CancelOrderSpecialOfferGroupsMutationVariables>
  export const createDiscussionMutation: ProtectedVariableOperation<CreateDiscussionMutationVariables>
  export const forgottenPasswordMutation: VariableOperation<ForgottenPasswordMutationVariables>
  export const markDiscussionMessagesAsReadMutation: ProtectedVariableOperation<MarkDiscussionMessagesAsReadMutationVariables>
  export const registerAccountMutation: VariableOperation<RegisterAccountMutationVariables>
  export const removeAddressMutation: ProtectedVariableOperation<RemoveAddressMutationVariables>
  export const removeCardMutation: ProtectedVariableOperation<RemoveCardMutationVariables>
  export const removeDiscountCodeFromBasketMutation: VariableOperation<RemoveDiscountCodeFromBasketMutationVariables>
  export const removeFromBasketMutation: VariableOperation<RemoveFromBasketMutationVariables>
  export const removeFromWishlistMutation: ProtectedVariableOperation<RemoveFromWishlistMutationVariables>
  export const removeSampleFromBasketMutation: VariableOperation<RemoveSampleFromBasketMutationVariables>
  export const removeSocialLinkMutation: ProtectedVariableOperation<RemoveSocialLinkMutationVariables>
  export const resolvePaymentProblemMutation: ProtectedVariableOperation<ResolvePaymentProblemVariables>
  export const replyToDiscussionMutation: ProtectedVariableOperation<ReplyToDiscussionMutationVariables>
  export const resetPasswordMutation: VariableOperation<ResetPasswordMutationVariables>
  export const startCheckoutMutation: VariableOperation<StartCheckoutMutationVariables>
  export const startCheckoutWithPaymentMethodMutation: VariableOperation<StartCheckoutWithPaymentMethodMutationVariables>
  export const updateMarketingPreferencesMutation: ProtectedVariableOperation<UpdateMarketingPreferencesMutationVariables>
  export const userLoginMutation: VariableOperation<UserLoginMutationVariables>
  export const userLogoutMutation: NonVariableOperation
}
