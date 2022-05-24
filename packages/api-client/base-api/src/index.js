/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import fetchAPI from './fetchApi'

import accountSettingsForm from './graphql-operations/queries/accountSettingsForm.gql'
import addresses from './graphql-operations/queries/addresses.gql'
import attachmentUploaderConfig from './graphql-operations/queries/attachmentUploaderConfig.gql'
import basket from './graphql-operations/queries/basket.gql'
import check from './graphql-operations/queries/check.gql'
import credit from './graphql-operations/queries/credit.gql'
import collectionClient from './graphql-operations/queries/collection.client.gql'
import collectionServer from './graphql-operations/queries/collection.gql'
import customer from './graphql-operations/queries/customer.gql'
import discussion from './graphql-operations/queries/discussion.gql'
import discussions from './graphql-operations/queries/discussions.gql'
import emailField from './graphql-operations/queries/emailField.gql'
import headerFooter from './graphql-operations/queries/headerFooter.gql'
import marketingConsentForm from './graphql-operations/queries/marketingConsentForm.gql'
import orderDetails from './graphql-operations/queries/orderDetails.gql'
import orderHistory from './graphql-operations/queries/orderHistory.gql'
import paymentCards from './graphql-operations/queries/paymentCards.gql'
import product from './graphql-operations/queries/product.gql'
import recentOrders from './graphql-operations/queries/recentOrders.gql'
import registerForm from './graphql-operations/queries/registerForm.gql'
import reviews from './graphql-operations/queries/reviews.gql'
import search from './graphql-operations/queries/search.gql'
import searchProduct from './graphql-operations/queries/searchProduct.gql'
import searchProductSkus from './graphql-operations/queries/searchProductSkus.gql'
import sitemapPaths from './graphql-operations/queries/sitemapPaths.gql'
import socialAccounts from './graphql-operations/queries/socialAccounts.gql'
import siteSettings from './graphql-operations/queries/siteSettings.gql'
import wishlist from './graphql-operations/queries/wishlist.gql'
import accountAddAddress from './graphql-operations/mutations/accountAddAddress.gql'
import accountReplaceAddress from './graphql-operations/mutations/accountReplaceAddress.gql'
import accountUpdateDetails from './graphql-operations/mutations/accountUpdateDetails.gql'
import accountUpdateEmail from './graphql-operations/mutations/accountUpdateEmail.gql'
import accountUpdatePassword from './graphql-operations/mutations/accountUpdatePassword.gql'
import addToWishlist from './graphql-operations/mutations/addToWishlist.gql'
import addSampleToBasket from './graphql-operations/mutations/addSampleToBasket.gql'
import applyCodeToBasket from './graphql-operations/mutations/applyCodeToBasket.gql'
import addToBasket from './graphql-operations/mutations/basketAdd.gql'
import cancelFullOrder from './graphql-operations/mutations/cancelFullOrder.gql'
import cancelPartOrder from './graphql-operations/mutations/cancelPartOrder.gql'
import cancelSpecialOfferGroups from './graphql-operations/mutations/cancelSpecialOfferGroups.gql'
import createDiscussion from './graphql-operations/mutations/createDiscussion.gql'
import removeFromBasket from './graphql-operations/mutations/basketRemove.gql'
import startCheckout from './graphql-operations/mutations/checkoutStart.gql'
import startCheckoutWithPaymentMethod from './graphql-operations/mutations/checkoutStartWithPaymentMethod.gql'
import forgottenPassword from './graphql-operations/mutations/forgottenPassword.gql'
import userLogin from './graphql-operations/mutations/login.gql'
import userLogout from './graphql-operations/mutations/logout.gql'
import markDiscussionMessagesAsRead from './graphql-operations/mutations/markDiscussionMessagesAsRead.gql'
import removeAddress from './graphql-operations/mutations/removeAddress.gql'
import removeCard from './graphql-operations/mutations/removeCard.gql'
import removeDiscountCodeFromBasket from './graphql-operations/mutations/removeCodeFromBasket.gql'
import removeFromWishlist from './graphql-operations/mutations/removeFromWishlist.gql'
import removeSampleFromBasket from './graphql-operations/mutations/removeSampleFromBasket.gql'
import removeSocialLink from './graphql-operations/mutations/removeSocialLink.gql'
import resetPassword from './graphql-operations/mutations/resetPassword.gql'
import replyToDiscussion from './graphql-operations/mutations/replyToDiscussion.gql'
import registerAccount from './graphql-operations/mutations/register.gql'
import resolvePaymentProblem from './graphql-operations/mutations/resolvePaymentProblem.gql'
import updateMarketingPreferences from './graphql-operations/mutations/updateMarketingPreferences.gql'

export const checkQuery = async options => await fetchAPI(check, {}, options)
export const accountSettingsFormQuery = async options => await fetchAPI(accountSettingsForm, {}, options, true)
export const addressesQuery = async options => await fetchAPI(addresses, {}, options, true)
export const attachmentUploaderConfigQuery = async options => await fetchAPI(attachmentUploaderConfig, {}, options, true)
export const basketQuery = async (variables, options) => await fetchAPI(basket, variables, options)
export const collectionClientQuery = async (variables, options) => await fetchAPI(collectionClient, variables, options)
export const collectionServerQuery = async (variables, options) => await fetchAPI(collectionServer, variables, options)
export const creditQuery = async (variables, options) => await fetchAPI(credit, variables, options)
export const customerQuery = async options => await fetchAPI(customer, {}, options)
export const discussionQuery = async (variables, options) => await fetchAPI(discussion, variables, options, true)
export const discussionsQuery = async (variables, options) => await fetchAPI(discussions, variables, options, true)
export const emailFieldQuery = async options => await fetchAPI(emailField, {}, options, true)
export const headerFooterQuery = async options => await fetchAPI(headerFooter, {}, options)
export const marketingConsentFormQuery = async (variables, options) => await fetchAPI(marketingConsentForm, variables, options)
export const orderDetailsQuery = async (variables, options) => await fetchAPI(orderDetails, variables, options, true)
export const orderHistoryQuery = async (variables, options) => await fetchAPI(orderHistory, variables, options, true)
export const paymentCardsQuery = async options => await fetchAPI(paymentCards, {}, options, true)
export const productQuery = async (variables, options) => await fetchAPI(product, variables, options)
export const recentOrdersQuery = async (variables, options) => await fetchAPI(recentOrders, variables, options, true)
export const registerFormQuery = async options => await fetchAPI(registerForm, {}, options)
export const reviewsQuery = async (variables, options) => await fetchAPI(reviews, variables, options)
export const searchQuery = async (variables, options) => await fetchAPI(search, variables, options)
export const searchProductsQuery = async (variables, options) => await fetchAPI(searchProduct, variables, options)
export const searchProductSkusQuery = async (variables, options) => await fetchAPI(searchProductSkus, variables, options)
export const sitemapPathsQuery = async options => await fetchAPI(sitemapPaths, {}, options)
export const socialAccountsQuery = async options => await fetchAPI(socialAccounts, {}, options)
export const siteSettingsQuery = async options => await fetchAPI(siteSettings, {}, options)
export const wishlistQuery = async (variables, options) => await fetchAPI(wishlist, variables, options, true)
export const accountAddAddressMutation = async (variables, options) => await fetchAPI(accountAddAddress, variables, options, true)
export const accountReplaceAddressMutation = async (variables, options) => await fetchAPI(accountReplaceAddress, variables, options, true)
export const accountUpdateDetailsMutation = async (variables, options) => await fetchAPI(accountUpdateDetails, variables, options, true)
export const accountUpdateEmailMutation = async (variables, options) => await fetchAPI(accountUpdateEmail, variables, options, true)
export const accountUpdatePasswordMutation = async (variables, options) => await fetchAPI(accountUpdatePassword, variables, options, true)
export const addSampleToBasketMutation = async (variables, options) => await fetchAPI(addSampleToBasket, variables, options)
export const addToWishlistMutation = async (variables, options) => await fetchAPI(addToWishlist, variables, options, true)
export const applyDiscountCodeToBasketMutation = async (variables, options) => await fetchAPI(applyCodeToBasket, variables, options)
export const addToBasketMutation = async (variables, options) => await fetchAPI(addToBasket, variables, options)
export const cancelFullOrderMutation = async (variables, options) => await fetchAPI(cancelFullOrder, variables, options, true)
export const cancelPartOrderMutation = async (variables, options) => await fetchAPI(cancelPartOrder, variables, options, true)
export const cancelOrderSpecialOffersMutation = async (variables, options) => await fetchAPI(cancelSpecialOfferGroups, variables, options, true)
export const createDiscussionMutation = async (variables, options) => await fetchAPI(createDiscussion, variables, options, true)
export const forgottenPasswordMutation = async (variables, options) => await fetchAPI(forgottenPassword, variables, options)
export const markDiscussionMessagesAsReadMutation = async (variables, options) => await fetchAPI(markDiscussionMessagesAsRead, variables, options, true)
export const registerAccountMutation = async (variables, options) => await fetchAPI(registerAccount, variables, options)
export const removeAddressMutation = async (variables, options) => await fetchAPI(removeAddress, variables, options, true)
export const removeCardMutation = async (variables, options) => await fetchAPI(removeCard, variables, options, true)
export const removeDiscountCodeFromBasketMutation = async (variables, options) => await fetchAPI(removeDiscountCodeFromBasket, variables, options)
export const removeFromBasketMutation = async (variables, options) => await fetchAPI(removeFromBasket, variables, options)
export const removeSampleFromBasketMutation = async (variables, options) => await fetchAPI(removeSampleFromBasket, variables, options)
export const removeSocialLinkMutation = async (variables, options) => await fetchAPI(removeSocialLink, variables, options, true)
export const removeFromWishlistMutation = async (variables, options) => await fetchAPI(removeFromWishlist, variables, options, true)
export const replyToDiscussionMutation = async (variables, options) => await fetchAPI(replyToDiscussion, variables, options, true)
export const resetPasswordMutation = async (variables, options) => await fetchAPI(resetPassword, variables, options)
export const resolvePaymentProblemMutation = async (variables, options) => await fetchAPI(resolvePaymentProblem, variables, options, true)
export const startCheckoutMutation = async (variables, options) => await fetchAPI(startCheckout, variables, options)
export const startCheckoutWithPaymentMethodMutation = async (variables, options) => await fetchAPI(startCheckoutWithPaymentMethod, variables, options)
export const updateMarketingPreferencesMutation = async (variables, options) => await fetchAPI(updateMarketingPreferences, variables, options, true)
export const userLoginMutation = async (variables, options) => await fetchAPI(userLogin, variables, options)
export const userLogoutMutation = async options => await fetchAPI(userLogout, {}, options)
