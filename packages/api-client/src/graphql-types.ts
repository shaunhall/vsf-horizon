export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A string which authorises the target customer account to be linked to the origin customer account.
   *
   * An AccountLinkingExtensionToken can be retrieved on the target customer's site by using the origin customer's
   * AccountLinkingToken in the getAccountExtensionToken mutation.
   *
   * To use an AccountLinkingExtensionToken to link two accounts, the token should first be transferred back to the site
   * of the origin customer account, and then submitted to the linkAccounts mutation.
   */
  AccountLinkingExtensionToken: any;
  /**
   * A string which authorises the origin customer account to be used to start the account linking process.
   *
   * An AccountLinkingToken should be retrieved via the getAccountLinkingToken mutation as the first step in
   * linking two accounts.
   *
   * This token should then be sent to the site of the other account to be linked, which should submit it to the
   * getAccountExtensionToken mutation.
   */
  AccountLinkingToken: any;
  /** Binary data, base64-encoded to allow easy transport as a JSON string. */
  Base64Bytes: any;
  /** Hex colour (e.g. "#000000") */
  Colour: any;
  /** A date in the format YYYY-MM-DD (In London Time) */
  Date: any;
  DeliveryMethod: any;
  /** A string which has already been translated to the sites locale by the API. Can be displayed to the customer without the need for any localisation. */
  DisplayString: any;
  /** Language and country e.g. en_GB */
  Locale: any;
  /**
   * A token included in email links to verify that actions are performed by the intended user only
   * and to identify the user without having to pass through emails as parameters
   */
  MarketingToken: any;
  /**
   * This scalar represents a price or other unit of money.
   *
   * It is serialized as a string of the format `GBP8.85`.
   *
   * The first 3 characters are a currency code, and the rest is a decimal number representing the number of
   * units of the given currency.
   */
  Money: any;
  /** 2-digit integer e.g. January is 01 */
  Month: any;
  OrderNumber: any;
  /**
   * The path to a page (Not including extensions)
   *
   * (e.g. "/dietary-needs/vegan")
   */
  PagePath: any;
  /**
   * A string which authorises a password reset for a specific customer account.
   *
   * When the forgottenPassword mutation is called, a PasswordResetToken will be sent to the customer's email address.
   *
   * This PasswordResetToken can be used in the resetPassword mutation to reset the user's password.
   */
  PasswordResetToken: any;
  /** Numeric product ID */
  SKU: any;
  /**
   * A string which represents a partially completed Social Login.
   *
   * It can be submitted to the exchangeSocialLoginToken query or socialLogin mutation to continue socially logging in.
   *
   * In the case that a social login fails, a new SocialAuthenticationToken will be returned which can be used
   * to continue the social login process with additional data
   */
  SocialAuthenticationToken: any;
  /** A string which represents a link between a single account on a social login provider */
  SocialLinkID: any;
  SpecialOfferGroup: any;
  /** Milliseconds elapsed since the unix epoch */
  Timestamp: any;
  /** May be absolute or relative */
  URL: any;
  /** Always null */
  Void: any;
  /** 4-digit integer e.g. 2019 */
  Year: any;
}

export interface AccordionWidget extends Widget {
  __typename?: 'AccordionWidget';
  content?: Maybe<RichContent>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface AccordionWidgetContainer extends Widget {
  __typename?: 'AccordionWidgetContainer';
  banners?: Maybe<Array<Maybe<Widget>>>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
  titlePosition?: Maybe<Scalars['String']>;
}

/**  From the uuid parameter from the email unsubscribe link */
export type AccountCreationMarketingPreferences =
  /** Returned if a customer already exists for this email address */
  | 'CUSTOMER_ALREADY_EXISTS'
  /** Returned when the email address has no customer and is not signed up for newsletters */
  | 'DOES_NOT_RECEIVE_MARKETING_MATERIAL'
  /** Returned when the email address has signed up for newsletters but has no customer */
  | 'RECEIVES_MARKETING_MATERIAL';

export interface AccountUpdateStatus {
  __typename?: 'AccountUpdateStatus';
  customer?: Maybe<Customer>;
  error?: Maybe<AuthenticationError>;
  fieldErrors?: Maybe<Array<Maybe<FormFieldValidationError>>>;
}

export interface AddDiscussionMessageInput {
  attachmentToken?: InputMaybe<Scalars['String']>;
  message: Scalars['String'];
}

export interface AddProductToBasketItem {
  quantity: Scalars['Int'];
  sku: Scalars['SKU'];
}

export type AddReviewError =
  | 'INVALID_INFO';

export interface AddReviewInput {
  fields: Array<ReviewFieldInput>;
  sku: Scalars['SKU'];
}

export interface AddReviewResponse {
  __typename?: 'AddReviewResponse';
  error?: Maybe<AddReviewError>;
  fieldErrors: Array<FormFieldValidationError>;
}

export interface Address {
  __typename?: 'Address';
  /** House number / House Name / Apartment Number / Floor / Suite number */
  addressLine1: Scalars['String'];
  /** Street */
  addressLine2?: Maybe<Scalars['String']>;
  addressLine3?: Maybe<Scalars['String']>;
  /** City */
  addressLine4?: Maybe<Scalars['String']>;
  /** Region / County */
  addressLine5?: Maybe<Scalars['String']>;
  addresseeName: Scalars['String'];
  clickAndCollect: Scalars['Boolean'];
  companyName?: Maybe<Scalars['String']>;
  country: Country;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
  /** Mutually exclusive with addressLine5 */
  state?: Maybe<State>;
}

export interface AddressInput {
  /** House number / House Name / Apartment Number / Floor / Suite number */
  addressLine1: Scalars['String'];
  /** Street */
  addressLine2?: InputMaybe<Scalars['String']>;
  addressLine3?: InputMaybe<Scalars['String']>;
  /** City */
  addressLine4?: InputMaybe<Scalars['String']>;
  /** Region / County */
  addressLine5?: InputMaybe<Scalars['String']>;
  addresseeName: Scalars['String'];
  companyName?: InputMaybe<Scalars['String']>;
  country: Country;
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Post Code / Zip Code */
  postalCode: Scalars['String'];
  /** Mutually exclusive with addressLine5 */
  state?: InputMaybe<State>;
}

export interface AddressRecord {
  __typename?: 'AddressRecord';
  address: Address;
  id: Scalars['ID'];
}

export interface Addresses {
  __typename?: 'Addresses';
  addresses: Array<AddressRecord>;
  hasMore: Scalars['Boolean'];
  total: Scalars['Int'];
}

export interface AddressesFilterInput {
  id?: InputMaybe<Scalars['ID']>;
}

/**
 * URLs to alternative locale versions of the current page or product.
 *
 * These should be added to the page in <link rel="alternate" hreflang="$locale" href="$url"> tags to
 * provide hints for SEO purposes.
 */
export interface AlternateLink {
  __typename?: 'AlternateLink';
  locale: Scalars['Locale'];
  url: Scalars['URL'];
}

export interface AnswerOption {
  __typename?: 'AnswerOption';
  /**
   * This is an option to a question, an optionKey will always be provided and a translation may sometimes be provided.
   * If a translation is not provided, you should use the optionKey to present a translated value to the customer.
   */
  optionKey: Scalars['String'];
  translation?: Maybe<Scalars['DisplayString']>;
}

export interface AppliedOffer {
  __typename?: 'AppliedOffer';
  info?: Maybe<Scalars['DisplayString']>;
  message: Scalars['DisplayString'];
  /** Some offers automatically apply so cannot be removed */
  removeable: Scalars['Boolean'];
  /** May be null if the discount amount should not be shown */
  totalBasketDiscount?: Maybe<MoneyValue>;
}

export interface ApproveSocialLinkInput {
  socialLinkId: Scalars['SocialLinkID'];
}

/**
 * To upload an attachment:
 *
 * 1) Query for the customer's Attachment Uploader using the attachmentUploaderConfig query.
 * 2) POST the file to the upload URL of the sites domain with the authToken in the "uploadToken" form field
 *    and the attachment in the "attachment" form field as "Content type: application/octet-stream"
 * 3) Get the "token" from the response and submit that as part of your mutation input as attachmentToken
 */
export interface AttachmentUploaderConfig {
  __typename?: 'AttachmentUploaderConfig';
  authToken: Scalars['String'];
  uploadUrl: Scalars['String'];
}

export type AuthenticationError =
  /** On registration, an account with the given email address already exists */
  | 'ACCOUNT_EXISTS'
  /** The user's account is locked, and can be unlocked by resetting their password with the forgottenPassword mutation */
  | 'ACCOUNT_LOCKED'
  | 'ALREADY_USED_TOKEN'
  /**
   * On registration, there was already an account, but the account did not have a password set up.
   *
   * We sent the user a verification email which will allow them to set a password on their existing account.
   *
   * This will happen if registration occurs over a social login or guest checkout account.
   */
  | 'EMAIL_VERIFICATION_SENT'
  | 'EXPIRED_TOKEN'
  /** On login, either the user's email was not found, or their password was incorrect */
  | 'FAILED_LOGIN'
  /** The data provided on registration or social login was invalid, or insufficient to create an account. */
  | 'INVALID_DATA'
  /** The password provided on registration did not meet the password complexity requirements */
  | 'INVALID_PASSWORD'
  | 'INVALID_TOKEN'
  /**
   * On Social Login, the link between the account on the social authentication provider and the customer was unable to
   * be verified.  It can be verified via email.  A social link verification email can be sent with the
   * requestSocialLinkVerificationEmail mutation
   */
  | 'SOCIAL_LINK_PENDING';

/**
 * Returned on any field intended to log the user in.
 *
 * For Web clients, just receiving a successful AuthenticationResponse is enough to be logged in, as
 * the HTTP response will come with an authentication cookie.
 *
 * For API clients, the token field should be extracted on a successful login and used
 * as the Authorization header for future API requests, in the following format:
 *
 * Authorization: Opaque <token>
 */
export interface AuthenticationResponse {
  __typename?: 'AuthenticationResponse';
  customer?: Maybe<Customer>;
  error?: Maybe<AuthenticationError>;
  fieldErrors?: Maybe<Array<Maybe<FormFieldValidationError>>>;
  newCustomer?: Maybe<Scalars['Boolean']>;
}

export interface AvailablePaymentOption {
  __typename?: 'AvailablePaymentOption';
  option: Scalars['String'];
  subOption?: Maybe<Scalars['String']>;
}

export interface BmiCalculator extends Widget {
  __typename?: 'BMICalculator';
  calculateButtonText?: Maybe<Scalars['String']>;
  formSummaryDefaultText?: Maybe<Scalars['String']>;
  formSummaryDefaultTitle?: Maybe<Scalars['String']>;
  formSummaryNormalWeightText?: Maybe<Scalars['String']>;
  formSummaryNormalWeightTitle?: Maybe<Scalars['String']>;
  formSummaryObeseWeightText?: Maybe<Scalars['String']>;
  formSummaryObeseWeightTitle?: Maybe<Scalars['String']>;
  formSummaryOverWeightText?: Maybe<Scalars['String']>;
  formSummaryOverWeightTitle?: Maybe<Scalars['String']>;
  formSummaryUnderWeightText?: Maybe<Scalars['String']>;
  formSummaryUnderWeightTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imperialDefault?: Maybe<Scalars['String']>;
  nextButtonNormalWeightLink?: Maybe<Scalars['String']>;
  nextButtonObeseWeightLink?: Maybe<Scalars['String']>;
  nextButtonOverWeightLink?: Maybe<Scalars['String']>;
  nextButtonText?: Maybe<Scalars['String']>;
  nextButtonUnderWeightLink?: Maybe<Scalars['String']>;
  query: Query;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface BmiCalculatorV2 extends Widget {
  __typename?: 'BMICalculatorV2';
  id: Scalars['ID'];
  imperialDefault?: Maybe<Scalars['String']>;
  nextButtonNormalWeightLink?: Maybe<Scalars['String']>;
  nextButtonObeseWeightLink?: Maybe<Scalars['String']>;
  nextButtonOverWeightLink?: Maybe<Scalars['String']>;
  nextButtonText?: Maybe<Scalars['String']>;
  nextButtonUnderWeightLink?: Maybe<Scalars['String']>;
  query: Query;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface Basket {
  __typename?: 'Basket';
  appliedOffers: Array<AppliedOffer>;
  availablePaymentOptions: Array<AvailablePaymentOption>;
  /** The total price after applying any discounts. */
  chargePrice: MoneyValue;
  /** This object will be null if no code is on the basket. */
  code?: Maybe<BasketCode>;
  discount: MoneyValue;
  guestCheckoutAllowed: Scalars['Boolean'];
  id: Scalars['ID'];
  items: Array<BasketItem>;
  /**
   * Have the contents of the current customer's saved basket been merged into this basket.
   * If this flag is true, then checkout will be blocked.
   * Clear by setting the "acknowledgeMerge" flag on the basket query.
   */
  merged: Scalars['Boolean'];
  messages: Array<BasketMessage>;
  recommendations?: Maybe<Array<Product>>;
  selectYourSample: Array<SelectYourSample>;
  /** The total price before applying any discounts. */
  standardPrice: MoneyValue;
  totalQuantity: Scalars['Int'];
}


export interface BasketRecommendationsArgs {
  limit?: Scalars['Int'];
}

export interface BasketCode {
  __typename?: 'BasketCode';
  /** May be null if the offer triggered by the code is not valid anymore but the code is yet to be removed */
  offer?: Maybe<AppliedOffer>;
  value: Scalars['String'];
}

export interface BasketItem {
  __typename?: 'BasketItem';
  appliedOffers: Array<AppliedOffer>;
  /**
   * The price after applying any discounts.  Will be 0 for free gifts
   * @deprecated Use chargePricePerUnit instead
   */
  chargePrice: MoneyValue;
  /** The price per unit after applying any discounts.  Will be 0 for free gifts */
  chargePricePerUnit: MoneyValue;
  discountPerUnit: MoneyValue;
  /** If the product has been added as a free gift by an offer */
  freeGift: Scalars['Boolean'];
  id: Scalars['ID'];
  product: ProductVariant;
  quantity: Scalars['Int'];
  /** The price per unit before applying any discounts. */
  standardPricePerUnit: MoneyValue;
  /** The price after applying any discounts.  Will be 0 for free gifts */
  totalChargePrice: MoneyValue;
  totalDiscount: MoneyValue;
  /** The price before applying any discounts. */
  totalStandardPrice: MoneyValue;
}

/** Messages to show at the top of the basket */
export interface BasketMessage {
  __typename?: 'BasketMessage';
  message?: Maybe<Scalars['DisplayString']>;
  type: BasketMessageType;
}

export type BasketMessageType =
  /**
   * Display as info.  The code the user applied with an `applyCodeToBasket` mutation was valid, but cancels out an
   * existing, higher value offer. Note: This does not prevent a user overriding their current code with a lower value code
   */
  | 'BETTER_OFFER_ALREADY_APPLIED'
  /** Display as success.  The code the user applied with an `applyCodeToBasket` mutation was valid */
  | 'CODE_APPLIED'
  /** Display as an error.  The code the user applied with an `applyCodeToBasket` mutation is valid, but has expired. */
  | 'CODE_EXPIRED'
  /** Display as an error.  The code the user applied with an `applyCodeToBasket` mutation is invalid. */
  | 'CODE_INVALID'
  /** Display as an error.  The code the user applied with an `applyCodeToBasket` mutation is valid, but not applicable to their basket. */
  | 'CODE_VALID_BUT_NOT_APPLICABLE_TO_BASKET'
  /** Display as success.  An offer has been applied to the basket */
  | 'OFFER_APPLIED'
  /** Display as an error.  One or more products (detailed in the message) are currently out of stock. */
  | 'PRODUCT_OUT_OF_STOCK'
  /** Display as an error.  The code the user applied with an `applyCodeToBasket` mutation is a promotion code that has already been used. */
  | 'PROMO_CODE_ALREADY_USED'
  /** Display as an error.  The referral code is valid, but the account is already referred or is not a new account */
  | 'REFERRER_NOT_ELIGIBLE'
  /** Display as success.  The user became eligible for a free gift selection */
  | 'SELECT_YOUR_SAMPLE_APPLIED'
  /** Display as info.  The user can add additional products to their basket to receive a discount. */
  | 'UPSELL';

export interface Brand {
  __typename?: 'Brand';
  /** Not all brands have an associated logo */
  imageUrl?: Maybe<Scalars['URL']>;
  name: Scalars['DisplayString'];
  page?: Maybe<BrandPage>;
}

export interface BrandPage {
  __typename?: 'BrandPage';
  path: Scalars['PagePath'];
}

export interface BrandsPageWidget extends Widget {
  __typename?: 'BrandsPageWidget';
  id: Scalars['ID'];
  query: Query;
}

/**
 * Breadcrumbs are links to other pages that appear at the top of a page, providing a way for customers
 * to get back to a "parent" page, for example from the "Protein" page to the general "Nutrition" page.
 */
export interface Breadcrumb {
  __typename?: 'Breadcrumb';
  displayName: Scalars['DisplayString'];
  pagePath: Scalars['PagePath'];
}

export interface BuildYourOwnBundleProductList extends Widget {
  __typename?: 'BuildYourOwnBundleProductList';
  disablePackQuantity?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  list_row_bundle_size?: Maybe<Scalars['String']>;
  maxSelectableErrorMessage?: Maybe<Scalars['String']>;
  maxSelectableProducts?: Maybe<Scalars['Int']>;
  productCount?: Maybe<Scalars['Int']>;
  productList?: Maybe<Scalars['String']>;
  quantitySelector?: Maybe<Scalars['String']>;
  query: Query;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface BuyNowPayLaterProvider {
  __typename?: 'BuyNowPayLaterProvider';
  displayName: Scalars['DisplayString'];
  instalmentAmount: MoneyValue;
  landingPageLink: Scalars['URL'];
  numberOfInstalments: Scalars['Int'];
  providerName: Scalars['String'];
}

export interface CancelOrderInput {
  orderNumber: Scalars['OrderNumber'];
  reason: OrderCancellationReason;
}

export interface CancelOrderProductInput {
  quantity: Scalars['Int'];
  reason: OrderCancellationReason;
  sku: Scalars['SKU'];
}

export interface CancelOrderProductsInput {
  orderNumber: Scalars['OrderNumber'];
  products: Array<CancelOrderProductInput>;
}

export interface CancelOrderSpecialOfferGroupInput {
  group: Scalars['SpecialOfferGroup'];
  reason: OrderCancellationReason;
}

export interface CancelOrderSpecialOfferGroupsInput {
  groups: Array<CancelOrderSpecialOfferGroupInput>;
  orderNumber: Scalars['OrderNumber'];
}

export interface CaptchaConfiguration {
  __typename?: 'CaptchaConfiguration';
  /**
   * Any **public** configuration information for this captcha type.
   * Not required for mobile app mechanisms.
   */
  siteKey?: Maybe<Scalars['String']>;
  type: CaptchaType;
}

export type CaptchaType =
  | 'ANDROID_SAFETY_NET_ATTESTATION'
  | 'APPLE_DEVICE_CHECK'
  | 'V2_INVISIBLE'
  | 'V2_VISIBLE';

export type CheckoutStartError =
  /**
   * The customer's baskets were merged when attempting to start checkout.
   * They should be shown the basket again and asked to confirm.
   *
   * Occurs on both checkoutStart and guestCheckoutStart
   */
  | 'BASKETS_MERGED'
  /** Only occurs on guestCheckoutStart */
  | 'CUSTOMER_LOGGED_IN'
  /** Occurs on both checkoutStart and guestCheckoutStart */
  | 'INVALID_BASKET'
  /** Occurs on both checkoutStart and guestCheckoutStart */
  | 'INVALID_BASKET_MAX_QUANTITY_EXCEEDED'
  /** Occurs on both checkoutStart and guestCheckoutStart */
  | 'INVALID_BASKET_NO_ITEM_ON_BASKET'
  /** Only occurs on guestCheckoutStart */
  | 'INVALID_BASKET_SUBSCRIPTIONS_ON_GUEST_CHECKOUT'
  /** Occurs on both checkoutStart and guestCheckoutStart */
  | 'INVALID_CURRENCY'
  /** Occurs on both checkoutStart and guestCheckoutStart */
  | 'INVALID_PAYMENT_OPTION'
  /** Occurs on both checkoutStart and guestCheckoutStart */
  | 'INVALID_SHIPPING_DESTINATION'
  /** Only occurs on checkoutStart */
  | 'NOT_ELIGIBLE_FOR_REFERRAL'
  | 'NO_PAYMENT_PROBLEM'
  | 'NO_SUCH_ORDER'
  | 'NO_SUCH_SUBSCRIPTION';

export interface CheckoutStartInput {
  basketId: Scalars['ID'];
  currency: Currency;
  paymentOption?: InputMaybe<PaymentOption>;
  shippingDestination: Country;
}

export interface CheckoutStartResponse {
  __typename?: 'CheckoutStartResponse';
  checkoutUrl?: Maybe<Scalars['URL']>;
  error?: Maybe<CheckoutStartError>;
}

export type CodeValidationResult =
  | 'ALREADY_USED'
  | 'INVALID'
  | 'NOT_ACTIVE'
  | 'VALID';

/** As described here: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2 */
export type Country =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  /**
   * [Netherlands Antilles](https://en.wikipedia.org/wiki/Netherlands_Antilles). No longer legally
   * exists but still used as a shipping country within our system.
   */
  | 'AN'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export interface CountryDeliveryInfo {
  __typename?: 'CountryDeliveryInfo';
  country: Country;
  /** An ordered list of values to use as the cells for this table row */
  values: Array<CountryDeliveryInfoCell>;
}

export interface CountryDeliveryInfoCell {
  __typename?: 'CountryDeliveryInfoCell';
  header: Scalars['String'];
  value: Scalars['DisplayString'];
}

export interface CreateDiscussionInput {
  category: DiscussionCategory;
  message: AddDiscussionMessageInput;
  selection?: InputMaybe<DiscussionSelectionInput>;
}

export interface CreditAccount {
  __typename?: 'CreditAccount';
  actions: CreditActions;
  /**
   * The total credit for this account for this currency, including credit shared from linked accounts.
   * Always in the currency of the credit account.
   */
  balance: MoneyValue;
  currency: Currency;
  expiringIn: MoneyValue;
}


export interface CreditAccountActionsArgs {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}


export interface CreditAccountExpiringInArgs {
  days?: Scalars['Int'];
}

export interface CreditAccountsFilterInput {
  currency?: InputMaybe<Currency>;
}

export interface CreditAction {
  __typename?: 'CreditAction';
  addedAt: Scalars['Timestamp'];
  /** Amounts are always in the currency of the credit account. */
  amount: MoneyValue;
  /** Will always be `amount` minus `amountUsed`. */
  amountAvailable: MoneyValue;
  /** Will always be between 0 and `amount`, will be 0 for Reservations and Paid Out Actions. */
  amountUsed: MoneyValue;
  expiresAt?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  message?: Maybe<Scalars['DisplayString']>;
  order?: Maybe<Order>;
  status: CreditActionStatus;
  type: CreditActionType;
}

export type CreditActionStatus =
  | 'EXPIRED'
  | 'VALID';

export type CreditActionType =
  | 'PAID_IN'
  | 'PAID_OUT'
  | 'RESERVATION';

export interface CreditActions {
  __typename?: 'CreditActions';
  actions: Array<CreditAction>;
  hasMore: Scalars['Boolean'];
  total: Scalars['Int'];
}

export interface CriteoSponsoredBannerAds extends Widget {
  __typename?: 'CriteoSponsoredBannerAds';
  id: Scalars['ID'];
  query: Query;
  widgetVersion?: Maybe<Scalars['String']>;
}

export type Currency =
  | 'AED'
  | 'ARS'
  | 'AUD'
  | 'AZN'
  | 'BAM'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BRL'
  | 'CAD'
  | 'CHF'
  | 'CNY'
  | 'CZK'
  | 'DKK'
  | 'DZD'
  | 'EUR'
  | 'GBP'
  | 'HKD'
  | 'HRK'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'JPY'
  | 'KES'
  | 'KRW'
  | 'KWD'
  | 'KZT'
  | 'LKR'
  | 'MAD'
  | 'MKD'
  | 'MXN'
  | 'MYR'
  | 'NGN'
  | 'NOK'
  | 'NZD'
  | 'OMR'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'SAR'
  | 'SEK'
  | 'SGD'
  | 'THB'
  | 'TWD'
  | 'UAH'
  | 'USD'
  | 'VND'
  | 'ZAR';

export interface Customer {
  __typename?: 'Customer';
  addresses?: Maybe<Addresses>;
  creditAccounts?: Maybe<Array<CreditAccount>>;
  /**
   * Returns all discussions for this customer.
   * If status is provided, the result will be filtered to just discussions with the given status.
   */
  discussions?: Maybe<Discussions>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  marketingPreferences?: Maybe<Scalars['Boolean']>;
  orders?: Maybe<Orders>;
  paymentCards?: Maybe<PaymentCards>;
  phoneNumber?: Maybe<Scalars['String']>;
  referralCode: Scalars['String'];
  referralCount: Scalars['Int'];
  referralLink: Scalars['String'];
  /**
   * All social links for the customer with the given status.
   *
   * If status is null or not supplied, all social links are returned
   */
  socialLinks?: Maybe<Array<SocialLink>>;
  socialReferralMethods: Array<SocialReferralMethod>;
  wishlist?: Maybe<WishlistItems>;
}


export interface CustomerAddressesArgs {
  filter?: InputMaybe<AddressesFilterInput>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}


export interface CustomerCreditAccountsArgs {
  filter?: InputMaybe<CreditAccountsFilterInput>;
}


export interface CustomerDiscussionsArgs {
  filter?: InputMaybe<DiscussionsFilterInput>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}


export interface CustomerMarketingPreferencesArgs {
  type: MarketingType;
}


export interface CustomerOrdersArgs {
  filter?: InputMaybe<OrdersFilterInput>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}


export interface CustomerPaymentCardsArgs {
  filter?: InputMaybe<PaymentCardsFilterInput>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}


export interface CustomerSocialLinksArgs {
  status?: InputMaybe<SocialLinkStatus>;
}


export interface CustomerWishlistArgs {
  currency: Currency;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  shippingDestination: Country;
  sort?: WishlistSort;
}

export interface DateRange {
  __typename?: 'DateRange';
  from?: Maybe<Scalars['Date']>;
  to?: Maybe<Scalars['Date']>;
}

export type DayOfWeek =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

export interface DeliveryInfo {
  __typename?: 'DeliveryInfo';
  groups: Array<DeliveryInfoGroup>;
}

/** Represents a single grouping of shipping destinations, for example "Europe", "North America" or "Rest Of The World" */
export interface DeliveryInfoGroup {
  __typename?: 'DeliveryInfoGroup';
  /** Unordered list of countries.  You may wish to sort this alphabetically by the country's translated name. */
  countryDetails: Array<CountryDeliveryInfo>;
  /** An ordered list of keys representing the headers of the table columns */
  headers: Array<Scalars['String']>;
  title: Scalars['DisplayString'];
}

export interface DeliveryInfoWidget extends Widget {
  __typename?: 'DeliveryInfoWidget';
  id: Scalars['ID'];
  query: Query;
}

export interface DeliveryInformationWidget extends Widget {
  __typename?: 'DeliveryInformationWidget';
  deliveryOption?: Maybe<Scalars['String']>;
  deliveryPrice?: Maybe<Scalars['String']>;
  hasDetails?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  sectionDetails?: Maybe<RichContent>;
  sectionTitle?: Maybe<Scalars['String']>;
}

export interface Discussion {
  __typename?: 'Discussion';
  category: DiscussionCategory;
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  messages: DiscussionMessages;
  read: Scalars['Boolean'];
  selection?: Maybe<DiscussionSelection>;
  status: DiscussionStatus;
  updatedAt: Scalars['Timestamp'];
}


export interface DiscussionMessagesArgs {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}

export type DiscussionCategory =
  | 'CANCELLATION'
  | 'CHECKOUT'
  | 'DELIVERY_PROBLEM'
  | 'FEEDBACK'
  | 'FREE_GIFT'
  | 'I_WANT_TO_CREATE_AN_ACCOUNT'
  | 'NUTRITIONAL_ADVICE'
  | 'OFFERS_AND_PROMOTIONS'
  | 'PAYMENT'
  | 'PLACING_AN_ORDER'
  | 'PRICEBEATER_REQUEST'
  | 'PROBLEM_WITH_MY_ORDER'
  | 'PRODUCT_INFORMATION'
  | 'RETURNS_AND_REFUNDS'
  | 'STOCK_AVAILABILITY'
  | 'WEBSITE_ISSUES'
  | 'WHERE_IS_MY_ORDER';

export interface DiscussionMessage {
  __typename?: 'DiscussionMessage';
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  message: Scalars['DisplayString'];
  type: DiscussionMessageType;
}

export type DiscussionMessageType =
  | 'QUERY'
  | 'RESPONSE';

export interface DiscussionMessages {
  __typename?: 'DiscussionMessages';
  hasMore: Scalars['Boolean'];
  messages: Array<DiscussionMessage>;
  total: Scalars['Int'];
}

export interface DiscussionSelection {
  __typename?: 'DiscussionSelection';
  selectedOrder?: Maybe<Order>;
  selectedProducts: Array<OrderProduct>;
}

export interface DiscussionSelectionInput {
  selectedOrderId: Scalars['ID'];
  selectedProductSkus: Array<Scalars['SKU']>;
}

export type DiscussionStatus =
  | 'COMPLETED'
  | 'IN_PROGRESS'
  | 'OUTSTANDING'
  | 'PENDING';

export interface Discussions {
  __typename?: 'Discussions';
  discussions: Array<Discussion>;
  hasMore: Scalars['Boolean'];
  total: Scalars['Int'];
}

export interface DiscussionsFilterInput {
  id?: InputMaybe<Scalars['ID']>;
  orderNumber?: InputMaybe<Scalars['OrderNumber']>;
  status?: InputMaybe<DiscussionStatus>;
}

export type DynamicEntityType =
  | 'BRAND_ENTITY'
  | 'DESIGNER'
  | 'OUTFIT'
  | 'STORY';

export interface DynamicReferralWidget extends Widget {
  __typename?: 'DynamicReferralWidget';
  balanceNote?: Maybe<Scalars['String']>;
  codeSubtitle?: Maybe<Scalars['String']>;
  codeTitle?: Maybe<Scalars['String']>;
  copySubtitle?: Maybe<Scalars['String']>;
  copyTitle?: Maybe<Scalars['String']>;
  friendsNote?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mainSubtitle?: Maybe<Scalars['String']>;
  mainTitle?: Maybe<Scalars['String']>;
  query: Query;
  sharingSubtitle?: Maybe<Scalars['String']>;
  sharingTitle?: Maybe<Scalars['String']>;
  showYourCodeSection?: Maybe<Scalars['String']>;
}

export interface EGift {
  __typename?: 'EGift';
  productVariant: ProductVariant;
  quantity: Scalars['Int'];
}

export interface EGiftSummary {
  __typename?: 'EGiftSummary';
  code: Scalars['String'];
  codeValidationResult: CodeValidationResult;
  eGifts: Array<Maybe<EGift>>;
}

export interface Easiware extends Widget {
  __typename?: 'Easiware';
  id: Scalars['ID'];
  query: Query;
}

export interface EditorialWidget extends Widget {
  __typename?: 'EditorialWidget';
  content?: Maybe<RichContent>;
  id: Scalars['ID'];
  query: Query;
}

export interface EmailReEngagementModal extends Widget {
  __typename?: 'EmailReEngagementModal';
  emailReEngagementBulletText1?: Maybe<Scalars['String']>;
  emailReEngagementBulletText2?: Maybe<Scalars['String']>;
  emailReEngagementBulletText3?: Maybe<Scalars['String']>;
  emailReEngagementOptInDiscount?: Maybe<Scalars['String']>;
  emailReEngagementTitleText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageAltText?: Maybe<Scalars['String']>;
  imageLarge?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  query: Query;
}

export interface Facet {
  facetHeader: Scalars['DisplayString'];
  facetName: Scalars['String'];
}

export interface FacetInput {
  facetName: Scalars['String'];
  selections: Array<FacetSelectionInput>;
}

/** If optionName is non-null, from and to are ignored. */
export interface FacetSelectionInput {
  from?: InputMaybe<Scalars['Float']>;
  optionName?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['Float']>;
}

export interface FastTrackBanner extends Widget {
  __typename?: 'FastTrackBanner';
  fastTrackContent?: Maybe<Scalars['String']>;
  fastTrackHeader?: Maybe<Scalars['String']>;
  fastTrackUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
}

export type Feature =
  | 'ACCOUNT_LINKING'
  | 'ADDRESS_MANAGEMENT'
  | 'AGE_GATING'
  | 'AGE_ON_REGISTRATION'
  | 'ASSOCIATED_PRODUCTS'
  | 'BUY_NOW_PAY_LATER'
  | 'CLICK_AND_COLLECT'
  | 'COCA_COLA_PERSONALISATION'
  | 'CONCESSIONS'
  | 'CREDIT'
  | 'CROSS_SITE_REFERRALS'
  | 'DATE_OF_BIRTH'
  | 'DOUBLE_OPT_IN'
  | 'DYNAMIC_ENTITY_MANAGEMENT'
  | 'FAST_TRACK'
  /**
   * Whether or not the site supports login with passwords to dedicated user accounts on the site.
   *
   * If this feature is not available, other methods of logging in or proceeding may be available such
   * as social login or guest checkout
   */
  | 'FIRST_PARTY_AUTH'
  | 'FORM_INFO'
  | 'FRIENDS_REFERRAL_SCHEME'
  | 'FULL_NAME_ON_REGISTRATION'
  | 'GIFTING_EMAILS'
  | 'GUEST_CHECKOUT'
  | 'GUEST_CHECKOUT_WITHOUT_EMAIL'
  | 'LOYALTY'
  | 'LOYALTY_OPT_IN'
  | 'MARKETING_CONSENT_ON_REGISTRATION'
  | 'MOBILE_NUMBER'
  | 'NEXT_DAY_DELIVERY'
  /** Whether or not the site supports returns */
  | 'ORDER_RETURNS'
  | 'POP_IN_A_BOX_TRACKER'
  | 'PRODUCT_PERSONALISATION'
  | 'PROFILES'
  | 'REFERRAL_CODE_ON_REGISTRATION'
  | 'REVIEWS'
  | 'REVIEW_VOTING'
  | 'SITE_PROPERTIES'
  | 'SPLIT_NAMES_ON_REGISTRATION'
  | 'SUBSCRIBE_AND_SAVE'
  | 'SUBSCRIPTIONS'
  | 'SUBSCRIPTIONS_CANCEL_ONLINE'
  | 'SUBSCRIPTIONS_DELAY'
  | 'SUBSCRIPTION_GIFTS'
  | 'SUPERSIZE'
  | 'SURVEYS'
  | 'TITLE_ON_REGISTRATION'
  | 'WAITLIST'
  | 'WHERE_DID_YOU_HEAR_ON_REGISTRATION'
  | 'WISHLIST';

/**
 * A downloadable file, which can be saved or displayed on the client.
 * This is needed primarily for workflows (e.g. returns) that include programatically-created PDF files.
 */
export interface FileDownload {
  __typename?: 'FileDownload';
  /** The contents of this file, base64 encoded. */
  content: Scalars['Base64Bytes'];
  /**
   * The [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
   * (as used in `Content-Type` headers) for this file. e.g. `application/pdf` or `text/plain`.
   */
  mimeType: Scalars['String'];
}

/**
 * Flags are available as part of the extensions for every request.
 *
 * On each GraphQL request, the extensions will contain a list of all flags that apply.
 *
 * Each flag will appear at most once.
 */
export type Flag =
  | 'LOGGED_IN'
  | 'REGISTRATION_UNAVAILABLE';

export interface Footer {
  __typename?: 'Footer';
  navigation?: Maybe<Navigation>;
  widgets?: Maybe<Array<Widget>>;
}

export type ForgottenPasswordError =
  | 'UNKNOWN_ERROR'
  | 'USER_NOT_FOUND';

export interface ForgottenPasswordInput {
  username: Scalars['String'];
}

export interface ForgottenPasswordResponse {
  __typename?: 'ForgottenPasswordResponse';
  /** Check to make sure error is not set to confirm success */
  error?: Maybe<ForgottenPasswordError>;
  /** @deprecated Check error instead */
  success: Scalars['Boolean'];
}

export interface Form {
  __typename?: 'Form';
  /** Can this form be sumitted (again)? */
  canSubmit: Scalars['Boolean'];
  /** How the form should be displayed once you have started it. */
  displayStyle: FormDisplayStyle;
  /** An ordered list of fields to be included with the form */
  fields: Array<FormField>;
  /** Used as an identifier and for translations. */
  identifier: Scalars['ID'];
  /** Can this form be submitted multiple times? */
  isMultiSubmission: Scalars['Boolean'];
  /** Get a single submission by ID */
  submission?: Maybe<FormSubmission>;
  /** A list of all submissions to this form. */
  submissions: Array<FormSubmission>;
  /** The type of form (see the enum for descriptions) */
  type: FormType;
}


export interface FormSubmissionArgs {
  submissionId?: InputMaybe<Scalars['ID']>;
}

export interface FormAnswer {
  __typename?: 'FormAnswer';
  /** Sometimes a question is locked and cannot be edited */
  locked: Scalars['Boolean'];
  /** Use to get the "name" of the Field, to pre-populate the values. */
  question: FormField;
  /** For single-select or free text answers, a singleton list will be returned. */
  values: Array<Scalars['String']>;
}

export interface FormAnswerInput {
  questionName: Scalars['String'];
  /** For single-select or free text answers, only a singleton list will be accepted */
  values: Array<Scalars['String']>;
}

export type FormDisplayStyle =
  | 'ONE_QUESTION_PER_PAGE'
  | 'SINGLE_PAGE';

export interface FormField {
  __typename?: 'FormField';
  answerOptions?: Maybe<Array<Maybe<AnswerOption>>>;
  /**
   * If confirmable is true, the field should be rendered with an additional confirmation field, where the user must
   * re-enter the value.  Validation of this should be done on the frontend and this does not affect the data that should
   * be sent to the GraphQL API.
   */
  confirmable: Scalars['Boolean'];
  /**
   * The default value of this field.  May be ignored, for example if there's an existing value from
   * a submission being edited.
   */
  defaultValue?: Maybe<Scalars['String']>;
  /**
   * Can this field be edited? If true, then this field should still be shown on the form with the standard logic to
   * determine its initial value, but the entry should not be changed. If this field is submitted with the rest of the
   * form to the API (optional) then its value will be ignored
   */
  disabled: Scalars['Boolean'];
  name: Scalars['String'];
  /**
   * If answerOptions is non-null, the field will be rejected if the value is not one of the values provided, or null.
   * @deprecated User answerOptions instead
   */
  options?: Maybe<Array<Scalars['String']>>;
  /** @deprecated Use AnswerOption.translation instead */
  optionsAreLocalised: Scalars['Boolean'];
  /**
   * A list of requirements, all of which must be met in order for this field to be displayed.
   * If the field is not displayed, then it should not be incliuded when the form is submitted to the API.
   * These requirement will be dynamic to the form will become visible or hidden as the answers to other questions change.
   */
  renderConditions: Array<RenderCondition>;
  /** If required is true, the field will be rejected if the value is empty or null */
  required: Scalars['Boolean'];
  type?: Maybe<FormFieldType>;
  validators: Array<Validator>;
}

export type FormFieldType =
  /** E.g. a checkbox. */
  | 'BOOLEAN'
  | 'DATE'
  | 'EMAIL'
  | 'FILE_UPLOAD'
  /** E.g. radio buttons. */
  | 'GROUP'
  | 'LIKERT_SCALE'
  /** E.g. a drop down list. */
  | 'LIST'
  | 'MARKETING_CONSENT'
  | 'MULTI_SELECT'
  | 'NUMBER'
  | 'PASSWORD'
  | 'PHONE_NUMBER'
  | 'TEXT'
  | 'TEXTBOX';

export interface FormFieldValidationError {
  __typename?: 'FormFieldValidationError';
  fieldName: Scalars['String'];
  /** true if this field has a strict set of options (LIST / GROUP) but the value provided was not one of them */
  invalidOption: Scalars['Boolean'];
  /** true if this field was marked as required, but the provided value was empty or null */
  requiredButNotProvided: Scalars['Boolean'];
  /** The list of validators which rejected this field.  A subset of the validators returned in the form */
  validators: Array<ValidatorName>;
}

export interface FormFilterInput {
  identifier?: InputMaybe<Scalars['ID']>;
  /** You may filter by either Form Type or Identifier (or neither). */
  type?: InputMaybe<FormType>;
}

export interface FormInput {
  identifier: Scalars['ID'];
}

export interface FormSubmission {
  __typename?: 'FormSubmission';
  answers: Array<FormAnswer>;
  complete: Scalars['Boolean'];
  editable: Scalars['Boolean'];
  id: Scalars['ID'];
}

export interface FormSubmissionInput {
  answers: Array<FormAnswerInput>;
  identifier: Scalars['ID'];
  /** The submission being edited, null if this is a new submission. */
  submissionId?: InputMaybe<Scalars['ID']>;
}

export interface FormSubmissionResponse {
  __typename?: 'FormSubmissionResponse';
  fieldErrors?: Maybe<Array<FormFieldValidationError>>;
  status: FormSubmissionStatus;
}

export type FormSubmissionStatus =
  /** This form is locked, or otherwise unavailable, don't offer a retry. */
  | 'CANT_BE_SUBMITTED'
  /** Success, Form was edited, but the form is still incomplete. */
  | 'EDITED_INCOMPLETE'
  /** Success, Form was edited, and this submission completed the form. */
  | 'EDITED_NOW_COMPLETE'
  /** Success, Form was edited, and it is still complete. */
  | 'EDITED_STILL_COMPLETE'
  /** There was invalid data in this submission, fix the error and retry. */
  | 'ERROR_SUBMITTING'
  /** Success, Form was submitted and is complete. */
  | 'SUBMITTED'
  /** Success, Form was submitted, but was not completed, questions missing. */
  | 'SUBMITTED_INCOMPLETE';

export type FormType =
  /** Forms for use within Account Creation */
  | 'ACCOUNT_CREATION'
  | 'ACCOUNT_SETTINGS'
  /** Additional Profiles will be shown on another page within the Account Section */
  | 'ADDITIONAL_PROFILE'
  /** Profiles that hold custom marketing preferences information */
  | 'CUSTOM_MARKETING_PREFERENCES'
  /** Main Profiles should be displayed prominently on the Account Home page */
  | 'MAIN_PROFILE'
  /** Product recommendation as a profile */
  | 'PRODUCT_RECOMMENDER'
  /** Forms for product reviews */
  | 'PRODUCT_REVIEW'
  /** Professional accounts application form as a profile */
  | 'PROFESSIONAL_ACCOUNTS'
  /** Trade accounts application form as a profile */
  | 'TRADE_ACCOUNTS';

export interface FoundationFinderLandingPageWidget extends Widget {
  __typename?: 'FoundationFinderLandingPageWidget';
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalAboutUsVideo extends Widget {
  __typename?: 'GlobalAboutUsVideo';
  buttonLink?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  textBlock?: Maybe<RichContent>;
  title?: Maybe<Scalars['String']>;
  transcript?: Maybe<RichContent>;
  videoTitle?: Maybe<Scalars['String']>;
  videoURL?: Maybe<Scalars['String']>;
}

export interface GlobalAccreditationIcon extends Widget {
  __typename?: 'GlobalAccreditationIcon';
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageAltText?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['URL']>;
  openNewWindow?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}

export interface GlobalAccreditationIconCollection extends Widget {
  __typename?: 'GlobalAccreditationIconCollection';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalBrandLogos extends Widget {
  __typename?: 'GlobalBrandLogos';
  brandLogosItemOneImageVariant?: Maybe<Scalars['URL']>;
  brandLogosItemOneImageVariantAlt?: Maybe<Scalars['String']>;
  brandLogosItemOneVariantURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isScrollable?: Maybe<Scalars['String']>;
  itemFiveImage?: Maybe<Scalars['URL']>;
  itemFiveImageAlt?: Maybe<Scalars['String']>;
  itemFiveURL?: Maybe<Scalars['String']>;
  itemFourImage?: Maybe<Scalars['URL']>;
  itemFourImageAlt?: Maybe<Scalars['String']>;
  itemFourURL?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneImageAlt?: Maybe<Scalars['String']>;
  itemOneURL?: Maybe<Scalars['String']>;
  itemSixImage?: Maybe<Scalars['URL']>;
  itemSixImageAlt?: Maybe<Scalars['String']>;
  itemSixURL?: Maybe<Scalars['String']>;
  itemThreeImage?: Maybe<Scalars['URL']>;
  itemThreeImageAlt?: Maybe<Scalars['String']>;
  itemThreeURL?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoImageAlt?: Maybe<Scalars['String']>;
  itemTwoURL?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
  titleAlign?: Maybe<Scalars['String']>;
}

export interface GlobalBuyingRightNow extends Widget {
  __typename?: 'GlobalBuyingRightNow';
  id: Scalars['ID'];
  productTextFour?: Maybe<Scalars['String']>;
  productTextOne?: Maybe<Scalars['String']>;
  productTextThree?: Maybe<Scalars['String']>;
  productTextTwo?: Maybe<Scalars['String']>;
  query: Query;
  sku?: Maybe<ProductVariant>;
  skufour?: Maybe<ProductVariant>;
  skuthree?: Maybe<ProductVariant>;
  skutwo?: Maybe<ProductVariant>;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalBuyingRightNowManualProductUrl extends Widget {
  __typename?: 'GlobalBuyingRightNowManualProductURL';
  id: Scalars['ID'];
  productTextFour?: Maybe<Scalars['String']>;
  productTextOne?: Maybe<Scalars['String']>;
  productTextThree?: Maybe<Scalars['String']>;
  productTextTwo?: Maybe<Scalars['String']>;
  query: Query;
  sku?: Maybe<ProductVariant>;
  skufour?: Maybe<ProductVariant>;
  skuthree?: Maybe<ProductVariant>;
  skutwo?: Maybe<ProductVariant>;
  title?: Maybe<Scalars['String']>;
  url1?: Maybe<Scalars['String']>;
  url2?: Maybe<Scalars['String']>;
  url3?: Maybe<Scalars['String']>;
  url4?: Maybe<Scalars['String']>;
}

export interface GlobalCardScrollerCard extends Widget {
  __typename?: 'GlobalCardScrollerCard';
  altText?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  colorOfText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['URL']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  verticalPositionOfText?: Maybe<Scalars['String']>;
}

export interface GlobalCardScrollerSet extends Widget {
  __typename?: 'GlobalCardScrollerSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  cardStyle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalDispatchAndDateCountdownWidget extends Widget {
  __typename?: 'GlobalDispatchAndDateCountdownWidget';
  countDownEndDay?: Maybe<Scalars['String']>;
  countDownEndHour?: Maybe<Scalars['Int']>;
  countDownEndMinutes?: Maybe<Scalars['Int']>;
  countDownEndMonth?: Maybe<Scalars['String']>;
  countDownEndSeconds?: Maybe<Scalars['Int']>;
  countDownEndYear?: Maybe<Scalars['String']>;
  countDownSubTitle?: Maybe<Scalars['String']>;
  countDownTitle?: Maybe<Scalars['String']>;
  daysTitle?: Maybe<Scalars['String']>;
  decrement?: Maybe<Scalars['Int']>;
  defaultNextDayDeliveryCutoff?: Maybe<Scalars['Int']>;
  direction?: Maybe<Scalars['String']>;
  dispatchIcon?: Maybe<Scalars['String']>;
  dispatchTimeForFriday?: Maybe<Scalars['Int']>;
  dispatchTimeForMonday?: Maybe<Scalars['Int']>;
  dispatchTimeForSaturday?: Maybe<Scalars['Int']>;
  dispatchTimeForSunday?: Maybe<Scalars['Int']>;
  dispatchTimeForThursday?: Maybe<Scalars['Int']>;
  dispatchTimeForTuesday?: Maybe<Scalars['Int']>;
  dispatchTimeForWednesday?: Maybe<Scalars['Int']>;
  dispatchTimer?: Maybe<Scalars['String']>;
  hoursTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  linkUrl?: Maybe<Scalars['String']>;
  minutesTitle?: Maybe<Scalars['String']>;
  query: Query;
  removeOnEnd?: Maybe<Scalars['String']>;
  secondsTitle?: Maybe<Scalars['String']>;
  separator?: Maybe<Scalars['String']>;
  showTimer?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['String']>;
  textAlignment?: Maybe<Scalars['String']>;
  useLocal?: Maybe<Scalars['String']>;
  weeksTitle?: Maybe<Scalars['String']>;
}

export interface GlobalEditorialWithFeature extends Widget {
  __typename?: 'GlobalEditorialWithFeature';
  CTAFeatured?: Maybe<Scalars['String']>;
  CTAItemOne?: Maybe<Scalars['String']>;
  CTAItemTwo?: Maybe<Scalars['String']>;
  altItemTwo?: Maybe<Scalars['String']>;
  altTextFeatured?: Maybe<Scalars['String']>;
  altTextItemOne?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  descriptionFeatured?: Maybe<Scalars['String']>;
  descriptionItemOne?: Maybe<Scalars['String']>;
  descriptionItemTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageFeaturedLarge?: Maybe<Scalars['URL']>;
  imageFeaturedSmall?: Maybe<Scalars['URL']>;
  imageOneLarge?: Maybe<Scalars['URL']>;
  imageOneSmall?: Maybe<Scalars['URL']>;
  imageTwoLarge?: Maybe<Scalars['URL']>;
  imageTwoSmall?: Maybe<Scalars['URL']>;
  linkFeatured?: Maybe<Scalars['String']>;
  linkItemOne?: Maybe<Scalars['String']>;
  linkItemTwo?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
  titleFeatured?: Maybe<Scalars['String']>;
  titleItemOne?: Maybe<Scalars['String']>;
  titleItemTwo?: Maybe<Scalars['String']>;
}

export interface GlobalFooterAccreditationIcons extends Widget {
  __typename?: 'GlobalFooterAccreditationIcons';
  Image2Alt?: Maybe<Scalars['String']>;
  Image3Alt?: Maybe<Scalars['String']>;
  Image3Href?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  image1?: Maybe<Scalars['URL']>;
  image1Alt?: Maybe<Scalars['String']>;
  image1Href?: Maybe<Scalars['URL']>;
  image2?: Maybe<Scalars['URL']>;
  image2Href?: Maybe<Scalars['URL']>;
  image3?: Maybe<Scalars['URL']>;
  query: Query;
}

export interface GlobalFooterContactUs extends Widget {
  __typename?: 'GlobalFooterContactUs';
  id: Scalars['ID'];
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  line4?: Maybe<Scalars['String']>;
  line5?: Maybe<Scalars['String']>;
  line6?: Maybe<Scalars['String']>;
  line7?: Maybe<Scalars['String']>;
  line8?: Maybe<Scalars['String']>;
  line9?: Maybe<Scalars['String']>;
  line10?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalFourBestSellers extends Widget {
  __typename?: 'GlobalFourBestSellers';
  ProductFour?: Maybe<ProductVariant>;
  ProductFourButtonText?: Maybe<Scalars['String']>;
  ProductOne?: Maybe<ProductVariant>;
  ProductOneButtonText?: Maybe<Scalars['String']>;
  ProductThree?: Maybe<ProductVariant>;
  ProductThreeButtonText?: Maybe<Scalars['String']>;
  ProductTwo?: Maybe<ProductVariant>;
  ProductTwoButtonText?: Maybe<Scalars['String']>;
  Title?: Maybe<Scalars['String']>;
  disableTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalFourButtonLink extends Widget {
  __typename?: 'GlobalFourButtonLink';
  buttonTextFour?: Maybe<Scalars['String']>;
  buttonTextOne?: Maybe<Scalars['String']>;
  buttonTextThree?: Maybe<Scalars['String']>;
  buttonTextTwo?: Maybe<Scalars['String']>;
  buttonUrlFour?: Maybe<Scalars['String']>;
  buttonUrlOne?: Maybe<Scalars['String']>;
  buttonUrlThree?: Maybe<Scalars['String']>;
  buttonUrlTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalFourItemEditorial extends Widget {
  __typename?: 'GlobalFourItemEditorial';
  altItemFour?: Maybe<Scalars['String']>;
  altItemOne?: Maybe<Scalars['String']>;
  altItemThree?: Maybe<Scalars['String']>;
  altItemTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemFourCTA?: Maybe<Scalars['String']>;
  itemFourDescription?: Maybe<Scalars['String']>;
  itemFourImage?: Maybe<Scalars['URL']>;
  itemFourSubtitle?: Maybe<Scalars['String']>;
  itemFourTitle?: Maybe<Scalars['String']>;
  itemFourUrl?: Maybe<Scalars['String']>;
  itemOneCTA?: Maybe<Scalars['String']>;
  itemOneDescription?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneSubtitle?: Maybe<Scalars['String']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneUrl?: Maybe<Scalars['String']>;
  itemThreeCTA?: Maybe<Scalars['String']>;
  itemThreeDescription?: Maybe<Scalars['String']>;
  itemThreeImage?: Maybe<Scalars['URL']>;
  itemThreeSubtitle?: Maybe<Scalars['String']>;
  itemThreeTitle?: Maybe<Scalars['String']>;
  itemThreeUrl?: Maybe<Scalars['String']>;
  itemTwoCTA?: Maybe<Scalars['String']>;
  itemTwoDescription?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoSubtitle?: Maybe<Scalars['String']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoUrl?: Maybe<Scalars['String']>;
  noWrapItems?: Maybe<Scalars['String']>;
  query: Query;
  styleModifier?: Maybe<Scalars['String']>;
  textAlignment?: Maybe<Scalars['String']>;
  widgetLink?: Maybe<Scalars['String']>;
  widgetLinkText?: Maybe<Scalars['String']>;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface GlobalGeneralImageBanner extends Widget {
  __typename?: 'GlobalGeneralImageBanner';
  id: Scalars['ID'];
  imageAltText?: Maybe<Scalars['String']>;
  largeImage?: Maybe<Scalars['URL']>;
  linkUrl?: Maybe<Scalars['String']>;
  mediumImage?: Maybe<Scalars['URL']>;
  query: Query;
  smallImage?: Maybe<Scalars['URL']>;
}

export interface GlobalHelpCentreAccordion extends Widget {
  __typename?: 'GlobalHelpCentreAccordion';
  accordionContent?: Maybe<RichContent>;
  accordionHeading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalHelpCentreAccordion2 extends Widget {
  __typename?: 'GlobalHelpCentreAccordion2';
  accordionContent?: Maybe<RichContent>;
  accordionHeading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalHelpCentreAccordionCollection extends Widget {
  __typename?: 'GlobalHelpCentreAccordionCollection';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalHelpCentreCollection extends Widget {
  __typename?: 'GlobalHelpCentreCollection';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalHeroCtaBanner extends Widget {
  __typename?: 'GlobalHeroCTABanner';
  altTextImg?: Maybe<Scalars['String']>;
  buttonOne?: Maybe<Scalars['String']>;
  buttonOneLink?: Maybe<Scalars['String']>;
  buttonTwo?: Maybe<Scalars['String']>;
  buttonTwoLink?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageDesktop?: Maybe<Scalars['URL']>;
  imageExtraSmall?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
}

export interface GlobalImageCard extends Widget {
  __typename?: 'GlobalImageCard';
  altText?: Maybe<Scalars['String']>;
  buttonText?: Maybe<Scalars['String']>;
  colorOfText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['URL']>;
  noBorder?: Maybe<Scalars['Boolean']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  verticalPositionOfText?: Maybe<Scalars['String']>;
}

export interface GlobalImageCardSet extends Widget {
  __typename?: 'GlobalImageCardSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  cardStyle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  noBorder?: Maybe<Scalars['Boolean']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalMultiButton extends Widget {
  __typename?: 'GlobalMultiButton';
  id: Scalars['ID'];
  multiButtonWidget_buttonStyle?: Maybe<Scalars['String']>;
  multiButtonWidget_itemFourCTAText?: Maybe<Scalars['String']>;
  multiButtonWidget_itemFourURL?: Maybe<Scalars['String']>;
  multiButtonWidget_itemOneCTAText?: Maybe<Scalars['String']>;
  multiButtonWidget_itemOneURL?: Maybe<Scalars['String']>;
  multiButtonWidget_itemThreeCTAText?: Maybe<Scalars['String']>;
  multiButtonWidget_itemThreeURL?: Maybe<Scalars['String']>;
  multiButtonWidget_itemTwoCTAText?: Maybe<Scalars['String']>;
  multiButtonWidget_itemTwoURL?: Maybe<Scalars['String']>;
  query: Query;
}

export interface GlobalPrimaryBanner extends Widget {
  __typename?: 'GlobalPrimaryBanner';
  altImageLarge?: Maybe<Scalars['String']>;
  altLogoPng?: Maybe<Scalars['String']>;
  bannerURL?: Maybe<Scalars['String']>;
  contentAlign?: Maybe<Scalars['String']>;
  contentBoxPosition?: Maybe<Scalars['String']>;
  contentTheme?: Maybe<Scalars['String']>;
  ctaOne?: Maybe<Scalars['String']>;
  ctaOneAriaLabel?: Maybe<Scalars['String']>;
  ctaOneURL?: Maybe<Scalars['String']>;
  ctaTwo?: Maybe<Scalars['String']>;
  ctaTwoAriaLabel?: Maybe<Scalars['String']>;
  ctaTwoURL?: Maybe<Scalars['String']>;
  hasMargin?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageLarge?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  logopngImageBG?: Maybe<Scalars['URL']>;
  logopngWhiteBG?: Maybe<Scalars['URL']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
  useH1?: Maybe<Scalars['String']>;
}

export interface GlobalPrimaryBannerWithList extends Widget {
  __typename?: 'GlobalPrimaryBannerWithList';
  altImageLarge?: Maybe<Scalars['String']>;
  altLogoPng?: Maybe<Scalars['String']>;
  bannerURL?: Maybe<Scalars['String']>;
  contentAlign?: Maybe<Scalars['String']>;
  contentBoxPosition?: Maybe<Scalars['String']>;
  contentTheme?: Maybe<Scalars['String']>;
  ctaOne?: Maybe<Scalars['String']>;
  ctaOneAriaLabel?: Maybe<Scalars['String']>;
  ctaOneURL?: Maybe<Scalars['String']>;
  ctaTwo?: Maybe<Scalars['String']>;
  ctaTwoAriaLabel?: Maybe<Scalars['String']>;
  ctaTwoURL?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageLarge?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  listBrowserSection?: Maybe<Scalars['String']>;
  logopngImageBG?: Maybe<Scalars['URL']>;
  logopngWhiteBG?: Maybe<Scalars['URL']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
}

export interface GlobalPrimaryBannerWithTextOverlay extends Widget {
  __typename?: 'GlobalPrimaryBannerWithTextOverlay';
  altImageLarge?: Maybe<Scalars['String']>;
  altLogoPng?: Maybe<Scalars['String']>;
  bannerURL?: Maybe<Scalars['String']>;
  contentAlign?: Maybe<Scalars['String']>;
  contentBoxPosition?: Maybe<Scalars['String']>;
  contentTheme?: Maybe<Scalars['String']>;
  ctaOne?: Maybe<Scalars['String']>;
  ctaOneAriaLabel?: Maybe<Scalars['String']>;
  ctaOneURL?: Maybe<Scalars['String']>;
  ctaTwo?: Maybe<Scalars['String']>;
  ctaTwoAriaLabel?: Maybe<Scalars['String']>;
  ctaTwoURL?: Maybe<Scalars['String']>;
  hasMargin?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageLarge?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  logopngImageBG?: Maybe<Scalars['URL']>;
  logopngWhiteBG?: Maybe<Scalars['URL']>;
  openInTabOne?: Maybe<Scalars['String']>;
  openInTabTwo?: Maybe<Scalars['String']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
  useH1?: Maybe<Scalars['String']>;
}

export interface GlobalProductCardScroller extends Widget {
  __typename?: 'GlobalProductCardScroller';
  hasArrows?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  productSkuList?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalScalableLogos extends Widget {
  __typename?: 'GlobalScalableLogos';
  altTextFive?: Maybe<Scalars['String']>;
  altTextFour?: Maybe<Scalars['String']>;
  altTextOne?: Maybe<Scalars['String']>;
  altTextSix?: Maybe<Scalars['String']>;
  altTextThree?: Maybe<Scalars['String']>;
  altTextTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imagePathFive?: Maybe<Scalars['URL']>;
  imagePathFour?: Maybe<Scalars['URL']>;
  imagePathOne?: Maybe<Scalars['URL']>;
  imagePathSix?: Maybe<Scalars['URL']>;
  imagePathThree?: Maybe<Scalars['URL']>;
  imagePathTwo?: Maybe<Scalars['URL']>;
  query: Query;
  titleFive?: Maybe<Scalars['String']>;
  titleFour?: Maybe<Scalars['String']>;
  titleOne?: Maybe<Scalars['String']>;
  titleSix?: Maybe<Scalars['String']>;
  titleThree?: Maybe<Scalars['String']>;
  titleTwo?: Maybe<Scalars['String']>;
  urlFive?: Maybe<Scalars['String']>;
  urlFour?: Maybe<Scalars['String']>;
  urlOne?: Maybe<Scalars['String']>;
  urlSix?: Maybe<Scalars['String']>;
  urlThree?: Maybe<Scalars['String']>;
  urlTwo?: Maybe<Scalars['String']>;
}

export interface GlobalSectionPeek extends Widget {
  __typename?: 'GlobalSectionPeek';
  id: Scalars['ID'];
  numberOfProducts?: Maybe<Scalars['Int']>;
  productList?: Maybe<ProductList>;
  query: Query;
  title?: Maybe<Scalars['String']>;
  titleAlign?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
}


export interface GlobalSectionPeekProductListArgs {
  input: ProductListInput;
}

export interface GlobalSetAndromeda extends Widget {
  __typename?: 'GlobalSetAndromeda';
  banners?: Maybe<Array<Maybe<Widget>>>;
  columns?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalSimpleTextCtaWidget extends Widget {
  __typename?: 'GlobalSimpleTextCTAWidget';
  id: Scalars['ID'];
  itemOneCTAText?: Maybe<Scalars['String']>;
  itemOneURL?: Maybe<Scalars['String']>;
  query: Query;
  text?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalSixItemCategories extends Widget {
  __typename?: 'GlobalSixItemCategories';
  altItemFive?: Maybe<Scalars['String']>;
  altItemFour?: Maybe<Scalars['String']>;
  altItemOne?: Maybe<Scalars['String']>;
  altItemSix?: Maybe<Scalars['String']>;
  altItemThree?: Maybe<Scalars['String']>;
  altItemTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemCTAAlign?: Maybe<Scalars['String']>;
  itemFiveCTA?: Maybe<Scalars['String']>;
  itemFiveImage?: Maybe<Scalars['URL']>;
  itemFiveLink?: Maybe<Scalars['String']>;
  itemFiveTitle?: Maybe<Scalars['String']>;
  itemFourCTA?: Maybe<Scalars['String']>;
  itemFourImage?: Maybe<Scalars['URL']>;
  itemFourLink?: Maybe<Scalars['String']>;
  itemFourTitle?: Maybe<Scalars['String']>;
  itemOneCTA?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneLink?: Maybe<Scalars['String']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemSixCTA?: Maybe<Scalars['String']>;
  itemSixImage?: Maybe<Scalars['URL']>;
  itemSixLink?: Maybe<Scalars['String']>;
  itemSixTitle?: Maybe<Scalars['String']>;
  itemThreeCTA?: Maybe<Scalars['String']>;
  itemThreeImage?: Maybe<Scalars['URL']>;
  itemThreeLink?: Maybe<Scalars['String']>;
  itemThreeTitle?: Maybe<Scalars['String']>;
  itemTitleAlign?: Maybe<Scalars['String']>;
  itemTwoCTA?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoLink?: Maybe<Scalars['String']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalSocialIcon extends Widget {
  __typename?: 'GlobalSocialIcon';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  url?: Maybe<Scalars['String']>;
}

export interface GlobalSocialIconCollection extends Widget {
  __typename?: 'GlobalSocialIconCollection';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalSocialIconCollectionv2 extends Widget {
  __typename?: 'GlobalSocialIconCollectionv2';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalSocialIconv2 extends Widget {
  __typename?: 'GlobalSocialIconv2';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  url?: Maybe<Scalars['String']>;
}

export interface GlobalStripBanner extends Widget {
  __typename?: 'GlobalStripBanner';
  id: Scalars['ID'];
  query: Query;
  stripBannerText?: Maybe<Scalars['String']>;
  stripBannerURL?: Maybe<Scalars['String']>;
}

export interface GlobalSubscriptionOptions extends Widget {
  __typename?: 'GlobalSubscriptionOptions';
  id: Scalars['ID'];
  query: Query;
  subscriptionOptionsRibbonMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsShowRibbon?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFour?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourCTAText?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourDeliveryInfo?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourImage?: Maybe<Scalars['URL']>;
  subscriptionOptionsSkuFourPrice?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourPriceAppend?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourSaveMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourTitle?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuFourUspMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOne?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOneCTAText?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOneDeliveryInfo?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOneImage?: Maybe<Scalars['URL']>;
  subscriptionOptionsSkuOnePrice?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOnePriceAppend?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOneSaveMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOneTitle?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuOneUspMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThree?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreeCTAText?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreeDeliveryInfo?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreeImage?: Maybe<Scalars['URL']>;
  subscriptionOptionsSkuThreePrice?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreePriceAppend?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreeSaveMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreeTitle?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuThreeUspMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwo?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoCTAText?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoDeliveryInfo?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoImage?: Maybe<Scalars['URL']>;
  subscriptionOptionsSkuTwoPrice?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoPriceAppend?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoSaveMessage?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoTitle?: Maybe<Scalars['String']>;
  subscriptionOptionsSkuTwoUspMessage?: Maybe<Scalars['String']>;
}

export interface GlobalTabbedWidgetSet extends Widget {
  __typename?: 'GlobalTabbedWidgetSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  tabbedWidgetSetSubTitle?: Maybe<Scalars['String']>;
  tabbedWidgetSetTitle?: Maybe<Scalars['String']>;
  tabbedWidgetTabTitle_1?: Maybe<Scalars['String']>;
  tabbedWidgetTabTitle_2?: Maybe<Scalars['String']>;
}

export interface GlobalThreeItemEditorial extends Widget {
  __typename?: 'GlobalThreeItemEditorial';
  altItemOne?: Maybe<Scalars['String']>;
  altItemThree?: Maybe<Scalars['String']>;
  altItemTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemOneCTAText?: Maybe<Scalars['String']>;
  itemOneDescription?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneSubtitle?: Maybe<Scalars['String']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneUrl?: Maybe<Scalars['String']>;
  itemOne_secondaryCTAText?: Maybe<Scalars['String']>;
  itemOne_secondaryCTAUrl?: Maybe<Scalars['String']>;
  itemThreeCTAText?: Maybe<Scalars['String']>;
  itemThreeDescription?: Maybe<Scalars['String']>;
  itemThreeImage?: Maybe<Scalars['URL']>;
  itemThreeSubtitle?: Maybe<Scalars['String']>;
  itemThreeTitle?: Maybe<Scalars['String']>;
  itemThreeUrl?: Maybe<Scalars['String']>;
  itemThree_secondaryCTAText?: Maybe<Scalars['String']>;
  itemThree_secondaryCTAUrl?: Maybe<Scalars['String']>;
  itemTwoCTAText?: Maybe<Scalars['String']>;
  itemTwoDescription?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoSubtitle?: Maybe<Scalars['String']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoUrl?: Maybe<Scalars['String']>;
  itemTwo_secondaryCTAText?: Maybe<Scalars['String']>;
  itemTwo_secondaryCTAUrl?: Maybe<Scalars['String']>;
  query: Query;
  threeItemItemOneAltTextVariant?: Maybe<Scalars['String']>;
  threeItemItemOneCTATextVariant?: Maybe<Scalars['String']>;
  threeItemItemOneDescriptionVariant?: Maybe<Scalars['String']>;
  threeItemItemOneImageVariant?: Maybe<Scalars['URL']>;
  threeItemItemOneSubtitleVariant?: Maybe<Scalars['String']>;
  threeItemItemOneTitleVariant?: Maybe<Scalars['String']>;
  threeItemItemOneVariantUrl?: Maybe<Scalars['String']>;
  useCircularImages?: Maybe<Scalars['String']>;
  widgetHeadingSize?: Maybe<Scalars['String']>;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface GlobalThreeItemEditorialSubtitleBg extends Widget {
  __typename?: 'GlobalThreeItemEditorialSubtitleBG';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemOneAltText?: Maybe<Scalars['String']>;
  itemOneCTAText?: Maybe<Scalars['String']>;
  itemOneDescription?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneSubtitle?: Maybe<Scalars['String']>;
  itemOneSubtitleBGColour?: Maybe<Scalars['String']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneUrl?: Maybe<Scalars['String']>;
  itemThreeAltText?: Maybe<Scalars['String']>;
  itemThreeCTAText?: Maybe<Scalars['String']>;
  itemThreeDescription?: Maybe<Scalars['String']>;
  itemThreeImage?: Maybe<Scalars['URL']>;
  itemThreeSubtitle?: Maybe<Scalars['String']>;
  itemThreeSubtitleBGColour?: Maybe<Scalars['String']>;
  itemThreeTitle?: Maybe<Scalars['String']>;
  itemThreeUrl?: Maybe<Scalars['String']>;
  itemTwoAltText?: Maybe<Scalars['String']>;
  itemTwoCTAText?: Maybe<Scalars['String']>;
  itemTwoDescription?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoSubtitle?: Maybe<Scalars['String']>;
  itemTwoSubtitleBGColour?: Maybe<Scalars['String']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoUrl?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalTransformationSlider extends Widget {
  __typename?: 'GlobalTransformationSlider';
  afterImageAltText?: Maybe<Scalars['String']>;
  afterImageLarge?: Maybe<Scalars['URL']>;
  afterImageMedium?: Maybe<Scalars['URL']>;
  afterImageSmall?: Maybe<Scalars['URL']>;
  beforeImageAltText?: Maybe<Scalars['String']>;
  beforeImageLarge?: Maybe<Scalars['URL']>;
  beforeImageMedium?: Maybe<Scalars['URL']>;
  beforeImageSmall?: Maybe<Scalars['URL']>;
  dividingLineColor?: Maybe<Scalars['String']>;
  dragButtonPosition?: Maybe<Scalars['String']>;
  dragLinePosition?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
  titlePosition?: Maybe<Scalars['String']>;
}

export interface GlobalTrendingHashtagBlock extends Widget {
  __typename?: 'GlobalTrendingHashtagBlock';
  hashtag?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  url?: Maybe<Scalars['String']>;
}

export interface GlobalTrendingHashtagCollection extends Widget {
  __typename?: 'GlobalTrendingHashtagCollection';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalTwoBestSellers extends Widget {
  __typename?: 'GlobalTwoBestSellers';
  ProductOne?: Maybe<ProductVariant>;
  ProductOneButtonText?: Maybe<Scalars['String']>;
  ProductTwo?: Maybe<ProductVariant>;
  ProductTwoButtonText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
}

export interface GlobalTwoItemEditorial extends Widget {
  __typename?: 'GlobalTwoItemEditorial';
  altItemOne?: Maybe<Scalars['String']>;
  altItemTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemOneCTAText?: Maybe<Scalars['String']>;
  itemOneDescription?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneURL?: Maybe<Scalars['String']>;
  itemTwoCTAText?: Maybe<Scalars['String']>;
  itemTwoDescription?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoURL?: Maybe<Scalars['String']>;
  query: Query;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface GlobalTwoItemImageTextBlock extends Widget {
  __typename?: 'GlobalTwoItemImageTextBlock';
  backgroundColour?: Maybe<Scalars['String']>;
  button2Text?: Maybe<Scalars['String']>;
  button2Url?: Maybe<Scalars['String']>;
  hasMargin?: Maybe<Scalars['String']>;
  hasPadding?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemAlign?: Maybe<Scalars['String']>;
  itemAlt?: Maybe<Scalars['String']>;
  itemButton?: Maybe<Scalars['String']>;
  itemImage?: Maybe<Scalars['URL']>;
  itemImageSmall?: Maybe<Scalars['URL']>;
  itemText?: Maybe<RichContent>;
  itemTitle?: Maybe<Scalars['String']>;
  itemURL?: Maybe<Scalars['String']>;
  query: Query;
  textAlign?: Maybe<Scalars['String']>;
  transcript?: Maybe<RichContent>;
  videoTitle?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
}

export interface GlobalTwoItemImageTextCta extends Widget {
  __typename?: 'GlobalTwoItemImageTextCTA';
  backgroundColour?: Maybe<Scalars['String']>;
  contentTheme?: Maybe<Scalars['String']>;
  hasMargin?: Maybe<Scalars['String']>;
  hasPadding?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemOneCTAText?: Maybe<Scalars['String']>;
  itemOneContentAlign?: Maybe<Scalars['String']>;
  itemOneDescription?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneImageAltText?: Maybe<Scalars['String']>;
  itemOneImageSmall?: Maybe<Scalars['URL']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneURL?: Maybe<Scalars['String']>;
  itemTwoCTAText?: Maybe<Scalars['String']>;
  itemTwoContentAlign?: Maybe<Scalars['String']>;
  itemTwoDescription?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoImageAltText?: Maybe<Scalars['String']>;
  itemTwoImageSmall?: Maybe<Scalars['URL']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoURL?: Maybe<Scalars['String']>;
  query: Query;
}

export interface GlobalTwoItemImageTextCta3070 extends Widget {
  __typename?: 'GlobalTwoItemImageTextCTA3070';
  contentTheme?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemOneCTAText?: Maybe<Scalars['String']>;
  itemOneContentAlign?: Maybe<Scalars['String']>;
  itemOneDescription?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneImageAltText?: Maybe<Scalars['String']>;
  itemOneImageSmall?: Maybe<Scalars['URL']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneURL?: Maybe<Scalars['String']>;
  itemTwoCTAText?: Maybe<Scalars['String']>;
  itemTwoContentAlign?: Maybe<Scalars['String']>;
  itemTwoDescription?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoImageAltText?: Maybe<Scalars['String']>;
  itemTwoImageSmall?: Maybe<Scalars['URL']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoURL?: Maybe<Scalars['String']>;
  query: Query;
}

export interface GlobalUgcCarousel extends Widget {
  __typename?: 'GlobalUGCCarousel';
  category?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  tag?: Maybe<Scalars['String']>;
  ugcSubText?: Maybe<Scalars['String']>;
  ugcTitle?: Maybe<Scalars['String']>;
}

export interface GlobalVideoGallery extends Widget {
  __typename?: 'GlobalVideoGallery';
  id: Scalars['ID'];
  itemFiveButtonLink?: Maybe<Scalars['String']>;
  itemFiveCTA?: Maybe<Scalars['String']>;
  itemFiveImage?: Maybe<Scalars['URL']>;
  itemFiveImageAltText?: Maybe<Scalars['String']>;
  itemFiveTitle?: Maybe<Scalars['String']>;
  itemFiveTranscript?: Maybe<RichContent>;
  itemFiveVideoURL?: Maybe<Scalars['String']>;
  itemFourButtonLink?: Maybe<Scalars['String']>;
  itemFourCTA?: Maybe<Scalars['String']>;
  itemFourImage?: Maybe<Scalars['URL']>;
  itemFourImageAltText?: Maybe<Scalars['String']>;
  itemFourTitle?: Maybe<Scalars['String']>;
  itemFourTranscript?: Maybe<RichContent>;
  itemFourVideoURL?: Maybe<Scalars['String']>;
  itemOneButtonLink?: Maybe<Scalars['String']>;
  itemOneCTA?: Maybe<Scalars['String']>;
  itemOneImage?: Maybe<Scalars['URL']>;
  itemOneImageAltText?: Maybe<Scalars['String']>;
  itemOneTitle?: Maybe<Scalars['String']>;
  itemOneTranscript?: Maybe<RichContent>;
  itemOneVideoURL?: Maybe<Scalars['String']>;
  itemSixButtonLink?: Maybe<Scalars['String']>;
  itemSixCTA?: Maybe<Scalars['String']>;
  itemSixImage?: Maybe<Scalars['URL']>;
  itemSixImageAltText?: Maybe<Scalars['String']>;
  itemSixTitle?: Maybe<Scalars['String']>;
  itemSixTranscript?: Maybe<RichContent>;
  itemSixVideoURL?: Maybe<Scalars['String']>;
  itemThreeButtonLink?: Maybe<Scalars['String']>;
  itemThreeCTA?: Maybe<Scalars['String']>;
  itemThreeImage?: Maybe<Scalars['URL']>;
  itemThreeImageAltText?: Maybe<Scalars['String']>;
  itemThreeTitle?: Maybe<Scalars['String']>;
  itemThreeTranscript?: Maybe<RichContent>;
  itemThreeVideoURL?: Maybe<Scalars['String']>;
  itemTwoButtonLink?: Maybe<Scalars['String']>;
  itemTwoCTA?: Maybe<Scalars['String']>;
  itemTwoImage?: Maybe<Scalars['URL']>;
  itemTwoImageAltText?: Maybe<Scalars['String']>;
  itemTwoTitle?: Maybe<Scalars['String']>;
  itemTwoTranscript?: Maybe<RichContent>;
  itemTwoVideoURL?: Maybe<Scalars['String']>;
  query: Query;
  textAlign?: Maybe<Scalars['String']>;
  textBlock?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  useTitleHeadingLevel2?: Maybe<Scalars['Boolean']>;
}

export interface GlobalVideoHeroBannerWidget extends Widget {
  __typename?: 'GlobalVideoHeroBannerWidget';
  VideoPreviewImageTablet?: Maybe<Scalars['URL']>;
  autoplayVideo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  muteVideo?: Maybe<Scalars['String']>;
  query: Query;
  transcript?: Maybe<RichContent>;
  videoAssetPathMp4?: Maybe<Scalars['String']>;
  videoAssetPathWebm?: Maybe<Scalars['String']>;
  videoCaptionPathVTT?: Maybe<Scalars['URL']>;
  videoPreviewImage?: Maybe<Scalars['URL']>;
  videoPreviewImageMobile?: Maybe<Scalars['URL']>;
  videoTitle?: Maybe<Scalars['String']>;
}

export interface GlobalVideoTextImageCta extends Widget {
  __typename?: 'GlobalVideoTextImageCTA';
  id: Scalars['ID'];
  itemCTA?: Maybe<Scalars['String']>;
  itemCTALink?: Maybe<Scalars['String']>;
  itemDescription?: Maybe<Scalars['String']>;
  itemImage?: Maybe<Scalars['URL']>;
  itemImageLink?: Maybe<Scalars['String']>;
  query: Query;
  videoUrl?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface GlobalWaitListSignUpFormResponses extends Widget {
  __typename?: 'GlobalWaitListSignUpFormResponses';
  continueButtonText?: Maybe<Scalars['String']>;
  errorButtonText?: Maybe<Scalars['String']>;
  formResponse?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  registerButtonText?: Maybe<Scalars['String']>;
  responseStartSubText?: Maybe<Scalars['String']>;
  responseSubText?: Maybe<RichContent>;
  responseTitle?: Maybe<Scalars['String']>;
}

export interface GlobalWaitListSignUpWidget extends Widget {
  __typename?: 'GlobalWaitListSignUpWidget';
  buttonText?: Maybe<Scalars['String']>;
  campaignCode?: Maybe<Scalars['ID']>;
  enableNameField?: Maybe<Scalars['String']>;
  enableSignUp?: Maybe<Scalars['String']>;
  errorReturnUrl?: Maybe<Scalars['String']>;
  fullNamePlaceholderText?: Maybe<Scalars['String']>;
  gdprDisclaimerText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  noAccountReturnUrl?: Maybe<Scalars['String']>;
  placeholderText?: Maybe<Scalars['String']>;
  query: Query;
  registeredReturnUrl?: Maybe<Scalars['String']>;
  signUpText?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalWidgetSirius extends Widget {
  __typename?: 'GlobalWidgetSirius';
  altText?: Maybe<Scalars['String']>;
  button?: Maybe<Scalars['String']>;
  highlight?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['URL']>;
  imagePosition?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  query: Query;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  widgetSiriusAltTextVariant?: Maybe<Scalars['String']>;
  widgetSiriusButtonVariant?: Maybe<Scalars['String']>;
  widgetSiriusHighlightVariant?: Maybe<Scalars['String']>;
  widgetSiriusImageVariant?: Maybe<Scalars['URL']>;
  widgetSiriusLinkVariant?: Maybe<Scalars['String']>;
  widgetSiriusSubTitleVariant?: Maybe<Scalars['String']>;
  widgetSiriusTitleVariant?: Maybe<Scalars['String']>;
}

export interface GlobalWidgetVega extends Widget {
  __typename?: 'GlobalWidgetVega';
  altTextImg?: Maybe<Scalars['String']>;
  button?: Maybe<Scalars['String']>;
  container?: Maybe<Scalars['String']>;
  containerBg?: Maybe<Scalars['String']>;
  highlight?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageDesktop?: Maybe<Scalars['URL']>;
  imageMobile?: Maybe<Scalars['URL']>;
  link?: Maybe<Scalars['String']>;
  query: Query;
  subTitle?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface GlobalYoutubeGalleryItem extends Widget {
  __typename?: 'GlobalYoutubeGalleryItem';
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
  videoId?: Maybe<Scalars['String']>;
}

export interface GlobalYoutubeGallerySet extends Widget {
  __typename?: 'GlobalYoutubeGallerySet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface GuestCheckoutEmailInput {
  email: Scalars['String'];
  marketingConsent: MarketingConsentPreference;
  marketingConsentAuditData: MarketingConsentAuditData;
}

export interface GuestCheckoutStartInput {
  checkoutStartInput: CheckoutStartInput;
  guestCheckoutEmailInput: GuestCheckoutEmailInput;
}

export interface Header {
  __typename?: 'Header';
  navigation?: Maybe<Navigation>;
  widgets?: Maybe<Array<Widget>>;
}

export interface Hyperlink {
  __typename?: 'Hyperlink';
  noFollow?: Maybe<Scalars['Boolean']>;
  /** @deprecated No longer supported */
  noIndex?: Maybe<Scalars['Boolean']>;
  openExternally?: Maybe<Scalars['Boolean']>;
  text: Scalars['DisplayString'];
  url: Scalars['URL'];
}

export interface Image {
  __typename?: 'Image';
  alt?: Maybe<Scalars['DisplayString']>;
  url: Scalars['URL'];
}

export interface InstantSearchCorrection {
  __typename?: 'InstantSearchCorrection';
  correction: Scalars['DisplayString'];
  highlightedSearchCorrection: Scalars['DisplayString'];
}

export interface InstantSearchResult {
  __typename?: 'InstantSearchResult';
  corrections: Array<InstantSearchCorrection>;
  products: Array<Product>;
  suggestedSearchQueries: Array<Scalars['DisplayString']>;
}

export interface LocalizedString {
  __typename?: 'LocalizedString';
  key: Scalars['String'];
  location: LocalizedStringLocation;
  value: Scalars['DisplayString'];
}

export type LocalizedStringLocation =
  | 'GLOBAL'
  | 'LANGUAGE'
  | 'LOCALE'
  | 'SITE'
  | 'SITE_AND_LANGUAGE'
  | 'SITE_AND_LOCALE';

export interface LoginAndApproveSocialLinkInput {
  verificationToken: Scalars['String'];
}

export interface LoginInput {
  password: Scalars['String'];
  username: Scalars['String'];
}

export interface LoyaltyHubBirthdayGift extends Widget {
  __typename?: 'LoyaltyHubBirthdayGift';
  banner?: Maybe<Scalars['URL']>;
  customerLists?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  formInstruction?: Maybe<Scalars['String']>;
  giftActive?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  modalHeading?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
  userNotification?: Maybe<Scalars['String']>;
}

export interface LoyaltyHubTier extends Widget {
  __typename?: 'LoyaltyHubTier';
  banner?: Maybe<Scalars['URL']>;
  bannerAlt?: Maybe<Scalars['String']>;
  hidden?: Maybe<Scalars['String']>;
  iconType?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  rewardListText1?: Maybe<Scalars['String']>;
  rewardListText2?: Maybe<Scalars['String']>;
  rewardListText3?: Maybe<Scalars['String']>;
  rewardListText4?: Maybe<Scalars['String']>;
  rewardListText5?: Maybe<Scalars['String']>;
  rewardsHeader?: Maybe<Scalars['String']>;
  textPart1?: Maybe<Scalars['String']>;
  textPart2?: Maybe<Scalars['String']>;
  textPart3?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface LoyaltyRewardTier extends Widget {
  __typename?: 'LoyaltyRewardTier';
  id: Scalars['ID'];
  query: Query;
  tierListItem1?: Maybe<Scalars['String']>;
  tierListItem2?: Maybe<Scalars['String']>;
  tierListItem3?: Maybe<Scalars['String']>;
  tierListItem4?: Maybe<Scalars['String']>;
  tierListItem5?: Maybe<Scalars['String']>;
  tierName?: Maybe<Scalars['String']>;
  tierRange?: Maybe<Scalars['String']>;
  tierType?: Maybe<Scalars['String']>;
}

export interface LoyaltyRewardTiers extends Widget {
  __typename?: 'LoyaltyRewardTiers';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface MailingList extends Widget {
  __typename?: 'MailingList';
  buttonText?: Maybe<Scalars['String']>;
  campaignCode?: Maybe<Scalars['ID']>;
  dropdownAnswer1?: Maybe<Scalars['String']>;
  dropdownAnswer2?: Maybe<Scalars['String']>;
  dropdownAnswer3?: Maybe<Scalars['String']>;
  dropdownAnswer4?: Maybe<Scalars['String']>;
  dropdownAnswer5?: Maybe<Scalars['String']>;
  dropdownAnswer6?: Maybe<Scalars['String']>;
  dropdownAnswer7?: Maybe<Scalars['String']>;
  dropdownAnswer8?: Maybe<Scalars['String']>;
  dropdownAnswer9?: Maybe<Scalars['String']>;
  dropdownAnswer10?: Maybe<Scalars['String']>;
  dropdownAnswerPlaceholder?: Maybe<Scalars['String']>;
  dropdownAnswerQuestionText?: Maybe<Scalars['String']>;
  emailLabelText?: Maybe<Scalars['String']>;
  emailPlaceholderText?: Maybe<Scalars['String']>;
  enableDropdownAnswerField?: Maybe<Scalars['String']>;
  enableNameField?: Maybe<Scalars['String']>;
  enableSignUp?: Maybe<Scalars['String']>;
  enablefreeAnswerField?: Maybe<Scalars['String']>;
  errorReturnUrl?: Maybe<Scalars['String']>;
  freeAnswerQuestionText?: Maybe<Scalars['String']>;
  fullNameLabelText?: Maybe<Scalars['String']>;
  fullNamePlaceholderText?: Maybe<Scalars['String']>;
  gdprDisclaimerText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  registeredReturnUrl?: Maybe<Scalars['String']>;
  signUpText?: Maybe<Scalars['String']>;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface MarkDiscussionMessagesAsReadInput {
  discussionId: Scalars['ID'];
  upToMessageId: Scalars['ID'];
}

export type MarketingConsent =
  | 'DOES_NOT_RECEIVE_MARKETING_MATERIAL'
  | 'RECEIVES_MARKETING_MATERIAL';

export interface MarketingConsentAuditData {
  /** An identifier of the form being submitted */
  formIdentifier: Scalars['String'];
  /** A string that identifies where on site the opt-in was displayed, such as a URL */
  formLocation: Scalars['String'];
  /** The message shown to the user for marketing consent, either as plaintext, or HTML. */
  messageShown: Scalars['String'];
}

export type MarketingConsentPreference =
  | 'I_CONSENT_TO_RECEIVING_MARKETING_MATERIAL'
  | 'I_DO_NOT_CONSENT_TO_RECEIVING_MARKETING_MATERIAL'
  | 'KEEP_EXISTING_MARKETING_PREFERENCES';

export interface MarketingPreferences {
  __typename?: 'MarketingPreferences';
  marketingConsent: MarketingConsent;
  registered: Scalars['Boolean'];
  type: MarketingType;
}

export interface MarketingPreferencesInput {
  type: MarketingType;
  username: Scalars['String'];
}

export type MarketingType =
  | 'EMAIL'
  | 'SMS';

export interface MoneyValue {
  __typename?: 'MoneyValue';
  /** A string containing a decimal number, to avoid rounding and precision issues */
  amount: Scalars['String'];
  currency: Currency;
  /** A fully formatted string for displaying this amount of money in HTML. e.g "&#163;76.49" */
  displayValue: Scalars['String'];
  scalarValue: Scalars['Money'];
}

export interface MultipleCtaBanner extends Widget {
  __typename?: 'MultipleCTABanner';
  altImageLarge?: Maybe<Scalars['String']>;
  altLogoPng?: Maybe<Scalars['String']>;
  bannerURL?: Maybe<Scalars['String']>;
  contentBoxPosition?: Maybe<Scalars['String']>;
  contentTheme?: Maybe<Scalars['String']>;
  ctaOne?: Maybe<Scalars['String']>;
  ctaOneURL?: Maybe<Scalars['String']>;
  ctaTwo?: Maybe<Scalars['String']>;
  ctaTwoURL?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageLarge?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  logopngImageBG?: Maybe<Scalars['URL']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  /**
   * Adds a new address based on the given input.
   * Requires Authentication.
   */
  addAddress: Scalars['ID'];
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   * @deprecated Use addProductsToBasket instead
   */
  addProductToBasket: Basket;
  addProductToWishlist?: Maybe<Scalars['Boolean']>;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  addProductsToBasket: Basket;
  addReview?: Maybe<AddReviewResponse>;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  addSelectYourSampleProductToBasket: Basket;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  applyCodeToBasket: Basket;
  approveSocialLink?: Maybe<Scalars['Boolean']>;
  /** Cancels an entire order, if it is cancellable. */
  cancelOrder?: Maybe<Scalars['Void']>;
  /** Partially cancels an order. Cannot be used to cancel OrderProducts which are in a special offer group. */
  cancelOrderProducts?: Maybe<Scalars['Void']>;
  /** Partially cancels an order, cancelling entire special offer groups. */
  cancelOrderSpecialOfferGroups?: Maybe<Scalars['Void']>;
  check?: Maybe<Scalars['String']>;
  checkout?: Maybe<CheckoutStartResponse>;
  /**
   * Requires authentication
   * Returns the id of the newly created messaged
   * New discussions
   */
  createDiscussion: Scalars['ID'];
  /**
   * Deletes the address with the given ID if it exists.
   * Requires Authentication.
   */
  deleteAddress?: Maybe<Scalars['Void']>;
  deletePaymentCard?: Maybe<Scalars['Void']>;
  deleteProfileSubmission?: Maybe<Scalars['Void']>;
  /**
   * Causes a PasswordResetToken to be sent to the user's email address, if an account exists with the given username.
   *
   * The PasswordResetToken from the email can be used with the resetPassword mutation.
   */
  forgottenPassword?: Maybe<ForgottenPasswordResponse>;
  guestCheckoutWithoutEmail?: Maybe<CheckoutStartResponse>;
  /** Perform an impersonate login (e.g. for Customer Services agents) using a token previously obtained by other means. */
  impersonateLogin?: Maybe<AuthenticationResponse>;
  login?: Maybe<AuthenticationResponse>;
  loginAndApproveSocialLink?: Maybe<AuthenticationResponse>;
  logout?: Maybe<Scalars['Void']>;
  /**
   * Requires authentication
   * If there are newer messages than the provided message ID, the discussion stays unread, preventing an unseen
   * message from being unknowingly marked as read
   */
  markDiscussionMessagesAsRead?: Maybe<Scalars['Void']>;
  /**
   * Registration forms can be dynamic. To get the exact fields and options required to register for a site, query the forms API with
   * the identifier ACCOUNT_CREATION. If this doesn't exist, the fields are static and visible in the RegistrationInput type.
   */
  register: AuthenticationResponse;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  removeCodeFromBasket: Basket;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  removeProductFromBasket: Basket;
  removeProductFromWishlist?: Maybe<Scalars['Boolean']>;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  removeSelectYourSampleProductFromBasket: Basket;
  removeSocialLink?: Maybe<Scalars['Boolean']>;
  /**
   * Deletes the address with the given ID if it exists.
   * And adds a new address based on the given input and returns the ID of the new address.
   * This does not update the address with the given ID.
   * Requires Authentication.
   */
  replaceAddress: Scalars['ID'];
  /**
   * Requires authentication
   * Returns the id of the newly created message
   */
  replyToDiscussion: Scalars['ID'];
  reportReview?: Maybe<ReviewActionResult>;
  /**
   * Causes a PasswordResetToken to be sent to the user's email address.  The email's wording is different, as this is
   * intended to be used for accounts which do not already have a password (such as Wechat social accounts)
   *
   * The PasswordResetToken from the email can be used with the resetPassword mutation.
   */
  requestSetPasswordEmail?: Maybe<RequestSetPasswordEmailResponse>;
  /** The following endpoints handle the approving of a link between a Social User and a Customer on this site. */
  requestSocialLinkVerificationEmail?: Maybe<RequestSocialLinkVerificationEmailResponse>;
  resetPassword?: Maybe<AuthenticationResponse>;
  resolveOrderPaymentProblem?: Maybe<CheckoutStartResponse>;
  sendReferralEmail?: Maybe<Scalars['Void']>;
  signUpForEmailMarketingCampaign?: Maybe<Scalars['Void']>;
  /** Sign up for email or SMS marketing without the requirement to be logged in */
  signUpForMarketing?: Maybe<Scalars['Void']>;
  signUpForPushNotifications?: Maybe<PushSubscriptionResponse>;
  /**
   * Attempts to log you into the website using the SocialAuthenticationToken returned from Social Login Service
   * or the token returned from a previous attempt to log in.
   *
   * socialAuthenticationToken and missingInformation should be considered deprecated andwill be removed in due course.
   * Please only submit the SocialLoginInput object
   */
  socialLogin?: Maybe<SocialAuthenticationResponse>;
  submitProfile?: Maybe<FormSubmissionResponse>;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   * Provide the item id of the product to be supersized (must be supersizable) and it will be added to the basket and the current product removed.
   */
  supersizeProductInBasket: Basket;
  testCheckout?: Maybe<Scalars['String']>;
  testGuestCheckout?: Maybe<Scalars['String']>;
  testGuestCheckoutWithoutEmail?: Maybe<Scalars['String']>;
  unlinkAccounts?: Maybe<Scalars['Boolean']>;
  unsubscribeMarketing?: Maybe<Scalars['Void']>;
  unsubscribeSmsMarketing?: Maybe<Scalars['Boolean']>;
  /** See the Form from the `accountSettingsForm` query */
  updateAccountSettings: AccountUpdateStatus;
  /** @deprecated Use updateAccountSettings instead */
  updateDateOfBirth: AccountUpdateStatus;
  updateEmailAddress: AccountUpdateStatus;
  updateMarketingPreferences?: Maybe<UpdateMarketingPreferencesResponse>;
  /** @deprecated Use updateAccountSettings instead */
  updateMobilePhoneNumber: AccountUpdateStatus;
  /** @deprecated Use updateAccountSettings instead */
  updateName: AccountUpdateStatus;
  updatePassword: PasswordUpdateStatus;
  /**
   * If a null basketId is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  updateProductQuantityInBasket: Basket;
  voteReviewNegative?: Maybe<ReviewActionResult>;
  voteReviewPositive?: Maybe<ReviewActionResult>;
}


export interface MutationAddAddressArgs {
  input: AddressInput;
}


export interface MutationAddProductToBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  quantity: Scalars['Int'];
  settings: SessionSettings;
  sku: Scalars['SKU'];
}


export interface MutationAddProductToWishlistArgs {
  sku: Scalars['SKU'];
}


export interface MutationAddProductsToBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  items: Array<AddProductToBasketItem>;
  settings: SessionSettings;
}


export interface MutationAddReviewArgs {
  input: AddReviewInput;
}


export interface MutationAddSelectYourSampleProductToBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  selectYourSampleId: Scalars['ID'];
  settings: SessionSettings;
  sku?: InputMaybe<Scalars['SKU']>;
  tierId: Scalars['ID'];
}


export interface MutationApplyCodeToBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  code: Scalars['String'];
  settings: SessionSettings;
}


export interface MutationApproveSocialLinkArgs {
  input?: InputMaybe<ApproveSocialLinkInput>;
}


export interface MutationCancelOrderArgs {
  input: CancelOrderInput;
}


export interface MutationCancelOrderProductsArgs {
  input: CancelOrderProductsInput;
}


export interface MutationCancelOrderSpecialOfferGroupsArgs {
  input: CancelOrderSpecialOfferGroupsInput;
}


export interface MutationCheckoutArgs {
  input: CheckoutStartInput;
}


export interface MutationCreateDiscussionArgs {
  input: CreateDiscussionInput;
}


export interface MutationDeleteAddressArgs {
  id: Scalars['ID'];
}


export interface MutationDeletePaymentCardArgs {
  cardId: Scalars['ID'];
}


export interface MutationDeleteProfileSubmissionArgs {
  submissionId: Scalars['ID'];
}


export interface MutationForgottenPasswordArgs {
  input: ForgottenPasswordInput;
}


export interface MutationGuestCheckoutWithoutEmailArgs {
  input: CheckoutStartInput;
}


export interface MutationImpersonateLoginArgs {
  impersonationToken: Scalars['String'];
}


export interface MutationLoginArgs {
  input: LoginInput;
}


export interface MutationLoginAndApproveSocialLinkArgs {
  input: LoginAndApproveSocialLinkInput;
}


export interface MutationMarkDiscussionMessagesAsReadArgs {
  input?: InputMaybe<MarkDiscussionMessagesAsReadInput>;
}


export interface MutationRegisterArgs {
  input: RegistrationInput;
}


export interface MutationRemoveCodeFromBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  settings: SessionSettings;
}


export interface MutationRemoveProductFromBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  itemId: Scalars['ID'];
  settings: SessionSettings;
}


export interface MutationRemoveProductFromWishlistArgs {
  sku: Scalars['SKU'];
}


export interface MutationRemoveSelectYourSampleProductFromBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  selectYourSampleId: Scalars['ID'];
  settings: SessionSettings;
  sku?: InputMaybe<Scalars['SKU']>;
  tierId: Scalars['ID'];
}


export interface MutationRemoveSocialLinkArgs {
  input?: InputMaybe<RemoveSocialLinkInput>;
}


export interface MutationReplaceAddressArgs {
  input: ReplaceAddressInput;
}


export interface MutationReplyToDiscussionArgs {
  discussionId: Scalars['ID'];
  input: AddDiscussionMessageInput;
}


export interface MutationReportReviewArgs {
  input: ReviewVotingInput;
}


export interface MutationRequestSetPasswordEmailArgs {
  input: RequestSetPasswordEmailInput;
}


export interface MutationRequestSocialLinkVerificationEmailArgs {
  input: RequestSocialLinkVerificationEmailInput;
}


export interface MutationResetPasswordArgs {
  input: ResetPasswordInput;
}


export interface MutationResolveOrderPaymentProblemArgs {
  orderNumber: Scalars['OrderNumber'];
}


export interface MutationSendReferralEmailArgs {
  emailAddresses: Array<Scalars['String']>;
}


export interface MutationSignUpForEmailMarketingCampaignArgs {
  input: SignUpForEmailMarketingCampaignInput;
}


export interface MutationSignUpForMarketingArgs {
  input: SignUpForMarketingInput;
}


export interface MutationSignUpForPushNotificationsArgs {
  input: PushSubscriptionInput;
}


export interface MutationSocialLoginArgs {
  input?: InputMaybe<SocialLoginInput>;
  missingInformation?: InputMaybe<SocialLoginMissingInformation>;
  socialAuthenticationToken?: InputMaybe<Scalars['SocialAuthenticationToken']>;
}


export interface MutationSubmitProfileArgs {
  input: FormSubmissionInput;
}


export interface MutationSupersizeProductInBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  itemId: Scalars['ID'];
  settings: SessionSettings;
}


export interface MutationTestCheckoutArgs {
  input: TestCheckoutStartInput;
}


export interface MutationTestGuestCheckoutArgs {
  input: TestGuestCheckoutStartInput;
}


export interface MutationTestGuestCheckoutWithoutEmailArgs {
  input: TestCheckoutStartInput;
}


export interface MutationUnsubscribeMarketingArgs {
  input: TokenMarketingInput;
}


export interface MutationUnsubscribeSmsMarketingArgs {
  phoneNumber: Scalars['String'];
}


export interface MutationUpdateAccountSettingsArgs {
  input: Array<SettingsFieldInput>;
}


export interface MutationUpdateDateOfBirthArgs {
  changes: UpdateDateOfBirthInput;
}


export interface MutationUpdateEmailAddressArgs {
  changes: UpdateEmailAddressInput;
}


export interface MutationUpdateMarketingPreferencesArgs {
  input: UpdateMarketingPreferencesInput;
}


export interface MutationUpdateMobilePhoneNumberArgs {
  changes: UpdateMobilePhoneNumberInput;
}


export interface MutationUpdateNameArgs {
  changes: UpdateNameInput;
}


export interface MutationUpdatePasswordArgs {
  changes: UpdatePasswordInput;
}


export interface MutationUpdateProductQuantityInBasketArgs {
  basketId?: InputMaybe<Scalars['ID']>;
  itemId: Scalars['ID'];
  quantity: Scalars['Int'];
  settings: SessionSettings;
}


export interface MutationVoteReviewNegativeArgs {
  input: ReviewVotingInput;
}


export interface MutationVoteReviewPositiveArgs {
  input: ReviewVotingInput;
}

export interface Navigation {
  __typename?: 'Navigation';
  topLevel: Array<NavigationItem>;
}

export interface NavigationItem {
  __typename?: 'NavigationItem';
  displayName: Scalars['DisplayString'];
  iconName?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  link?: Maybe<Hyperlink>;
  subNavigation?: Maybe<Array<NavigationItem>>;
  /** Null if only a heading */
  type: NavigationItemType;
}

export type NavigationItemType =
  /**
   * This navigation item can only appear at the top level.  This navigation item can have no
   * children.  When hovered over in the top-level nav,  this item should cause a new menu to
   * appear below it.  This menu contains a brand selector.  This contains a list of brands in
   * alphabetical order, each acting as a link to the brand's landing page.  At the top of the menu
   * should be buttons for each letter of the alphabet, with the menu only showing brands that begin
   * with the selected letter.
   *
   * The brands can be accessed via the `brands` query.
   *
   * For an example, see the documentation
   */
  | 'BRANDS'
  /**
   * This navigation item can only appear at the second level, and only on the alternative navigation
   * display.  The detached navigation type is used where a separate section of the navigation tree
   * breaks off from the core tree at the second level, appearing to the right of its sibling items,
   * creating its own navigation tree.
   *
   * For an example, see the documentation
   */
  | 'DETACHED'
  /**
   * This navigation item can only appear at the second level.  This type is used where a separate
   * section of the navigation tree breaks off from an existing TEXT tree.  This navigation item
   * appears to the left of all of the other sibling items.  This item is rendered as a list of its
   * children, with no header.
   *
   * For an example, see the documentation
   */
  | 'FEATURED'
  /**
   * This navigation item can only appear at the top level.  The children of this navigation item
   * should each be displayed as a box with a large central image, with bold text below it.
   *
   * For an example, see the documentation
   */
  | 'IMAGE_CARD'
  /**
   * Depending on platform and level, render as either a simple text link, a list of links containing
   * its children, a top-level button which causes its children to appear below when hovered over, or
   * a button which causes the children to open over the current nav as a new panel when tapped.
   *
   * For examples of each of these states, see the documentation.
   */
  | 'TEXT'
  /**
   * This navigation item can only appear at the top level.  The children of this navigation item
   * should each be displayed as a box with bold text in it.  On mobile apps, this should render the
   * same as TEXT.
   *
   * For an example, see the documentation.
   */
  | 'TEXT_CARD'
  /**
   * This navigation item can only appear at the top level.  The children of this navigation item
   * should each be displayed as a box with bold text in it, with an image to the left, if one is
   * provided.  If no image is provided, this should render the same as TEXT_CARD.
   *
   * For an example, see the documentation.
   */
  | 'THUMBNAIL_CARD'
  /**
   * This navigation item signifies that at least one of the children of this item will be of type DETACHED.
   * This allows the client to render a different view without needing to traverse all children of a top
   * level item to check for a child of type DETACHED to know whether to render a special view that
   * supports the detached sections.
   *
   * For an example, see the documentation
   */
  | 'WATERFALL';

export interface OptInForm {
  __typename?: 'OptInForm';
  showForm: Scalars['Boolean'];
}

/** A single choice for a single option, such as "Chocolate" for the "Flavour" option. */
export interface OptionChoice {
  __typename?: 'OptionChoice';
  colour?: Maybe<Scalars['Colour']>;
  key: Scalars['String'];
  optionKey: Scalars['String'];
  title: Scalars['String'];
}

export interface Order {
  __typename?: 'Order';
  cancellable: Scalars['Boolean'];
  /** This is when the order is created and the payment taken */
  createdAt: Scalars['Timestamp'];
  deliveryAddress?: Maybe<Address>;
  deliveryCost?: Maybe<MoneyValue>;
  denialOfReceiptForm: Scalars['URL'];
  discounts?: Maybe<Array<OrderDiscount>>;
  /**
   * Returns a paginated list of discussions associated with this order.
   *
   * Equivalent to querying Customer.discussions with an order number filter
   */
  discussions?: Maybe<Discussions>;
  /** If the order has been dispatched, this is the dispatched time */
  dispatchedAt?: Maybe<Scalars['Timestamp']>;
  eligibleForSelfServiceDenialOfReceipt?: Maybe<Scalars['Boolean']>;
  orderNumber: Scalars['OrderNumber'];
  paymentCard?: Maybe<PaymentCard>;
  paymentType?: Maybe<Scalars['String']>;
  products: Array<OrderProduct>;
  status: OrderStatus;
  totalCost: MoneyValue;
  totalQuantity: Scalars['Int'];
}


export interface OrderDiscussionsArgs {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}

export type OrderCancellationReason =
  | 'AMENDMENTS_NEEDED'
  | 'DISCOUNT_CODE_ISSUE'
  | 'DUPLICATE_ORDER'
  | 'FOUND_CHEAPER_ELSEWHERE'
  | 'NO_LONGER_REQUIRED'
  | 'ORDERED_WRONG_ITEM'
  | 'WAITED_TOO_LONG';

export interface OrderDiscount {
  __typename?: 'OrderDiscount';
  amount: MoneyValue;
  message?: Maybe<Scalars['DisplayString']>;
}

export interface OrderProduct {
  __typename?: 'OrderProduct';
  cancellable: Scalars['Boolean'];
  cancellableQuantity?: Maybe<Scalars['Int']>;
  cancelledQuantity?: Maybe<Scalars['Int']>;
  costPerUnit?: Maybe<MoneyValue>;
  deliveryDateRange?: Maybe<DateRange>;
  deliveryMethod?: Maybe<Scalars['DeliveryMethod']>;
  /** For order products which are not yet dispatched, this is the estimated date */
  dispatchDate?: Maybe<Scalars['Date']>;
  dispatchedQuantity?: Maybe<Scalars['Int']>;
  /** The named-day delivery date as entered on checkout */
  namedDeliveryDate?: Maybe<Scalars['Date']>;
  pendingCancelQuantity?: Maybe<Scalars['Int']>;
  pendingRefundQuantity?: Maybe<Scalars['Int']>;
  pendingReplaceQuantity?: Maybe<Scalars['Int']>;
  productVariant?: Maybe<ProductVariant>;
  /**
   * The total requested quantity of this product in the order.
   *
   * This is unaffected by the status of the individual items (such as cancellation or refunds)
   */
  quantity?: Maybe<Scalars['Int']>;
  refundedQuantity?: Maybe<Scalars['Int']>;
  replacementQuantity?: Maybe<Scalars['Int']>;
  /** If the product is no longer visible, sku will be non-null while product is null */
  sku: Scalars['SKU'];
  /**
   * Products that are in a special offer group can only be cancelled as part of that group, and should be displayed
   * together in the cancellation UI
   */
  specialOfferGroup?: Maybe<Scalars['SpecialOfferGroup']>;
  status?: Maybe<OrderStatus>;
  trackingUrls?: Maybe<Array<Scalars['URL']>>;
}

export type OrderQueryStatusFilter =
  /** The order has reached a terminal state, i.e. it has been dispatched or cancelled. */
  | 'COMPLETED'
  /** The order has been dispatched (currently the final state). Can be used to show all successful orders that are completed. */
  | 'DISPATCHED'
  /** The order has not reached a terminal state, i.e. processing, payment problem etc. */
  | 'OUTSTANDING';

export type OrderStatus =
  | 'CANCELLED'
  | 'DISPATCHED'
  | 'ORDER_PLACED'
  | 'PAYMENT_PROBLEM'
  | 'PROCESSING';

export interface Orders {
  __typename?: 'Orders';
  hasMore: Scalars['Boolean'];
  orders: Array<Order>;
  total?: Maybe<Scalars['Int']>;
}

export interface OrdersFilterInput {
  orderNumber?: InputMaybe<Scalars['OrderNumber']>;
  status?: InputMaybe<OrderQueryStatusFilter>;
}

export interface Page {
  __typename?: 'Page';
  alternateLinks: Array<PageAlternateLink>;
  breadcrumbs: Array<Breadcrumb>;
  flattenedChildWidgets?: Maybe<Array<Widget>>;
  metaDescription?: Maybe<Scalars['String']>;
  metaSearchKeywords: Array<Scalars['String']>;
  path: Scalars['PagePath'];
  title: Scalars['DisplayString'];
  widget?: Maybe<Widget>;
  widgets?: Maybe<Array<Widget>>;
}


export interface PageWidgetArgs {
  id: Scalars['ID'];
}

export interface PageAlternateLink {
  __typename?: 'PageAlternateLink';
  locale: Scalars['Locale'];
  pagePath: Scalars['PagePath'];
}

export type PasswordResetTokenState =
  | 'ALREADY_USED'
  | 'EXPIRED'
  | 'INVALID'
  | 'VALID';

export interface PasswordUpdateStatus {
  __typename?: 'PasswordUpdateStatus';
  error?: Maybe<AuthenticationError>;
  fieldErrors?: Maybe<Array<Maybe<FormFieldValidationError>>>;
}

export interface PaymentCard {
  __typename?: 'PaymentCard';
  issueNumber?: Maybe<Scalars['String']>;
  nameOnCard: Scalars['String'];
  obfuscatedCardNumber: Scalars['String'];
  type?: Maybe<PaymentCardType>;
  validFromMonth?: Maybe<Scalars['Month']>;
  validFromYear?: Maybe<Scalars['Year']>;
  validToMonth: Scalars['Month'];
  validToYear: Scalars['Year'];
}

export interface PaymentCardRecord {
  __typename?: 'PaymentCardRecord';
  card: PaymentCard;
  id: Scalars['ID'];
}

export type PaymentCardType =
  | 'AMERICAN_EXPRESS'
  | 'JCB'
  | 'MAESTRO'
  | 'MASTERCARD'
  | 'SOLO'
  | 'VISA';

export interface PaymentCards {
  __typename?: 'PaymentCards';
  cards: Array<PaymentCardRecord>;
  hasMore: Scalars['Boolean'];
  total: Scalars['Int'];
}

export interface PaymentCardsFilterInput {
  id?: InputMaybe<Scalars['ID']>;
}

export type PaymentMethod =
  | 'AFTER_PAY'
  | 'ALI_PAY'
  | 'AMERICAN_EXPRESS'
  | 'APPLE_PAY'
  | 'ARVATO'
  | 'BANCONTACT'
  | 'CLEAR_PAY'
  | 'DINERS_CLUB'
  | 'DISCOVER'
  | 'ELO'
  | 'GIRO_PAY'
  | 'GOOGLE_PAY'
  | 'HIPER'
  | 'HUMM'
  | 'IDEAL'
  | 'INTERAC'
  | 'JCB'
  | 'KCP'
  | 'KLARNA'
  | 'LAYBUY'
  | 'MAESTRO'
  | 'MASTERCARD'
  | 'MODE'
  | 'MOL_PAY'
  | 'MULTIBANCO'
  | 'ONE4ALL'
  | 'OPEN_PAY'
  | 'PAYPAL'
  | 'PAYPAL_IN_3'
  | 'PAYTM'
  | 'PAYVYNE'
  | 'PRIMEIRO_PAY'
  | 'QIWI_WALLET'
  | 'QUADPAY'
  | 'RUPAY'
  | 'SEPA'
  | 'SEZZLE'
  | 'SOFORT'
  | 'SOLO'
  | 'SPLIT_IT'
  | 'TENPAY'
  | 'TRUSTLY'
  | 'TRUST_PAY'
  | 'UNION'
  | 'VISA_CREDIT'
  | 'VISA_DEBIT'
  | 'VISA_ELECTRON'
  | 'WEB_MONEY'
  | 'WECHAT'
  | 'YANDEX'
  | 'ZIP_PAY';

export interface PaymentOption {
  option: Scalars['String'];
  subOption?: InputMaybe<Scalars['String']>;
}

export interface Product {
  __typename?: 'Product';
  alternateLinks: Array<AlternateLink>;
  associatedProducts?: Maybe<Array<Product>>;
  brand?: Maybe<Brand>;
  breadcrumbs?: Maybe<Array<Breadcrumb>>;
  cheapestVariantPrice?: Maybe<ProductPrice>;
  content: Array<ProductContentItem>;
  defaultVariant?: Maybe<ProductVariant>;
  images: Array<ProductImage>;
  /**
   * True if the wishlist contains this product with no selected variant,
   * if a variant is selected, the inWishlist flag on the variant will be true instead.
   */
  inWishlist?: Maybe<Scalars['Boolean']>;
  /** A marketed special offer to display on search results and product lists. */
  marketedSpecialOffer?: Maybe<ProductMarketedSpecialOffer>;
  options: Array<VariantOption>;
  /** (e.g. "DVD" or "Blu-Ray") */
  platform?: Maybe<Scalars['DisplayString']>;
  preorder: Scalars['Boolean'];
  preorderReleaseDate?: Maybe<Scalars['Date']>;
  recommendations?: Maybe<Array<Product>>;
  reviews?: Maybe<ProductReviews>;
  /** As a dynamic content */
  sizeGuide?: Maybe<RichContent>;
  sku: Scalars['SKU'];
  title: Scalars['String'];
  /** In the format '/sports-nutrition/impact-whey-protein/10530943.html' */
  url: Scalars['URL'];
  variants: Array<ProductVariant>;
}


export interface ProductCheapestVariantPriceArgs {
  currency: Currency;
  shippingDestination: Country;
}


export interface ProductContentArgs {
  keys?: InputMaybe<Array<Scalars['String']>>;
}


export interface ProductDefaultVariantArgs {
  options: VariantOptions;
}


export interface ProductImagesArgs {
  limit?: Scalars['Int'];
}


export interface ProductRecommendationsArgs {
  limit?: Scalars['Int'];
  type: ProductRecommendationType;
}

export interface ProductContentIntListValue {
  __typename?: 'ProductContentIntListValue';
  value: Array<Scalars['Int']>;
}

export interface ProductContentIntValue {
  __typename?: 'ProductContentIntValue';
  value: Scalars['Int'];
}

export interface ProductContentItem {
  __typename?: 'ProductContentItem';
  key: Scalars['String'];
  value: ProductContentValue;
}

export interface ProductContentRichContentListValue {
  __typename?: 'ProductContentRichContentListValue';
  value: Array<RichContent>;
}

export interface ProductContentRichContentValue {
  __typename?: 'ProductContentRichContentValue';
  value: RichContent;
}

export interface ProductContentStringListValue {
  __typename?: 'ProductContentStringListValue';
  value: Array<Scalars['String']>;
}

export interface ProductContentStringValue {
  __typename?: 'ProductContentStringValue';
  value: Scalars['String'];
}

export type ProductContentValue = ProductContentIntListValue | ProductContentIntValue | ProductContentRichContentListValue | ProductContentRichContentValue | ProductContentStringListValue | ProductContentStringValue;

export interface ProductImage {
  __typename?: 'ProductImage';
  /** 300x300 Pixel Image */
  largeProduct?: Maybe<Scalars['URL']>;
  /** Unaltered version of image uploaded to our system */
  original?: Maybe<Scalars['URL']>;
  /** 70x70 Pixel Image */
  thumbnail?: Maybe<Scalars['URL']>;
  /** 960x960 Pixel Image */
  zoom?: Maybe<Scalars['URL']>;
}

export interface ProductList {
  __typename?: 'ProductList';
  /**
   * If this is non-null, 0 results were found, but results were found for a similar query,
   * which was returned instead.
   */
  correctedQuery?: Maybe<Scalars['DisplayString']>;
  facets: Array<Facet>;
  hasMore: Scalars['Boolean'];
  products: Array<Product>;
  total: Scalars['Int'];
}

export interface ProductListInput {
  barcode?: InputMaybe<Scalars['String']>;
  concessionCode?: InputMaybe<Scalars['String']>;
  currency: Currency;
  facets: Array<FacetInput>;
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  shippingDestination: Country;
  sort?: ProductSort;
}

export interface ProductListWidget extends Widget {
  __typename?: 'ProductListWidget';
  descriptionHtml?: Maybe<RichContent>;
  id: Scalars['ID'];
  productList?: Maybe<ProductList>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}


export interface ProductListWidgetProductListArgs {
  input: ProductListInput;
}

export interface ProductMarketedSpecialOffer {
  __typename?: 'ProductMarketedSpecialOffer';
  description?: Maybe<RichContent>;
  /** This will only be non-null when the best special offer for this product is a free gift offer */
  freeGiftProduct?: Maybe<ProductVariant>;
  landingPageLink?: Maybe<Hyperlink>;
  title?: Maybe<RichContent>;
}

export interface ProductPrice {
  __typename?: 'ProductPrice';
  price: MoneyValue;
  rrp: MoneyValue;
}

export type ProductRecommendationType =
  /**
   * This looks at what products other customers added to their basket when browsing the product(s)
   * currently being viewed. If the probability of adding a particular product to basket is high
   * then that's what will be recommended.
   */
  | 'CUSTOMERS_EVENTUALLY_BOUGHT'
  | 'FREQUENTLY_BOUGHT_TOGETHER'
  | 'PERSONALISED'
  | 'POST_ADD_TO_BASKET'
  /**
   * This returns products of a similar category that are in stock. This is used on THG sites
   * to suggest other products to a customer when the product they are viewing is out of stock.
   */
  | 'SIMILAR_PRODUCTS';

export interface ProductReviews {
  __typename?: 'ProductReviews';
  averageScore: Scalars['Float'];
  count1Score: Scalars['Int'];
  count2Score: Scalars['Int'];
  count3Score: Scalars['Int'];
  count4Score: Scalars['Int'];
  count5Score: Scalars['Int'];
  maxScore: Scalars['Float'];
  /** @deprecated Field still valid. SKU no longer required as input as the SKU of the product this is attached to will be used */
  newReviewForm?: Maybe<Form>;
  reviews?: Maybe<Reviews>;
  total: Scalars['Int'];
}


export interface ProductReviewsNewReviewFormArgs {
  sku?: InputMaybe<Scalars['SKU']>;
}


export interface ProductReviewsReviewsArgs {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
  sort?: ReviewSort;
}

export type ProductSort =
  | 'DISCOUNT_PERCENTAGE_HIGH_TO_LOW'
  | 'NAME_ALPHABETICALLY'
  | 'NEWEST_TO_OLDEST'
  | 'POPULARITY'
  | 'PRICE_HIGH_TO_LOW'
  | 'PRICE_LOW_TO_HIGH'
  | 'RELEVANCE';

export interface ProductUnit {
  __typename?: 'ProductUnit';
  /** E.g. "kg" in 5 kg or "servings" in 35 servings */
  unit: Scalars['String'];
  /** E.g. "5" in 5 kg or "35" in 35 servings */
  value: Scalars['String'];
}

export interface ProductVariant {
  __typename?: 'ProductVariant';
  availabilityMessage: Scalars['DisplayString'];
  buyNowPayLaterProviders?: Maybe<Array<BuyNowPayLaterProvider>>;
  choices: Array<OptionChoice>;
  content: Array<ProductContentItem>;
  images: Array<ProductImage>;
  inStock: Scalars['Boolean'];
  inWishlist?: Maybe<Scalars['Boolean']>;
  /** A marketed special offer to display on product pages. */
  marketedSpecialOffer?: Maybe<ProductMarketedSpecialOffer>;
  maxPerOrder?: Maybe<Scalars['Int']>;
  price?: Maybe<ProductPrice>;
  /**
   * The main product which includes this variant.
   * May not necessarily be the product under which this was queried.
   */
  product?: Maybe<Product>;
  sku: Scalars['SKU'];
  supersize?: Maybe<Supersize>;
  /** @deprecated Use supersize -> variant instead */
  supersizeVariant?: Maybe<ProductVariant>;
  title: Scalars['String'];
}


export interface ProductVariantBuyNowPayLaterProvidersArgs {
  settings: SessionSettings;
}


export interface ProductVariantContentArgs {
  keys?: InputMaybe<Array<Scalars['String']>>;
}


export interface ProductVariantImagesArgs {
  limit?: Scalars['Int'];
}


export interface ProductVariantPriceArgs {
  currency: Currency;
  shippingDestination: Country;
}


export interface ProductVariantSupersizeArgs {
  settings: SessionSettings;
}

export interface PushSubscriptionInput {
  deviceUuid?: InputMaybe<Scalars['String']>;
  externalDeviceId?: InputMaybe<Scalars['String']>;
  subscribed: Scalars['Boolean'];
  subscriptionToken: Scalars['String'];
  tokenType: PushTokenType;
}

export interface PushSubscriptionResponse {
  __typename?: 'PushSubscriptionResponse';
  deviceUuid?: Maybe<Scalars['String']>;
}

export type PushTokenType =
  | 'APNS'
  | 'FIREBASE';

export interface Query {
  __typename?: 'Query';
  accountCreationForm: Form;
  accountCreationMarketingPreferences?: Maybe<AccountCreationMarketingPreferences>;
  accountSettingsForm: Form;
  attachmentUploaderConfig?: Maybe<AttachmentUploaderConfig>;
  /**
   * If a null id is provided, this will fall back to the logged in customer's saved basket, or a new basket.
   * This may return a different basket ID than provided, if the basket moved, merged, or didn't exist.
   */
  basket?: Maybe<Basket>;
  brands: Array<Brand>;
  /** @deprecated Included in extensions if applicable. */
  captchaConfiguration: Array<CaptchaConfiguration>;
  check?: Maybe<Scalars['String']>;
  /**
   * Widgets are usually associated with pages on site, but there is sometimes the need to display widgets across other components such as a popup, or alongside core e-commerce objects like the basket.
   *
   * These "special" sets of widgets can be queried through the componentWidgets query and the supported components can be found using the supportedComponentWidgetNames query.
   */
  componentWidgets: Array<Widget>;
  /** Returns the current customer if the customer is logged in, or null otherwise */
  customer?: Maybe<Customer>;
  deliveryInfo?: Maybe<DeliveryInfo>;
  eGiftSummary?: Maybe<EGiftSummary>;
  emailField?: Maybe<FormField>;
  /**
   * This is a query despite having side effects so it can be queried on the server-side at the same time as querying
   * other information to deliver the first page load
   *
   * token should be considered deprecated and will be removed in due course.
   * Please only submit the SocialLoginInput object
   */
  exchangeSocialAuthenticationToken?: Maybe<SocialAuthenticationResponse>;
  features: Array<Feature>;
  /** @deprecated Use features instead */
  flags: Array<Feature>;
  footer?: Maybe<Footer>;
  form?: Maybe<Form>;
  forms?: Maybe<Array<Form>>;
  header?: Maybe<Header>;
  instantSearch?: Maybe<InstantSearchResult>;
  /** @deprecated Use accountCreationMarketingPreferences instead */
  marketingPreferences?: Maybe<MarketingPreferences>;
  page?: Maybe<Page>;
  passwordField?: Maybe<FormField>;
  /** Returns information about a password reset token without consuming it. */
  passwordResetTokenValidity?: Maybe<PasswordResetTokenState>;
  paymentMethods: Array<PaymentMethod>;
  /**
   * If strict is false, the api is allowed to perform redirects, such as returning a master product when given the SKU
   * of one of its variants.
   */
  product?: Maybe<Product>;
  productVariant?: Maybe<ProductVariant>;
  profiles?: Maybe<Array<Form>>;
  referralCodeField?: Maybe<FormField>;
  search?: Maybe<ProductList>;
  /**
   * Returns all site properties for the site.
   *
   * If propertyBucket is provided, that bucket will be used to retrieve properties.  Otherwise, it will default to
   * "frontend".
   *
   * Providing a preview ID allows property changes to be previewed before committing them.  The preview ID
   * should come from the Properties-Preview header.
   */
  siteProperties?: Maybe<SiteProperties>;
  sitemap: Sitemap;
  socialAccounts: Array<SocialAccount>;
  socialLoginProviders?: Maybe<Array<SocialLoginProvider>>;
  supportedComponentWidgetNames: Array<Scalars['String']>;
  supportedCurrencies: Array<Currency>;
  supportedShippingDestinations: Array<Country>;
  voucherCodes?: Maybe<VoucherCodes>;
}


export interface QueryAccountCreationMarketingPreferencesArgs {
  email: Scalars['String'];
}


export interface QueryBasketArgs {
  acknowledgeMerge?: Scalars['Boolean'];
  id?: InputMaybe<Scalars['ID']>;
  settings: SessionSettings;
}


export interface QueryComponentWidgetsArgs {
  name: Scalars['String'];
}


export interface QueryEGiftSummaryArgs {
  code: Scalars['String'];
}


export interface QueryExchangeSocialAuthenticationTokenArgs {
  input?: InputMaybe<SocialLoginInput>;
  token?: InputMaybe<Scalars['SocialAuthenticationToken']>;
}


export interface QueryFormArgs {
  input: FormInput;
}


export interface QueryFormsArgs {
  input: FormFilterInput;
}


export interface QueryInstantSearchArgs {
  concessionCode?: InputMaybe<Scalars['String']>;
  currency: Currency;
  limit?: Scalars['Int'];
  query: Scalars['String'];
  shippingDestination: Country;
}


export interface QueryMarketingPreferencesArgs {
  input: MarketingPreferencesInput;
}


export interface QueryPageArgs {
  path: Scalars['PagePath'];
}


export interface QueryPasswordResetTokenValidityArgs {
  token: Scalars['PasswordResetToken'];
}


export interface QueryProductArgs {
  sku: Scalars['SKU'];
  strict: Scalars['Boolean'];
}


export interface QueryProductVariantArgs {
  sku: Scalars['SKU'];
}


export interface QueryProfilesArgs {
  input: FormFilterInput;
}


export interface QuerySearchArgs {
  options: ProductListInput;
  query: Scalars['String'];
}


export interface QuerySitePropertiesArgs {
  previewId?: InputMaybe<Scalars['String']>;
  propertyBucket?: InputMaybe<Scalars['String']>;
}


export interface QuerySitemapArgs {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}


export interface QueryVoucherCodesArgs {
  limit?: Scalars['Int'];
  offset?: Scalars['Int'];
}

export interface RangedFacet extends Facet {
  __typename?: 'RangedFacet';
  facetHeader: Scalars['DisplayString'];
  facetName: Scalars['String'];
  options: Array<RangedFacetOption>;
}

export interface RangedFacetOption {
  __typename?: 'RangedFacetOption';
  displayName: Scalars['DisplayString'];
  /** May be null if the range is unbounded (e.g. "Up to £5") */
  from?: Maybe<Scalars['Float']>;
  matchedProductCount: Scalars['Int'];
  /** May be null if the range is unbounded (e.g. "£50 and up") */
  to?: Maybe<Scalars['Float']>;
}

export type RateLimitingBucket =
  | 'ADD_REVIEW'
  | 'FORGOT_PASSWORD'
  | 'LOGIN'
  | 'MARKETING_MATERIAL_SIGN_UP'
  | 'MARKETING_PREFERENCES'
  | 'PUSH_NOTIFICATIONS'
  | 'REFERRAL_EMAIL'
  | 'REGISTRATION'
  | 'RESET_PASSWORD'
  | 'WAITLIST';

/** Represents a rating (for example out of 5 stars) */
export interface RatingReviewElement extends ReviewElement {
  __typename?: 'RatingReviewElement';
  key: Scalars['String'];
  maxScore: Scalars['Int'];
  score: Scalars['Int'];
}

export interface ReferralCount {
  __typename?: 'ReferralCount';
  count: Scalars['Int'];
  siteKey: Scalars['String'];
}

/**  Any additions to this should also be added to SocialLoginMissingInformation and maybe to the customer object */
export interface RegistrationInput {
  email: Scalars['String'];
  fullName: Scalars['String'];
  marketingConsent: Scalars['String'];
  marketingConsentAuditData: MarketingConsentAuditData;
  password: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
  referralCode?: InputMaybe<Scalars['String']>;
}

export type Relationship =
  | 'EQUAL_TO'
  | 'NOT_EQUAL_TO';

export interface RemoveSocialLinkInput {
  socialLinkId: Scalars['SocialLinkID'];
}

export interface RenderCondition {
  __typename?: 'RenderCondition';
  /**
   * This condition is a requirement for a field to be rendered, eg: card_details may have a condition:
   * referenceFieldName: "age"
   * relationship: "GREATER_THAN"
   * value: "18"
   */
  referenceFieldName: Scalars['String'];
  relationship: Relationship;
  value: Scalars['String'];
}

export interface ReplaceAddressInput {
  addressInput: AddressInput;
  id: Scalars['ID'];
}

export interface RequestSetPasswordEmailInput {
  username: Scalars['String'];
}

export interface RequestSetPasswordEmailResponse {
  __typename?: 'RequestSetPasswordEmailResponse';
  /** Check to make sure error is not set to confirm success */
  error?: Maybe<ForgottenPasswordError>;
}

export type RequestSocialLinkVerificationEmailError =
  | 'INVALID_TOKEN';

export interface RequestSocialLinkVerificationEmailInput {
  socialAuthenticationToken: Scalars['SocialAuthenticationToken'];
}

/** The response will either contain the error field or the socialAuthenticationToken field */
export interface RequestSocialLinkVerificationEmailResponse {
  __typename?: 'RequestSocialLinkVerificationEmailResponse';
  error?: Maybe<RequestSocialLinkVerificationEmailError>;
  /** A new token that can be used to resend the email */
  socialAuthenticationToken?: Maybe<Scalars['SocialAuthenticationToken']>;
}

export interface ResetPasswordInput {
  newPassword: Scalars['String'];
  token: Scalars['PasswordResetToken'];
  username: Scalars['String'];
}

export interface ResponsiveBuildYourOwnBundle extends Widget {
  __typename?: 'ResponsiveBuildYourOwnBundle';
  banners?: Maybe<Array<Maybe<Widget>>>;
  bundleSubTitle?: Maybe<Scalars['String']>;
  expandAllCategories?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  maxProducts?: Maybe<Scalars['Int']>;
  query: Query;
  showBundlePageTitle?: Maybe<Scalars['String']>;
  showCategoriesList?: Maybe<Scalars['String']>;
  showInfoButton?: Maybe<Scalars['String']>;
  showPrices?: Maybe<Scalars['String']>;
  showProductRRP?: Maybe<Scalars['String']>;
  showProductReviews?: Maybe<Scalars['String']>;
  summaryAmount?: Maybe<Scalars['String']>;
  summaryDisplayType?: Maybe<Scalars['String']>;
  unlimitedProducts?: Maybe<Scalars['String']>;
}

export interface ResponsiveBuildYourOwnBundleProducts extends Widget {
  __typename?: 'ResponsiveBuildYourOwnBundleProducts';
  categoryTitle?: Maybe<Scalars['String']>;
  enableQuantitySelector?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  maxProducts?: Maybe<Scalars['Int']>;
  productList?: Maybe<Scalars['String']>;
  productsToShow?: Maybe<Scalars['Int']>;
  query: Query;
  skuList?: Maybe<Scalars['String']>;
}

export interface ResponsiveComparisonTable extends Widget {
  __typename?: 'ResponsiveComparisonTable';
  buttonText?: Maybe<Scalars['String']>;
  buttonUrl?: Maybe<Scalars['String']>;
  comparisonList?: Maybe<Scalars['String']>;
  disableFeatureTag?: Maybe<Scalars['String']>;
  featureTag?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['URL']>;
  moreInfo?: Maybe<Scalars['String']>;
  query: Query;
  subTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface ResponsiveComparisonTableContainer extends Widget {
  __typename?: 'ResponsiveComparisonTableContainer';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface ResponsiveProductBlockCarousel extends Widget {
  __typename?: 'ResponsiveProductBlockCarousel';
  displayStandaloneTitle?: Maybe<Scalars['String']>;
  enableAsiaStyles?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  productList?: Maybe<ProductList>;
  query: Query;
  skuList?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}


export interface ResponsiveProductBlockCarouselProductListArgs {
  input: ProductListInput;
}

export interface ResponsiveProductTabs extends Widget {
  __typename?: 'ResponsiveProductTabs';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  responsiveProductTabsTitle?: Maybe<Scalars['String']>;
  tabTitle_1?: Maybe<Scalars['String']>;
  tabTitle_2?: Maybe<Scalars['String']>;
  tabTitle_3?: Maybe<Scalars['String']>;
}

export interface ResponsiveSetSalon extends Widget {
  __typename?: 'ResponsiveSetSalon';
  banners?: Maybe<Array<Maybe<Widget>>>;
  beauty?: Maybe<Scalars['String']>;
  extensions?: Maybe<Scalars['String']>;
  fridayHours?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mondayHours?: Maybe<Scalars['String']>;
  query: Query;
  salonBookUrl?: Maybe<Scalars['URL']>;
  salonDescription?: Maybe<Scalars['String']>;
  salonEmail?: Maybe<Scalars['String']>;
  salonTel?: Maybe<Scalars['String']>;
  salonTitle?: Maybe<Scalars['String']>;
  saturdayHours?: Maybe<Scalars['String']>;
  socialUrl?: Maybe<Scalars['String']>;
  sprayTan?: Maybe<Scalars['String']>;
  sundayHours?: Maybe<Scalars['String']>;
  thursdayHours?: Maybe<Scalars['String']>;
  tuesdayHours?: Maybe<Scalars['String']>;
  wednesdayHours?: Maybe<Scalars['String']>;
}

export interface ResponsiveSetSalonWithSlides extends Widget {
  __typename?: 'ResponsiveSetSalonWithSlides';
  beauty?: Maybe<Scalars['String']>;
  extensions?: Maybe<Scalars['String']>;
  fridayHours?: Maybe<Scalars['String']>;
  hair?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mondayHours?: Maybe<Scalars['String']>;
  query: Query;
  salonBookUrl?: Maybe<Scalars['URL']>;
  salonDescription?: Maybe<Scalars['String']>;
  salonEmail?: Maybe<Scalars['String']>;
  salonTel?: Maybe<Scalars['String']>;
  salonTitle?: Maybe<Scalars['String']>;
  saturdayHours?: Maybe<Scalars['String']>;
  sliderImage1?: Maybe<Scalars['URL']>;
  sliderImage1Alt?: Maybe<Scalars['String']>;
  sliderImage2?: Maybe<Scalars['URL']>;
  sliderImage2Alt?: Maybe<Scalars['String']>;
  sliderImage3?: Maybe<Scalars['URL']>;
  sliderImage3Alt?: Maybe<Scalars['String']>;
  socialUrl?: Maybe<Scalars['URL']>;
  sprayTan?: Maybe<Scalars['String']>;
  sundayHours?: Maybe<Scalars['String']>;
  thursdayHours?: Maybe<Scalars['String']>;
  tuesdayHours?: Maybe<Scalars['String']>;
  wednesdayHours?: Maybe<Scalars['String']>;
}

export interface ResponsiveSliderSet extends Widget {
  __typename?: 'ResponsiveSliderSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  isAutoSlideOn?: Maybe<Scalars['String']>;
  isBulletNavigationHidden?: Maybe<Scalars['String']>;
  isHeightVariable?: Maybe<Scalars['String']>;
  query: Query;
  slideDuration?: Maybe<Scalars['Int']>;
}

export interface ResponsiveSuccessStoriesWidgetContainer extends Widget {
  __typename?: 'ResponsiveSuccessStoriesWidgetContainer';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface ResponsiveSuccessStoryWidget extends Widget {
  __typename?: 'ResponsiveSuccessStoryWidget';
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageAfterAltText?: Maybe<Scalars['String']>;
  imageAfterUrl?: Maybe<Scalars['URL']>;
  imageAltText?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['URL']>;
  linkUrl?: Maybe<Scalars['String']>;
  profileCta?: Maybe<Scalars['String']>;
  profileName?: Maybe<Scalars['String']>;
  query: Query;
  roundelTitle?: Maybe<Scalars['String']>;
  weightLossStyle?: Maybe<Scalars['String']>;
  weightLost?: Maybe<Scalars['String']>;
}

export interface ResponsiveTwoItemComparisonContainer extends Widget {
  __typename?: 'ResponsiveTwoItemComparisonContainer';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  title1?: Maybe<Scalars['String']>;
  title2?: Maybe<Scalars['String']>;
}

export interface ResponsiveTwoItemComparisonRow extends Widget {
  __typename?: 'ResponsiveTwoItemComparisonRow';
  firstItem?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  secondItem?: Maybe<Scalars['String']>;
  valueToCompare?: Maybe<Scalars['String']>;
  valueToCopmare?: Maybe<Scalars['String']>;
}

export interface ResponsiveUspBar extends Widget {
  __typename?: 'ResponsiveUSPBar';
  callIcon?: Maybe<Scalars['String']>;
  callLink?: Maybe<Scalars['String']>;
  callText?: Maybe<Scalars['String']>;
  checkmarkLink?: Maybe<Scalars['String']>;
  checkmarkText?: Maybe<Scalars['String']>;
  clickAndCollectLink?: Maybe<Scalars['String']>;
  clickAndCollectText?: Maybe<Scalars['String']>;
  countDownLink?: Maybe<Scalars['String']>;
  countDownText?: Maybe<Scalars['String']>;
  deliveryLink?: Maybe<Scalars['String']>;
  deliveryText?: Maybe<Scalars['String']>;
  emailLink?: Maybe<Scalars['String']>;
  emailText?: Maybe<Scalars['String']>;
  fastTrackLink?: Maybe<Scalars['String']>;
  fastTrackText?: Maybe<Scalars['String']>;
  fridayCutoff?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internationalDeliveryLink?: Maybe<Scalars['String']>;
  internationalDeliveryText?: Maybe<Scalars['String']>;
  mondayCutoff?: Maybe<Scalars['String']>;
  qualityLink?: Maybe<Scalars['String']>;
  qualityText?: Maybe<Scalars['String']>;
  query: Query;
  rewardPointsLink?: Maybe<Scalars['String']>;
  rewardPointsText?: Maybe<Scalars['String']>;
  saturdayCutoff?: Maybe<Scalars['String']>;
  storeLink?: Maybe<Scalars['String']>;
  storeText?: Maybe<Scalars['String']>;
  sundayCutoff?: Maybe<Scalars['String']>;
  thursdayCutoff?: Maybe<Scalars['String']>;
  timezoneOffset?: Maybe<Scalars['String']>;
  trustPilotLink?: Maybe<Scalars['String']>;
  trustPilotText?: Maybe<Scalars['String']>;
  tuesdayCutoff?: Maybe<Scalars['String']>;
  wednesdayCutoff?: Maybe<Scalars['String']>;
}

export interface Review {
  __typename?: 'Review';
  authorName: Scalars['DisplayString'];
  elements: Array<ReviewElement>;
  id: Scalars['ID'];
  negativeVotes?: Maybe<Scalars['Int']>;
  positiveVotes?: Maybe<Scalars['Int']>;
  posted: Scalars['Date'];
  title: Scalars['DisplayString'];
  verifiedPurchase: Scalars['Boolean'];
}

export type ReviewActionResult =
  | 'ALREADY_VOTED'
  | 'INVALID_REVIEW_ID'
  | 'REVIEW_NOT_FOUND'
  | 'SUCCESSFUL';

export interface ReviewElement {
  key: Scalars['String'];
}

export interface ReviewFieldInput {
  name: Scalars['String'];
  value: Scalars['String'];
}

export type ReviewSort =
  | 'HIGHEST_TO_LOWEST_RATING'
  | 'MOST_TO_LEAST_POSITIVE_VOTES'
  | 'NEWEST_TO_OLDEST';

export interface ReviewVotingInput {
  reviewId: Scalars['ID'];
  sku: Scalars['SKU'];
}

export interface Reviews {
  __typename?: 'Reviews';
  hasMore: Scalars['Boolean'];
  reviews: Array<Review>;
  total: Scalars['Int'];
}

export interface RichContent {
  __typename?: 'RichContent';
  content: Array<RichContentItem>;
}


export interface RichContentContentArgs {
  filter?: InputMaybe<Array<RichContentType>>;
}

export interface RichContentItem {
  __typename?: 'RichContentItem';
  content: Scalars['DisplayString'];
  type: RichContentType;
}

export type RichContentType =
  | 'HTML'
  | 'MARKDOWN';

/** One of our offer types allows the customer to select a gift at the basket. These can also be tiered to allow for multiple gifts at different thresholds. */
export interface SelectYourSample {
  __typename?: 'SelectYourSample';
  /** Total amount currently spent on products meeting the requirements for this Select Your Sample */
  currentAmountSpent: MoneyValue;
  id: Scalars['ID'];
  message?: Maybe<Scalars['DisplayString']>;
  tiers: Array<SelectYourSampleTier>;
  title?: Maybe<Scalars['DisplayString']>;
}

export interface SelectYourSampleTier {
  __typename?: 'SelectYourSampleTier';
  /**
   * The amount of additional money the customer must spend on qualifying products to reach this
   * tier, or null if the tier is already reached.
   */
  additionalSpendToReach?: Maybe<MoneyValue>;
  id: Scalars['ID'];
  maxSelectedProducts: Scalars['Int'];
  products: Array<ProductVariant>;
  selectedProducts: Array<ProductVariant>;
  thresholdAmountSpent: MoneyValue;
}

export interface SeoProductCategory extends Widget {
  __typename?: 'SeoProductCategory';
  buttonStyle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  productCategoryName?: Maybe<Scalars['String']>;
  productCategoryUrl?: Maybe<Scalars['String']>;
  query: Query;
}

export interface SeoProductCategorySet extends Widget {
  __typename?: 'SeoProductCategorySet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  showDiscoverTag?: Maybe<Scalars['String']>;
  showMore?: Maybe<Scalars['String']>;
}

/** Currency and Shipping Destination are passed in as this can affect the price of products after offer evaluation */
export interface SessionSettings {
  currency: Currency;
  shippingDestination: Country;
}

export interface SettingsFieldInput {
  fieldName: Scalars['String'];
  /** If the value is passed as null, it means it existed before and needs deleting. */
  value?: InputMaybe<Scalars['String']>;
}

export interface ShopTheLookHotSpot extends Widget {
  __typename?: 'ShopTheLookHotSpot';
  SKU?: Maybe<ProductVariant>;
  id: Scalars['ID'];
  itemLeft?: Maybe<Scalars['String']>;
  itemTop?: Maybe<Scalars['String']>;
  productDescription?: Maybe<Scalars['String']>;
  query: Query;
  rangeList?: Maybe<Scalars['String']>;
}

export interface SignUpForEmailMarketingCampaignInput {
  auditData: MarketingConsentAuditData;
  /** The ID of the marketing campaign being signed up to. Currently must be an Integer */
  campaignId: Scalars['ID'];
  email: Scalars['String'];
  name: Scalars['String'];
}

export interface SignUpForMarketingInput {
  auditData: MarketingConsentAuditData;
  /** Interpreted as a phone number or email address depending on the provided MarketingType */
  contactDetails: Scalars['String'];
  type: MarketingType;
}

export interface SimpleFacet extends Facet {
  __typename?: 'SimpleFacet';
  facetHeader: Scalars['DisplayString'];
  facetName: Scalars['String'];
  options: Array<SimpleFacetOption>;
}

export interface SimpleFacetOption {
  __typename?: 'SimpleFacetOption';
  displayName: Scalars['DisplayString'];
  matchedProductCount: Scalars['Int'];
  optionName: Scalars['String'];
}

export interface SiteProperties {
  __typename?: 'SiteProperties';
  /**
   * If keys is provided, the result will be limited to only the given property keys,
   * otherwise, all properties will be returned
   */
  properties?: Maybe<Array<Maybe<LocalizedString>>>;
}


export interface SitePropertiesPropertiesArgs {
  keys?: InputMaybe<Array<Scalars['String']>>;
}

export interface Sitemap {
  __typename?: 'Sitemap';
  hasMore: Scalars['Boolean'];
  paths: Array<Scalars['PagePath']>;
  total: Scalars['Int'];
}

export interface SliderFacet extends Facet {
  __typename?: 'SliderFacet';
  facetHeader: Scalars['DisplayString'];
  facetName: Scalars['String'];
  maxValue: Scalars['Float'];
  minValue: Scalars['Float'];
}

export interface SocialAccount {
  __typename?: 'SocialAccount';
  socialNetwork: SocialNetwork;
  url: Scalars['URL'];
}

/**
 * This will be used on generated widgets with a UGC-type parameter.
 *
 * The field will look as follows:
 *
 * userGeneratedContent(offset: Int! = 0, limit: Int! = 5): SocialAssets
 */
export interface SocialAsset {
  __typename?: 'SocialAsset';
  caption: Scalars['String'];
  hashtags: Array<Scalars['String']>;
  largeImage: Scalars['URL'];
  mediumImage: Scalars['URL'];
  postUrl: Scalars['URL'];
  providerName: Scalars['String'];
  smallImage: Scalars['URL'];
  thumbnailImage: Scalars['URL'];
  user: SocialAssetUser;
}

export interface SocialAssetUser {
  __typename?: 'SocialAssetUser';
  /** Full Name may or may not be provided based on the social network */
  fullName?: Maybe<Scalars['String']>;
  profileImage: Scalars['URL'];
  profileUrl: Scalars['URL'];
  username: Scalars['String'];
}

export interface SocialAssets {
  __typename?: 'SocialAssets';
  hasMore: Scalars['Boolean'];
  socialAssets: Array<SocialAsset>;
  total: Scalars['Int'];
}

export interface SocialAuthenticationResponse {
  __typename?: 'SocialAuthenticationResponse';
  authenticationResponse: AuthenticationResponse;
  /**
   * In the case that the social login failed due to an INVALID_DATA error, the 'form' field will be non-null,
   * and will contain a form containing only the missing or invalid fields required.
   */
  form?: Maybe<Form>;
  /**
   * In the case that only Marketing Opt-In is required for Account Creation, when a social login is attempted
   * then the Account will be created successfully and this object will be non-null.
   * In which case you should render an opt-in page and submit the result with the updateMarketingPreferences mutation
   */
  optInForm: OptInForm;
  socialIdentity?: Maybe<SocialIdentity>;
  socialLinkId?: Maybe<Scalars['SocialLinkID']>;
  /**
   * In the case that the social login failed, the 'socialLoginToken' field will be non-null, and will contain
   * a token which can be used in the socialLogin mutation to retry social login with additional or different data
   */
  socialLoginToken?: Maybe<Scalars['SocialAuthenticationToken']>;
  /** @deprecated Use socialLinkID instead */
  socialUserId?: Maybe<Scalars['SocialLinkID']>;
}

export interface SocialIdentity {
  __typename?: 'SocialIdentity';
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
}

export interface SocialLink {
  __typename?: 'SocialLink';
  socialLinkId: Scalars['SocialLinkID'];
  socialLoginProvider?: Maybe<SocialLoginProvider>;
  status: SocialLinkStatus;
  username?: Maybe<Scalars['String']>;
}

export type SocialLinkStatus =
  | 'LINKED'
  | 'PENDING';

export interface SocialLoginInput {
  missingInformation?: InputMaybe<SocialLoginMissingInformation>;
  /** Should we offer opt-in before or after Account Creation */
  optInAfterAccountCreation?: Scalars['Boolean'];
  socialAuthenticationToken: Scalars['SocialAuthenticationToken'];
}

/**
 * All input fields for social login are optional.  Which ones are actually needed depends on the information provided
 * by the social provider.
 *
 * The required fields can be determined using the Form from the SocialAuthenticationResponse type.
 */
export interface SocialLoginMissingInformation {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  marketingConsent?: InputMaybe<Scalars['String']>;
  marketingConsentAuditData?: InputMaybe<MarketingConsentAuditData>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  referralCode?: InputMaybe<Scalars['String']>;
}

export interface SocialLoginProvider {
  __typename?: 'SocialLoginProvider';
  /** A unique identifier for this social provider. */
  code: Scalars['String'];
  colour: Scalars['String'];
  iconUrl: Scalars['String'];
  /**
   * A URL for the social login button to link to.  This URL comes with some already existing parameters,
   * but must be updated to add the following query parameters:
   *
   * clientState:  A string which will be returned once the user returns from the social login provider.  This can be
   *   used to store information that needs to be remembered from the start of their journey when they return, such as
   *   a CSRF token.
   *
   * returnUrl: A full URL (Including protocol) which the user will return to when they return from the social login
   *   provider (e.g. https://www.mydomain.com/socialLogin)
   *
   * The user will return from the social provider via a POST request to the returnUrl.  Their request body will be
   * form encoded, and contain the following data:
   *
   * token: A SocialAuthenticationToken, which can be used in this API via the exchangeSocialAuthenticationToken and
   * socialLogin fields.
   *
   * clientState: The same client state provided as a parameter to the URL.
   */
  loginUrl: Scalars['String'];
  /** The text to display on the social login button, if applicable */
  name: Scalars['DisplayString'];
}

export type SocialNetwork =
  | 'FACEBOOK'
  | 'INSTAGRAM'
  | 'KAKAO_TALK'
  | 'LINE'
  | 'PINTEREST'
  | 'TWENTYONE_BUTTONS'
  | 'TWITTER'
  | 'VK'
  | 'WEIBO'
  | 'WHATSAPP'
  | 'YOUTUBE';

export interface SocialReferralMethod {
  __typename?: 'SocialReferralMethod';
  type: SocialReferralMethodType;
  url?: Maybe<Scalars['String']>;
}

export type SocialReferralMethodType =
  | 'EMAIL'
  | 'FACEBOOK'
  | 'MESSENGER'
  | 'SMS'
  | 'TWITTER'
  | 'VK'
  | 'WEIBO'
  | 'WHATSAPP';

/**
 * [ISO_3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) state code.
 * The non-standard codes `US_AA`, `US_AE` and `US_AP` represent Armed Forces locations, similar to BFPO.
 * Puerto Rico, US Virgin Islands etc. are not listed here as we treat them as separate countries.
 */
export type State =
  /** Armed Forces Americas */
  | 'US_AA'
  /** Armed Forces Europe */
  | 'US_AE'
  | 'US_AK'
  | 'US_AL'
  /** Armed Forces Pacific */
  | 'US_AP'
  | 'US_AR'
  | 'US_AZ'
  | 'US_CA'
  | 'US_CO'
  | 'US_CT'
  | 'US_DC'
  | 'US_DE'
  | 'US_FL'
  | 'US_GA'
  | 'US_HI'
  | 'US_IA'
  | 'US_ID'
  | 'US_IL'
  | 'US_IN'
  | 'US_KS'
  | 'US_KY'
  | 'US_LA'
  | 'US_MA'
  | 'US_MD'
  | 'US_ME'
  | 'US_MI'
  | 'US_MN'
  | 'US_MO'
  | 'US_MS'
  | 'US_MT'
  | 'US_NC'
  | 'US_ND'
  | 'US_NE'
  | 'US_NH'
  | 'US_NJ'
  | 'US_NM'
  | 'US_NV'
  | 'US_NY'
  | 'US_OH'
  | 'US_OK'
  | 'US_OR'
  | 'US_PA'
  | 'US_RI'
  | 'US_SC'
  | 'US_SD'
  | 'US_TN'
  | 'US_TX'
  | 'US_UT'
  | 'US_VA'
  | 'US_VT'
  | 'US_WA'
  | 'US_WI'
  | 'US_WV'
  | 'US_WY';

export interface Supersize {
  __typename?: 'Supersize';
  saving: SupersizeSaving;
  variant: ProductVariant;
}

export interface SupersizeSaving {
  __typename?: 'SupersizeSaving';
  /** E.g. next supersize option is 10 kg */
  nextSupersizeOption: ProductUnit;
  /** Saving for per unit, e.g. "£2" per 1 kg or per 20 servings */
  savingPerUnit: MoneyValue;
  /** The unit for the saving, e.g. "1 kg" in saving £2 per 1 kg */
  savingUnit: ProductUnit;
}

export interface TestCheckoutStartInput {
  checkoutStartInput: CheckoutStartInput;
  elysiumCheckoutOrder?: InputMaybe<Scalars['String']>;
}

export interface TestGuestCheckoutStartInput {
  guestCheckoutEmailInput: GuestCheckoutEmailInput;
  testCheckoutStartInput: TestCheckoutStartInput;
}

export interface TextReviewElement extends ReviewElement {
  __typename?: 'TextReviewElement';
  key: Scalars['String'];
  value: Scalars['String'];
}

export interface TokenMarketingConsentAuditData {
  landingUrl: Scalars['URL'];
}

export interface TokenMarketingInput {
  auditData: TokenMarketingConsentAuditData;
  /** This is actually a hash of the email address but is in the unsubscribe link as the email parameter */
  email: Scalars['String'];
  /** This is the uuid parameter in the standard unsubscribe link */
  token: Scalars['MarketingToken'];
}

export interface TopBrandsWidget extends Widget {
  __typename?: 'TopBrandsWidget';
  BrandEightLogoPath?: Maybe<Scalars['URL']>;
  BrandEightName?: Maybe<Scalars['String']>;
  BrandFiveLogoPath?: Maybe<Scalars['URL']>;
  BrandFiveName?: Maybe<Scalars['String']>;
  BrandFourLogoPath?: Maybe<Scalars['URL']>;
  BrandFourName?: Maybe<Scalars['String']>;
  BrandOneLogoPath?: Maybe<Scalars['URL']>;
  BrandOneName?: Maybe<Scalars['String']>;
  BrandSevenLogoPath?: Maybe<Scalars['URL']>;
  BrandSevenName?: Maybe<Scalars['String']>;
  BrandSixLogoPath?: Maybe<Scalars['URL']>;
  BrandSixName?: Maybe<Scalars['String']>;
  BrandTabTitle?: Maybe<Scalars['String']>;
  BrandThreeLogoPath?: Maybe<Scalars['URL']>;
  BrandThreeName?: Maybe<Scalars['String']>;
  BrandTwoLogoPath?: Maybe<Scalars['URL']>;
  BrandTwoName?: Maybe<Scalars['String']>;
  altTextBrandEightLogo?: Maybe<Scalars['String']>;
  altTextBrandFiveLogo?: Maybe<Scalars['String']>;
  altTextBrandFourLogo?: Maybe<Scalars['String']>;
  altTextBrandOneLogo?: Maybe<Scalars['String']>;
  altTextBrandSevenLogo?: Maybe<Scalars['String']>;
  altTextBrandSixLogo?: Maybe<Scalars['String']>;
  altTextBrandThreeLogo?: Maybe<Scalars['String']>;
  altTextBrandTwoLogo?: Maybe<Scalars['String']>;
  altTextFeaturedImage?: Maybe<Scalars['String']>;
  altTextFeaturedLogo?: Maybe<Scalars['String']>;
  featuredBrandName?: Maybe<Scalars['String']>;
  featuredBrandPageLink?: Maybe<Scalars['String']>;
  featuredBrandPageLinkName?: Maybe<Scalars['String']>;
  featuredBrandText?: Maybe<Scalars['String']>;
  featuredImagePath?: Maybe<Scalars['URL']>;
  featuredLogoPath?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  query: Query;
}

export interface TopProductCategory extends Widget {
  __typename?: 'TopProductCategory';
  buttonStyle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  topProductCategoryName?: Maybe<Scalars['String']>;
  topProductCategoryUrl?: Maybe<Scalars['String']>;
}

export interface TopProductCategorySet extends Widget {
  __typename?: 'TopProductCategorySet';
  DiscoverTitle?: Maybe<Scalars['String']>;
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  showDiscoverTag?: Maybe<Scalars['String']>;
  showMore?: Maybe<Scalars['String']>;
}

export interface TrustPilotCarouselWidget extends Widget {
  __typename?: 'TrustPilotCarouselWidget';
  businessId?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  languageCode?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  query: Query;
  templateId?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
}

export interface TrustPilotWidget extends Widget {
  __typename?: 'TrustPilotWidget';
  businessId?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isCarousel?: Maybe<Scalars['String']>;
  languageCode?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  query: Query;
  templateId?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
}

export interface UpdateDateOfBirthInput {
  /** New date of birth. Set to null to remove from account. */
  newDateOfBirth?: InputMaybe<Scalars['Date']>;
}

export interface UpdateEmailAddressInput {
  currentPassword: Scalars['String'];
  newEmailAddress: Scalars['String'];
}

export type UpdateMarketingPreferencesError =
  /**
   * There was insufficient data to update this marketing preference, such as
   * attempting to sign up for SMS marketing when the customer has no phone number.
   */
  | 'INSUFFICIENT_DATA';

export interface UpdateMarketingPreferencesInput {
  auditData: MarketingConsentAuditData;
  newValue: Scalars['Boolean'];
  type: MarketingType;
}

export interface UpdateMarketingPreferencesResponse {
  __typename?: 'UpdateMarketingPreferencesResponse';
  error?: Maybe<UpdateMarketingPreferencesError>;
}

export interface UpdateMobilePhoneNumberInput {
  /** New phone number. Set to null to remove from account. */
  newNumber?: InputMaybe<Scalars['String']>;
}

export interface UpdateNameInput {
  newName?: InputMaybe<Scalars['String']>;
}

export interface UpdatePasswordInput {
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}

export interface Validator {
  __typename?: 'Validator';
  argument?: Maybe<Scalars['String']>;
  name: ValidatorName;
}

export type ValidatorName =
  /** The argument is an email domain. The field value should be accepted if it follows the format {any prefix}@{given domain} */
  | 'EMAIL_DOMAIN'
  /** The argument is comparable with the expected date input in the context of the field type.  The date field value will be rejected if it is older than the date calculated with the argument. */
  | 'MAX_DAYS_OLD'
  /** The argument is an integer.  The field value should be rejected if its length is greater than the argument. */
  | 'MAX_LENGTH'
  /**
   * The argument is an integer.  The field values will be rejected if there are more options selected than are allowed here.
   * This validator is mainly for use with multiselect and likert scale fields
   */
  | 'MAX_OPTIONS'
  | 'MAX_UPLOAD_SIZE_KB'
  /** The argument is comparable with the expected input in the context of the field type.  The field value will be rejected if it is greater than the argument. */
  | 'MAX_VALUE'
  /** The argument is comparable with the expected date input in the context of the field type.  The date field value will be rejected if it is newer than the date calculated with the argument. */
  | 'MIN_DAYS_OLD'
  /** The argument is an integer.  The field value should be rejected if its length is less than the argument. */
  | 'MIN_LENGTH'
  /**
   * The argument is an integer.  The field value should be rejected the number of lowercase letters is less than the
   * argument.
   */
  | 'MIN_LOWERCASE'
  /** The argument is an integer.  The field value should be rejected the number of digits is less than the argument. */
  | 'MIN_NUMBERS'
  /**
   * The argument is an integer.  The field values will be rejected if there are fewer options selected than are allowed here.
   * This validator is mainly for use with multiselect and likert scale fields
   */
  | 'MIN_OPTIONS'
  /**
   * The argument is an integer.  The field value should be rejected the number of special characters is less than the
   * argument.
   */
  | 'MIN_SPECIAL_CHARACTERS'
  /**
   * The argument is an integer.  The field value should be rejected the number of uppercase letters is less than the
   * argument.
   */
  | 'MIN_UPPERCASE'
  /** The argument is comparable with the expected input in the context of the field type.  The field value will be rejected if it is less than the argument. */
  | 'MIN_VALUE'
  /**
   * For example, the email field might have the MUST_BE_UNIQUE validator, as the user must input an email that does not
   * match any existing customer's email address
   */
  | 'MUST_BE_UNIQUE'
  /**
   * The argument is a comma-separated list of field names.  The field value should be rejected if it is equal to the
   * value of any of the fields specified.
   */
  | 'NOT_EQUAL_TO'
  /** The field value should be rejected if it contains any digits (0-9) */
  | 'NO_DIGITS'
  /** The field value should be rejected if it contains any of the following special characters: (?, \, ;, :. <, >, ", %, $) */
  | 'NO_SPECIAL_CHARACTERS'
  /** The argument is a string containing a Regex.  The field value should be rejected if it matches the given regex. */
  | 'REGEX_DOES_NOT_MATCH'
  /** The argument is a string containing a Regex.  The field value should be rejected if it does not match the given regex. */
  | 'REGEX_MATCHES'
  /** Signals that this argument may be rejected by the backend for any reason. */
  | 'SERVER_SIDE_CHECK'
  /**
   * The argument is not required.  The field value should be rejected if the value is not one of the provided options.
   * This will almost always be set when there is an options list provided.
   */
  | 'SPECIFIED_ANSWERS_ONLY'
  | 'SUPPORTED_UPLOAD_EXTENSIONS';

/**
 * An axis on which a product can vary, such as colour or flavour.
 * A Product may have 0 or more options.
 */
export interface VariantOption {
  __typename?: 'VariantOption';
  choices: Array<OptionChoice>;
  key: Scalars['String'];
}

export interface VariantOptions {
  currency: Currency;
  shippingDestination: Country;
}

export interface VoucherCode {
  __typename?: 'VoucherCode';
  discountCode?: Maybe<Scalars['String']>;
  expiresAt?: Maybe<Scalars['Timestamp']>;
  link?: Maybe<Hyperlink>;
  message: Scalars['String'];
  title: Scalars['String'];
}

export interface VoucherCodes {
  __typename?: 'VoucherCodes';
  hasMore: Scalars['Boolean'];
  offers: Array<VoucherCode>;
  total: Scalars['Int'];
}

export interface VoucherCodesWidget extends Widget {
  __typename?: 'VoucherCodesWidget';
  id: Scalars['ID'];
  query: Query;
}

export interface Widget {
  id: Scalars['ID'];
  query: Query;
}

/**
 * There may be multiple wishlist items for the same product,
 * but none with the same product and selected variant
 */
export interface WishlistItem {
  __typename?: 'WishlistItem';
  product: Product;
  selectedVariant?: Maybe<ProductVariant>;
}

export interface WishlistItems {
  __typename?: 'WishlistItems';
  hasMore: Scalars['Boolean'];
  items: Array<WishlistItem>;
  total: Scalars['Int'];
}

export type WishlistSort =
  | 'AVAILABILITY'
  | 'DEFAULT'
  | 'DISCOUNT_HIGHEST_TO_LOWEST'
  | 'PRICE_LOWEST_TO_HIGHEST'
  | 'TITLE';

export interface AsymmetricGrid extends Widget {
  __typename?: 'asymmetricGrid';
  altTextImgOne?: Maybe<Scalars['String']>;
  altTextImgTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageOnePath?: Maybe<Scalars['URL']>;
  imageOneSubtitle?: Maybe<Scalars['String']>;
  imageTwoPath?: Maybe<Scalars['URL']>;
  imageTwoSubtitle?: Maybe<Scalars['String']>;
  linkOne?: Maybe<Scalars['String']>;
  linkTwo?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
  widthImageOne?: Maybe<Scalars['Int']>;
  widthImageOneMobile?: Maybe<Scalars['Int']>;
  widthImageTwo?: Maybe<Scalars['Int']>;
  widthImageTwoMobile?: Maybe<Scalars['Int']>;
}

export interface Buildyourownbundle extends Widget {
  __typename?: 'buildyourownbundle';
  banners?: Maybe<Array<Maybe<Widget>>>;
  bundlePageTitle?: Maybe<Scalars['String']>;
  bundleSubTitle?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  maxProducts?: Maybe<Scalars['String']>;
  packSummary?: Maybe<Scalars['String']>;
  query: Query;
  showPrices?: Maybe<Scalars['String']>;
  summaryAmount?: Maybe<Scalars['String']>;
}

export interface CategoryItemCard extends Widget {
  __typename?: 'categoryItemCard';
  altTextitem?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemCTA?: Maybe<Scalars['String']>;
  itemDescription?: Maybe<Scalars['String']>;
  itemImagePath?: Maybe<Scalars['URL']>;
  itemTitle?: Maybe<Scalars['String']>;
  itemUrl?: Maybe<Scalars['String']>;
  query: Query;
  textAlignment?: Maybe<Scalars['String']>;
}

export interface CoverageCalculator extends Widget {
  __typename?: 'coverageCalculator';
  additionalInfoDisclaimerText?: Maybe<Scalars['String']>;
  additionalInfoText?: Maybe<RichContent>;
  additionalInfoTitle?: Maybe<Scalars['String']>;
  buyButtonLink?: Maybe<Scalars['String']>;
  calculatorSubtitle?: Maybe<Scalars['String']>;
  calculatorTitle?: Maybe<Scalars['String']>;
  calculatorType?: Maybe<Scalars['String']>;
  excludeAreaHelpText?: Maybe<RichContent>;
  id: Scalars['ID'];
  instructionsText?: Maybe<RichContent>;
  instructionsTitle?: Maybe<Scalars['String']>;
  paintCoatsHelpText?: Maybe<RichContent>;
  paintCoverage?: Maybe<Scalars['String']>;
  query: Query;
  wallpaperRollLength?: Maybe<Scalars['String']>;
  wallpaperRollWidth?: Maybe<Scalars['String']>;
}

export interface EightLinkButtonWidget extends Widget {
  __typename?: 'eightLinkButtonWidget';
  buttonTextEight?: Maybe<Scalars['String']>;
  buttonTextFive?: Maybe<Scalars['String']>;
  buttonTextFour?: Maybe<Scalars['String']>;
  buttonTextOne?: Maybe<Scalars['String']>;
  buttonTextSeven?: Maybe<Scalars['String']>;
  buttonTextSix?: Maybe<Scalars['String']>;
  buttonTextThree?: Maybe<Scalars['String']>;
  buttonTextTwo?: Maybe<Scalars['String']>;
  buttonUrlEight?: Maybe<Scalars['String']>;
  buttonUrlFive?: Maybe<Scalars['String']>;
  buttonUrlFour?: Maybe<Scalars['String']>;
  buttonUrlOne?: Maybe<Scalars['String']>;
  buttonUrlSeven?: Maybe<Scalars['String']>;
  buttonUrlSix?: Maybe<Scalars['String']>;
  buttonUrlThree?: Maybe<Scalars['String']>;
  buttonUrlTwo?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
  titleAlign?: Maybe<Scalars['String']>;
}

export interface ImageSelectCard extends Widget {
  __typename?: 'imageSelectCard';
  ImageInformationText?: Maybe<Scalars['String']>;
  altTextImage?: Maybe<Scalars['String']>;
  altTextThumbnail?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemImageLargePath?: Maybe<Scalars['URL']>;
  itemImagePath?: Maybe<Scalars['URL']>;
  itemImageSmallPath?: Maybe<Scalars['URL']>;
  query: Query;
  thumbnailImagePath?: Maybe<Scalars['URL']>;
}

export interface ImageSelectSlider extends Widget {
  __typename?: 'imageSelectSlider';
  altTextLogoImage?: Maybe<Scalars['String']>;
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  logoImagePath?: Maybe<Scalars['URL']>;
  query: Query;
  titleText?: Maybe<Scalars['String']>;
}

export interface ImprovedSearchBestSellers extends Widget {
  __typename?: 'improvedSearchBestSellers';
  id: Scalars['ID'];
  productId1?: Maybe<Scalars['String']>;
  productId2?: Maybe<Scalars['String']>;
  productId3?: Maybe<Scalars['String']>;
  productId4?: Maybe<Scalars['String']>;
  query: Query;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface KitBuilder extends Widget {
  __typename?: 'kitBuilder';
  id: Scalars['ID'];
  kitBuilderDistributorId?: Maybe<Scalars['String']>;
  kitBuilderKey?: Maybe<Scalars['String']>;
  query: Query;
}

export interface LoyaltyRewardsList extends Widget {
  __typename?: 'loyaltyRewardsList';
  id: Scalars['ID'];
  listItem1?: Maybe<Scalars['String']>;
  listItem2?: Maybe<Scalars['String']>;
  listItem3?: Maybe<Scalars['String']>;
  listItem4?: Maybe<Scalars['String']>;
  listItem5?: Maybe<Scalars['String']>;
  listItem6?: Maybe<Scalars['String']>;
  listItem7?: Maybe<Scalars['String']>;
  listItem8?: Maybe<Scalars['String']>;
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface LoyaltyWelcomeMessage extends Widget {
  __typename?: 'loyaltyWelcomeMessage';
  accountCreationTextPart1?: Maybe<Scalars['String']>;
  accountCreationTextPart2?: Maybe<Scalars['String']>;
  heading?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageAltText?: Maybe<Scalars['String']>;
  imagePath?: Maybe<Scalars['URL']>;
  profileCompletionTextPart1?: Maybe<Scalars['String']>;
  profileCompletionTextPart2?: Maybe<Scalars['String']>;
  query: Query;
  subHeading?: Maybe<Scalars['String']>;
}

export interface MultiCategoryCardSet extends Widget {
  __typename?: 'multiCategoryCardSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  columnsNumber?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  query: Query;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}

export interface ParcelLabWidget extends Widget {
  __typename?: 'parcelLabWidget';
  id: Scalars['ID'];
  parcelLabUserId?: Maybe<Scalars['Int']>;
  query: Query;
  showSearchForm?: Maybe<Scalars['String']>;
  showZipCodeInput?: Maybe<Scalars['String']>;
}

export interface Promoproductslider extends Widget {
  __typename?: 'promoproductslider';
  featuredImage?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  imageURL?: Maybe<Scalars['String']>;
  productCount?: Maybe<Scalars['Int']>;
  productList?: Maybe<ProductList>;
  query: Query;
  widgetSubtitle?: Maybe<Scalars['String']>;
  widgetTitle?: Maybe<Scalars['String']>;
}


export interface PromoproductsliderProductListArgs {
  input: ProductListInput;
}

export interface ProvenanceBrandHeader extends Widget {
  __typename?: 'provenanceBrandHeader';
  brand?: Maybe<Scalars['String']>;
  brandId?: Maybe<Scalars['String']>;
  button2Text?: Maybe<Scalars['String']>;
  button2Url?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  itemAlign?: Maybe<Scalars['String']>;
  itemAlt?: Maybe<Scalars['String']>;
  itemButton?: Maybe<Scalars['String']>;
  itemImage?: Maybe<Scalars['URL']>;
  itemImageSmall?: Maybe<Scalars['URL']>;
  itemText?: Maybe<RichContent>;
  itemTitle?: Maybe<Scalars['String']>;
  itemURL?: Maybe<Scalars['String']>;
  query: Query;
  textAlign?: Maybe<Scalars['String']>;
  transcript?: Maybe<RichContent>;
  videoTitle?: Maybe<Scalars['String']>;
  videoUrl?: Maybe<Scalars['String']>;
}

export interface RevieveWidget extends Widget {
  __typename?: 'revieveWidget';
  id: Scalars['ID'];
  query: Query;
}

export interface ShadeFinder extends Widget {
  __typename?: 'shadeFinder';
  buttonText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  openOnLoad?: Maybe<Scalars['String']>;
  query: Query;
  text?: Maybe<RichContent>;
  title?: Maybe<Scalars['String']>;
  widgetAlignment?: Maybe<Scalars['String']>;
}

export interface ShopTheLook extends Widget {
  __typename?: 'shopTheLook';
  altImageLarge?: Maybe<Scalars['String']>;
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  imageLarge?: Maybe<Scalars['URL']>;
  imageMedium?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  itemDescription?: Maybe<Scalars['String']>;
  itemTitle?: Maybe<Scalars['String']>;
  query: Query;
}

export interface SimpleCta extends Widget {
  __typename?: 'simpleCTA';
  CTAStyle?: Maybe<Scalars['String']>;
  CTAText?: Maybe<Scalars['String']>;
  CTAUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  title?: Maybe<Scalars['String']>;
}

export interface SimpleTextWidgetSet extends Widget {
  __typename?: 'simpleTextWidgetSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface SimpleTitleWidget extends Widget {
  __typename?: 'simpleTitleWidget';
  additionalSubtitleStyles?: Maybe<Scalars['String']>;
  additionalTitleStyles?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Simpletextwidget extends Widget {
  __typename?: 'simpletextwidget';
  id: Scalars['ID'];
  query: Query;
  text?: Maybe<RichContent>;
  textAlign?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface Simpletextwidgetwithh1 extends Widget {
  __typename?: 'simpletextwidgetwithh1';
  id: Scalars['ID'];
  query: Query;
  text?: Maybe<RichContent>;
  textAlign?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface SponsoredProducts extends Widget {
  __typename?: 'sponsoredProducts';
  ProductOne?: Maybe<ProductVariant>;
  ProductTwo?: Maybe<ProductVariant>;
  altLogoPng?: Maybe<Scalars['String']>;
  contentTheme?: Maybe<Scalars['String']>;
  ctaOne?: Maybe<Scalars['String']>;
  ctaOneAriaLabel?: Maybe<Scalars['String']>;
  ctaOneURL?: Maybe<Scalars['String']>;
  headline?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  logopngImageBG?: Maybe<Scalars['URL']>;
  logopngWhiteBG?: Maybe<Scalars['URL']>;
  query: Query;
  text?: Maybe<Scalars['String']>;
  useH1?: Maybe<Scalars['String']>;
}

export interface SponsoredProductsNew extends Widget {
  __typename?: 'sponsoredProductsNew';
  id: Scalars['ID'];
  query: Query;
  widgetVersion?: Maybe<Scalars['String']>;
}

export interface StoryStreamWidget extends Widget {
  __typename?: 'storyStreamWidget';
  id: Scalars['ID'];
  integrityHash?: Maybe<Scalars['String']>;
  layoutClass?: Maybe<Scalars['String']>;
  query: Query;
  storyStreamId?: Maybe<Scalars['String']>;
}

export interface SubscribeAndSaveInformationModal extends Widget {
  __typename?: 'subscribeAndSaveInformationModal';
  id: Scalars['ID'];
  imageAltText?: Maybe<Scalars['String']>;
  imageLarge?: Maybe<Scalars['URL']>;
  imageSmall?: Maybe<Scalars['URL']>;
  modalContent?: Maybe<RichContent>;
  modalTitle?: Maybe<Scalars['String']>;
  query: Query;
}

export interface SwatchSelectSlider extends Widget {
  __typename?: 'swatchSelectSlider';
  altTextImageFour?: Maybe<Scalars['String']>;
  altTextImageOne?: Maybe<Scalars['String']>;
  altTextImageThree?: Maybe<Scalars['String']>;
  altTextImageTwo?: Maybe<Scalars['String']>;
  altTextLogoImage?: Maybe<Scalars['String']>;
  altTextThumbnailImageFour?: Maybe<Scalars['String']>;
  altTextThumbnailImageOne?: Maybe<Scalars['String']>;
  altTextThumbnailImageThree?: Maybe<Scalars['String']>;
  altTextThumbnailImageTwo?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['String']>;
  cta?: Maybe<Scalars['String']>;
  ctaLink?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageFourLink?: Maybe<Scalars['String']>;
  imageFourPath?: Maybe<Scalars['URL']>;
  imageOneLink?: Maybe<Scalars['String']>;
  imageOnePath?: Maybe<Scalars['URL']>;
  imageThreeLink?: Maybe<Scalars['String']>;
  imageThreePath?: Maybe<Scalars['URL']>;
  imageTwoLink?: Maybe<Scalars['String']>;
  imageTwoPath?: Maybe<Scalars['URL']>;
  info?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkText?: Maybe<Scalars['String']>;
  logoImagePath?: Maybe<Scalars['URL']>;
  parentWidgetLink?: Maybe<Scalars['String']>;
  query: Query;
  thumbnailImageFourPath?: Maybe<Scalars['URL']>;
  thumbnailImageOnePath?: Maybe<Scalars['URL']>;
  thumbnailImageThreePath?: Maybe<Scalars['URL']>;
  thumbnailImageTwoPath?: Maybe<Scalars['URL']>;
  titleFour?: Maybe<Scalars['String']>;
  titleOne?: Maybe<Scalars['String']>;
  titleThree?: Maybe<Scalars['String']>;
  titleTwo?: Maybe<Scalars['String']>;
}

export interface SwatchSelectSliderSet extends Widget {
  __typename?: 'swatchSelectSliderSet';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
}

export interface TrustReinforcementContainer extends Widget {
  __typename?: 'trustReinforcementContainer';
  banners?: Maybe<Array<Maybe<Widget>>>;
  id: Scalars['ID'];
  query: Query;
  showStockInformation?: Maybe<Scalars['Boolean']>;
}

export interface TrustReinforcementSection extends Widget {
  __typename?: 'trustReinforcementSection';
  icon?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  modalBody?: Maybe<RichContent>;
  modalTitle?: Maybe<Scalars['String']>;
  query: Query;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
}

export interface VideoEditorial extends Widget {
  __typename?: 'videoEditorial';
  alignment?: Maybe<Scalars['String']>;
  ctaLink?: Maybe<Scalars['URL']>;
  ctaText?: Maybe<Scalars['String']>;
  desktopViewMode?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  query: Query;
  subtitle?: Maybe<RichContent>;
  thumbnail?: Maybe<Scalars['URL']>;
  title?: Maybe<Scalars['String']>;
}

export type BasketContentsFragment = { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> };

export type PageWidgetsClientFragment = { __typename?: 'Page', widgets?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner' } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner' } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget', id: string, title?: string | null, descriptionHtml?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, productList?: { __typename?: 'ProductList', total: number, hasMore: boolean, facets: Array<{ __typename: 'RangedFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'RangedFacetOption', displayName: any, from?: number | null, to?: number | null, matchedProductCount: number }> } | { __typename: 'SimpleFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'SimpleFacetOption', optionName: string, displayName: any, matchedProductCount: number }> } | { __typename: 'SliderFacet', facetName: string, facetHeader: any, minValue: number, maxValue: number }>, products: Array<{ __typename?: 'Product', sku: any, url: any, title: string, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue' } }>, options: Array<{ __typename?: 'VariantOption', key: string, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }> }>, images: Array<{ __typename?: 'ProductImage', largeProduct?: any | null, zoom?: any | null, original?: any | null }>, marketedSpecialOffer?: { __typename?: 'ProductMarketedSpecialOffer', title?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, description?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, landingPageLink?: { __typename?: 'Hyperlink', text: any, url: any } | null } | null }> } | null } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' }> | null };

export type PageWidgetsServerFragment = { __typename?: 'Page', widgets?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer', id: string, heading?: string | null, title?: string | null, titlePosition?: string | null, banners?: Array<{ __typename?: 'AccordionWidget', title?: string | null, content?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename?: 'AccordionWidgetContainer' } | { __typename?: 'BMICalculator' } | { __typename?: 'BMICalculatorV2' } | { __typename?: 'BrandsPageWidget' } | { __typename?: 'BuildYourOwnBundleProductList' } | { __typename?: 'CriteoSponsoredBannerAds' } | { __typename?: 'DeliveryInfoWidget' } | { __typename?: 'DeliveryInformationWidget' } | { __typename?: 'DynamicReferralWidget' } | { __typename?: 'Easiware' } | { __typename?: 'EditorialWidget' } | { __typename?: 'EmailReEngagementModal' } | { __typename?: 'FastTrackBanner' } | { __typename?: 'FoundationFinderLandingPageWidget' } | { __typename?: 'GlobalAboutUsVideo' } | { __typename?: 'GlobalAccreditationIcon' } | { __typename?: 'GlobalAccreditationIconCollection' } | { __typename?: 'GlobalBrandLogos' } | { __typename?: 'GlobalBuyingRightNow' } | { __typename?: 'GlobalBuyingRightNowManualProductURL' } | { __typename?: 'GlobalCardScrollerCard' } | { __typename?: 'GlobalCardScrollerSet' } | { __typename?: 'GlobalDispatchAndDateCountdownWidget' } | { __typename?: 'GlobalEditorialWithFeature' } | { __typename?: 'GlobalFooterAccreditationIcons' } | { __typename?: 'GlobalFooterContactUs' } | { __typename?: 'GlobalFourBestSellers' } | { __typename?: 'GlobalFourButtonLink' } | { __typename?: 'GlobalFourItemEditorial' } | { __typename?: 'GlobalGeneralImageBanner' } | { __typename?: 'GlobalHelpCentreAccordion' } | { __typename?: 'GlobalHelpCentreAccordion2' } | { __typename?: 'GlobalHelpCentreAccordionCollection' } | { __typename?: 'GlobalHelpCentreCollection' } | { __typename?: 'GlobalHeroCTABanner' } | { __typename?: 'GlobalImageCard' } | { __typename?: 'GlobalImageCardSet' } | { __typename?: 'GlobalMultiButton' } | { __typename?: 'GlobalPrimaryBanner' } | { __typename?: 'GlobalPrimaryBannerWithList' } | { __typename?: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename?: 'GlobalProductCardScroller' } | { __typename?: 'GlobalScalableLogos' } | { __typename?: 'GlobalSectionPeek' } | { __typename?: 'GlobalSetAndromeda' } | { __typename?: 'GlobalSimpleTextCTAWidget' } | { __typename?: 'GlobalSixItemCategories' } | { __typename?: 'GlobalSocialIcon' } | { __typename?: 'GlobalSocialIconCollection' } | { __typename?: 'GlobalSocialIconCollectionv2' } | { __typename?: 'GlobalSocialIconv2' } | { __typename?: 'GlobalStripBanner' } | { __typename?: 'GlobalSubscriptionOptions' } | { __typename?: 'GlobalTabbedWidgetSet' } | { __typename?: 'GlobalThreeItemEditorial' } | { __typename?: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename?: 'GlobalTransformationSlider' } | { __typename?: 'GlobalTrendingHashtagBlock' } | { __typename?: 'GlobalTrendingHashtagCollection' } | { __typename?: 'GlobalTwoBestSellers' } | { __typename?: 'GlobalTwoItemEditorial' } | { __typename?: 'GlobalTwoItemImageTextBlock' } | { __typename?: 'GlobalTwoItemImageTextCTA' } | { __typename?: 'GlobalTwoItemImageTextCTA3070' } | { __typename?: 'GlobalUGCCarousel' } | { __typename?: 'GlobalVideoGallery' } | { __typename?: 'GlobalVideoHeroBannerWidget' } | { __typename?: 'GlobalVideoTextImageCTA' } | { __typename?: 'GlobalWaitListSignUpFormResponses' } | { __typename?: 'GlobalWaitListSignUpWidget' } | { __typename?: 'GlobalWidgetSirius' } | { __typename?: 'GlobalWidgetVega' } | { __typename?: 'GlobalYoutubeGalleryItem' } | { __typename?: 'GlobalYoutubeGallerySet' } | { __typename?: 'LoyaltyHubBirthdayGift' } | { __typename?: 'LoyaltyHubTier' } | { __typename?: 'LoyaltyRewardTier' } | { __typename?: 'LoyaltyRewardTiers' } | { __typename?: 'MailingList' } | { __typename?: 'MultipleCTABanner' } | { __typename?: 'ProductListWidget' } | { __typename?: 'ResponsiveBuildYourOwnBundle' } | { __typename?: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename?: 'ResponsiveComparisonTable' } | { __typename?: 'ResponsiveComparisonTableContainer' } | { __typename?: 'ResponsiveProductBlockCarousel' } | { __typename?: 'ResponsiveProductTabs' } | { __typename?: 'ResponsiveSetSalon' } | { __typename?: 'ResponsiveSetSalonWithSlides' } | { __typename?: 'ResponsiveSliderSet' } | { __typename?: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename?: 'ResponsiveSuccessStoryWidget' } | { __typename?: 'ResponsiveTwoItemComparisonContainer' } | { __typename?: 'ResponsiveTwoItemComparisonRow' } | { __typename?: 'ResponsiveUSPBar' } | { __typename?: 'SeoProductCategory' } | { __typename?: 'SeoProductCategorySet' } | { __typename?: 'ShopTheLookHotSpot' } | { __typename?: 'TopBrandsWidget' } | { __typename?: 'TopProductCategory' } | { __typename?: 'TopProductCategorySet' } | { __typename?: 'TrustPilotCarouselWidget' } | { __typename?: 'TrustPilotWidget' } | { __typename?: 'VoucherCodesWidget' } | { __typename?: 'asymmetricGrid' } | { __typename?: 'buildyourownbundle' } | { __typename?: 'categoryItemCard' } | { __typename?: 'coverageCalculator' } | { __typename?: 'eightLinkButtonWidget' } | { __typename?: 'imageSelectCard' } | { __typename?: 'imageSelectSlider' } | { __typename?: 'improvedSearchBestSellers' } | { __typename?: 'kitBuilder' } | { __typename?: 'loyaltyRewardsList' } | { __typename?: 'loyaltyWelcomeMessage' } | { __typename?: 'multiCategoryCardSet' } | { __typename?: 'parcelLabWidget' } | { __typename?: 'promoproductslider' } | { __typename?: 'provenanceBrandHeader' } | { __typename?: 'revieveWidget' } | { __typename?: 'shadeFinder' } | { __typename?: 'shopTheLook' } | { __typename?: 'simpleCTA' } | { __typename?: 'simpleTextWidgetSet' } | { __typename?: 'simpleTitleWidget' } | { __typename?: 'simpletextwidget' } | { __typename?: 'simpletextwidgetwithh1' } | { __typename?: 'sponsoredProducts' } | { __typename?: 'sponsoredProductsNew' } | { __typename?: 'storyStreamWidget' } | { __typename?: 'subscribeAndSaveInformationModal' } | { __typename?: 'swatchSelectSlider' } | { __typename?: 'swatchSelectSliderSet' } | { __typename?: 'trustReinforcementContainer' } | { __typename?: 'trustReinforcementSection' } | { __typename?: 'videoEditorial' } | null> | null } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget', id: string } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget', content?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection', id: string, banners?: Array<{ __typename?: 'AccordionWidget' } | { __typename?: 'AccordionWidgetContainer' } | { __typename?: 'BMICalculator' } | { __typename?: 'BMICalculatorV2' } | { __typename?: 'BrandsPageWidget' } | { __typename?: 'BuildYourOwnBundleProductList' } | { __typename?: 'CriteoSponsoredBannerAds' } | { __typename?: 'DeliveryInfoWidget' } | { __typename?: 'DeliveryInformationWidget' } | { __typename?: 'DynamicReferralWidget' } | { __typename?: 'Easiware' } | { __typename?: 'EditorialWidget' } | { __typename?: 'EmailReEngagementModal' } | { __typename?: 'FastTrackBanner' } | { __typename?: 'FoundationFinderLandingPageWidget' } | { __typename?: 'GlobalAboutUsVideo' } | { __typename?: 'GlobalAccreditationIcon', id: string, imageAltText?: string | null, altText?: string | null, imagePath?: any | null, url?: string | null } | { __typename?: 'GlobalAccreditationIconCollection' } | { __typename?: 'GlobalBrandLogos' } | { __typename?: 'GlobalBuyingRightNow' } | { __typename?: 'GlobalBuyingRightNowManualProductURL' } | { __typename?: 'GlobalCardScrollerCard' } | { __typename?: 'GlobalCardScrollerSet' } | { __typename?: 'GlobalDispatchAndDateCountdownWidget' } | { __typename?: 'GlobalEditorialWithFeature' } | { __typename?: 'GlobalFooterAccreditationIcons' } | { __typename?: 'GlobalFooterContactUs' } | { __typename?: 'GlobalFourBestSellers' } | { __typename?: 'GlobalFourButtonLink' } | { __typename?: 'GlobalFourItemEditorial' } | { __typename?: 'GlobalGeneralImageBanner' } | { __typename?: 'GlobalHelpCentreAccordion' } | { __typename?: 'GlobalHelpCentreAccordion2' } | { __typename?: 'GlobalHelpCentreAccordionCollection' } | { __typename?: 'GlobalHelpCentreCollection' } | { __typename?: 'GlobalHeroCTABanner' } | { __typename?: 'GlobalImageCard' } | { __typename?: 'GlobalImageCardSet' } | { __typename?: 'GlobalMultiButton' } | { __typename?: 'GlobalPrimaryBanner' } | { __typename?: 'GlobalPrimaryBannerWithList' } | { __typename?: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename?: 'GlobalProductCardScroller' } | { __typename?: 'GlobalScalableLogos' } | { __typename?: 'GlobalSectionPeek' } | { __typename?: 'GlobalSetAndromeda' } | { __typename?: 'GlobalSimpleTextCTAWidget' } | { __typename?: 'GlobalSixItemCategories' } | { __typename?: 'GlobalSocialIcon' } | { __typename?: 'GlobalSocialIconCollection' } | { __typename?: 'GlobalSocialIconCollectionv2' } | { __typename?: 'GlobalSocialIconv2' } | { __typename?: 'GlobalStripBanner' } | { __typename?: 'GlobalSubscriptionOptions' } | { __typename?: 'GlobalTabbedWidgetSet' } | { __typename?: 'GlobalThreeItemEditorial' } | { __typename?: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename?: 'GlobalTransformationSlider' } | { __typename?: 'GlobalTrendingHashtagBlock' } | { __typename?: 'GlobalTrendingHashtagCollection' } | { __typename?: 'GlobalTwoBestSellers' } | { __typename?: 'GlobalTwoItemEditorial' } | { __typename?: 'GlobalTwoItemImageTextBlock' } | { __typename?: 'GlobalTwoItemImageTextCTA' } | { __typename?: 'GlobalTwoItemImageTextCTA3070' } | { __typename?: 'GlobalUGCCarousel' } | { __typename?: 'GlobalVideoGallery' } | { __typename?: 'GlobalVideoHeroBannerWidget' } | { __typename?: 'GlobalVideoTextImageCTA' } | { __typename?: 'GlobalWaitListSignUpFormResponses' } | { __typename?: 'GlobalWaitListSignUpWidget' } | { __typename?: 'GlobalWidgetSirius' } | { __typename?: 'GlobalWidgetVega' } | { __typename?: 'GlobalYoutubeGalleryItem' } | { __typename?: 'GlobalYoutubeGallerySet' } | { __typename?: 'LoyaltyHubBirthdayGift' } | { __typename?: 'LoyaltyHubTier' } | { __typename?: 'LoyaltyRewardTier' } | { __typename?: 'LoyaltyRewardTiers' } | { __typename?: 'MailingList' } | { __typename?: 'MultipleCTABanner' } | { __typename?: 'ProductListWidget' } | { __typename?: 'ResponsiveBuildYourOwnBundle' } | { __typename?: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename?: 'ResponsiveComparisonTable' } | { __typename?: 'ResponsiveComparisonTableContainer' } | { __typename?: 'ResponsiveProductBlockCarousel' } | { __typename?: 'ResponsiveProductTabs' } | { __typename?: 'ResponsiveSetSalon' } | { __typename?: 'ResponsiveSetSalonWithSlides' } | { __typename?: 'ResponsiveSliderSet' } | { __typename?: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename?: 'ResponsiveSuccessStoryWidget' } | { __typename?: 'ResponsiveTwoItemComparisonContainer' } | { __typename?: 'ResponsiveTwoItemComparisonRow' } | { __typename?: 'ResponsiveUSPBar' } | { __typename?: 'SeoProductCategory' } | { __typename?: 'SeoProductCategorySet' } | { __typename?: 'ShopTheLookHotSpot' } | { __typename?: 'TopBrandsWidget' } | { __typename?: 'TopProductCategory' } | { __typename?: 'TopProductCategorySet' } | { __typename?: 'TrustPilotCarouselWidget' } | { __typename?: 'TrustPilotWidget' } | { __typename?: 'VoucherCodesWidget' } | { __typename?: 'asymmetricGrid' } | { __typename?: 'buildyourownbundle' } | { __typename?: 'categoryItemCard' } | { __typename?: 'coverageCalculator' } | { __typename?: 'eightLinkButtonWidget' } | { __typename?: 'imageSelectCard' } | { __typename?: 'imageSelectSlider' } | { __typename?: 'improvedSearchBestSellers' } | { __typename?: 'kitBuilder' } | { __typename?: 'loyaltyRewardsList' } | { __typename?: 'loyaltyWelcomeMessage' } | { __typename?: 'multiCategoryCardSet' } | { __typename?: 'parcelLabWidget' } | { __typename?: 'promoproductslider' } | { __typename?: 'provenanceBrandHeader' } | { __typename?: 'revieveWidget' } | { __typename?: 'shadeFinder' } | { __typename?: 'shopTheLook' } | { __typename?: 'simpleCTA' } | { __typename?: 'simpleTextWidgetSet' } | { __typename?: 'simpleTitleWidget' } | { __typename?: 'simpletextwidget' } | { __typename?: 'simpletextwidgetwithh1' } | { __typename?: 'sponsoredProducts' } | { __typename?: 'sponsoredProductsNew' } | { __typename?: 'storyStreamWidget' } | { __typename?: 'subscribeAndSaveInformationModal' } | { __typename?: 'swatchSelectSlider' } | { __typename?: 'swatchSelectSliderSet' } | { __typename?: 'trustReinforcementContainer' } | { __typename?: 'trustReinforcementSection' } | { __typename?: 'videoEditorial' } | null> | null } | { __typename: 'GlobalBrandLogos', id: string, title?: string | null, titleAlign?: string | null, itemOneURL?: string | null, itemOneImage?: any | null, itemOneImageAlt?: string | null, itemTwoURL?: string | null, itemTwoImage?: any | null, itemTwoImageAlt?: string | null, itemThreeURL?: string | null, itemThreeImage?: any | null, itemThreeImageAlt?: string | null, itemFourURL?: string | null, itemFourImage?: any | null, itemFourImageAlt?: string | null, itemFiveURL?: string | null, itemFiveImage?: any | null, itemFiveImageAlt?: string | null, itemSixURL?: string | null, itemSixImage?: any | null, itemSixImageAlt?: string | null } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers', Title?: string | null, ProductOneButtonText?: string | null, ProductTwoButtonText?: string | null, ProductThreeButtonText?: string | null, ProductFourButtonText?: string | null, ProductOne?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null, ProductTwo?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null, ProductThree?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null, ProductFour?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null } | { __typename: 'GlobalFourButtonLink', buttonTextOne?: string | null, buttonTextThree?: string | null, buttonTextTwo?: string | null, buttonUrlTwo?: string | null, buttonUrlOne?: string | null, buttonUrlThree?: string | null, buttonTextFour?: string | null, buttonUrlFour?: string | null } | { __typename: 'GlobalFourItemEditorial', widgetTitle?: string | null, widgetSubtitle?: string | null, itemOneUrl?: string | null, itemOneDescription?: string | null, itemOneCTA?: string | null, itemOneTitle?: string | null, itemOneImage?: any | null, itemTwoUrl?: string | null, itemTwoDescription?: string | null, itemTwoCTA?: string | null, itemTwoTitle?: string | null, itemTwoImage?: any | null, itemThreeUrl?: string | null, itemThreeDescription?: string | null, itemThreeCTA?: string | null, itemThreeTitle?: string | null, itemThreeImage?: any | null, itemFourUrl?: string | null, itemFourDescription?: string | null, itemFourCTA?: string | null, itemFourTitle?: string | null, itemFourImage?: any | null, altItemOne?: string | null, altItemTwo?: string | null, altItemThree?: string | null, altItemFour?: string | null } | { __typename: 'GlobalGeneralImageBanner', id: string, smallImage?: any | null, mediumImage?: any | null, largeImage?: any | null, imageAltText?: string | null, linkUrl?: string | null } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet', id: string, title?: string | null, banners?: Array<{ __typename: 'AccordionWidget', id: string } | { __typename: 'AccordionWidgetContainer', id: string } | { __typename: 'BMICalculator', id: string } | { __typename: 'BMICalculatorV2', id: string } | { __typename: 'BrandsPageWidget', id: string } | { __typename: 'BuildYourOwnBundleProductList', id: string } | { __typename: 'CriteoSponsoredBannerAds', id: string } | { __typename: 'DeliveryInfoWidget', id: string } | { __typename: 'DeliveryInformationWidget', id: string } | { __typename: 'DynamicReferralWidget', id: string } | { __typename: 'Easiware', id: string } | { __typename: 'EditorialWidget', id: string } | { __typename: 'EmailReEngagementModal', id: string } | { __typename: 'FastTrackBanner', id: string } | { __typename: 'FoundationFinderLandingPageWidget', id: string } | { __typename: 'GlobalAboutUsVideo', id: string } | { __typename: 'GlobalAccreditationIcon', id: string } | { __typename: 'GlobalAccreditationIconCollection', id: string } | { __typename: 'GlobalBrandLogos', id: string } | { __typename: 'GlobalBuyingRightNow', id: string } | { __typename: 'GlobalBuyingRightNowManualProductURL', id: string } | { __typename: 'GlobalCardScrollerCard', id: string } | { __typename: 'GlobalCardScrollerSet', id: string } | { __typename: 'GlobalDispatchAndDateCountdownWidget', id: string } | { __typename: 'GlobalEditorialWithFeature', id: string } | { __typename: 'GlobalFooterAccreditationIcons', id: string } | { __typename: 'GlobalFooterContactUs', id: string } | { __typename: 'GlobalFourBestSellers', id: string } | { __typename: 'GlobalFourButtonLink', id: string } | { __typename: 'GlobalFourItemEditorial', id: string } | { __typename: 'GlobalGeneralImageBanner', id: string } | { __typename: 'GlobalHelpCentreAccordion', id: string } | { __typename: 'GlobalHelpCentreAccordion2', id: string } | { __typename: 'GlobalHelpCentreAccordionCollection', id: string } | { __typename: 'GlobalHelpCentreCollection', id: string } | { __typename: 'GlobalHeroCTABanner', id: string } | { __typename: 'GlobalImageCard', image?: any | null, url?: string | null, title?: string | null, altText?: string | null, subtitle?: string | null, buttonText?: string | null, id: string } | { __typename: 'GlobalImageCardSet', id: string } | { __typename: 'GlobalMultiButton', id: string } | { __typename: 'GlobalPrimaryBanner', id: string } | { __typename: 'GlobalPrimaryBannerWithList', id: string } | { __typename: 'GlobalPrimaryBannerWithTextOverlay', id: string } | { __typename: 'GlobalProductCardScroller', id: string } | { __typename: 'GlobalScalableLogos', id: string } | { __typename: 'GlobalSectionPeek', id: string } | { __typename: 'GlobalSetAndromeda', id: string } | { __typename: 'GlobalSimpleTextCTAWidget', id: string } | { __typename: 'GlobalSixItemCategories', id: string } | { __typename: 'GlobalSocialIcon', id: string } | { __typename: 'GlobalSocialIconCollection', id: string } | { __typename: 'GlobalSocialIconCollectionv2', id: string } | { __typename: 'GlobalSocialIconv2', id: string } | { __typename: 'GlobalStripBanner', id: string } | { __typename: 'GlobalSubscriptionOptions', id: string } | { __typename: 'GlobalTabbedWidgetSet', id: string } | { __typename: 'GlobalThreeItemEditorial', id: string } | { __typename: 'GlobalThreeItemEditorialSubtitleBG', id: string } | { __typename: 'GlobalTransformationSlider', id: string } | { __typename: 'GlobalTrendingHashtagBlock', id: string } | { __typename: 'GlobalTrendingHashtagCollection', id: string } | { __typename: 'GlobalTwoBestSellers', id: string } | { __typename: 'GlobalTwoItemEditorial', id: string } | { __typename: 'GlobalTwoItemImageTextBlock', id: string } | { __typename: 'GlobalTwoItemImageTextCTA', id: string } | { __typename: 'GlobalTwoItemImageTextCTA3070', id: string } | { __typename: 'GlobalUGCCarousel', id: string } | { __typename: 'GlobalVideoGallery', id: string } | { __typename: 'GlobalVideoHeroBannerWidget', id: string } | { __typename: 'GlobalVideoTextImageCTA', id: string } | { __typename: 'GlobalWaitListSignUpFormResponses', id: string } | { __typename: 'GlobalWaitListSignUpWidget', id: string } | { __typename: 'GlobalWidgetSirius', id: string } | { __typename: 'GlobalWidgetVega', id: string } | { __typename: 'GlobalYoutubeGalleryItem', id: string } | { __typename: 'GlobalYoutubeGallerySet', id: string } | { __typename: 'LoyaltyHubBirthdayGift', id: string } | { __typename: 'LoyaltyHubTier', id: string } | { __typename: 'LoyaltyRewardTier', id: string } | { __typename: 'LoyaltyRewardTiers', id: string } | { __typename: 'MailingList', id: string } | { __typename: 'MultipleCTABanner', id: string } | { __typename: 'ProductListWidget', id: string } | { __typename: 'ResponsiveBuildYourOwnBundle', id: string } | { __typename: 'ResponsiveBuildYourOwnBundleProducts', id: string } | { __typename: 'ResponsiveComparisonTable', id: string } | { __typename: 'ResponsiveComparisonTableContainer', id: string } | { __typename: 'ResponsiveProductBlockCarousel', id: string } | { __typename: 'ResponsiveProductTabs', id: string } | { __typename: 'ResponsiveSetSalon', id: string } | { __typename: 'ResponsiveSetSalonWithSlides', id: string } | { __typename: 'ResponsiveSliderSet', id: string } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer', id: string } | { __typename: 'ResponsiveSuccessStoryWidget', id: string } | { __typename: 'ResponsiveTwoItemComparisonContainer', id: string } | { __typename: 'ResponsiveTwoItemComparisonRow', id: string } | { __typename: 'ResponsiveUSPBar', id: string } | { __typename: 'SeoProductCategory', id: string } | { __typename: 'SeoProductCategorySet', id: string } | { __typename: 'ShopTheLookHotSpot', id: string } | { __typename: 'TopBrandsWidget', id: string } | { __typename: 'TopProductCategory', id: string } | { __typename: 'TopProductCategorySet', id: string } | { __typename: 'TrustPilotCarouselWidget', id: string } | { __typename: 'TrustPilotWidget', id: string } | { __typename: 'VoucherCodesWidget', id: string } | { __typename: 'asymmetricGrid', id: string } | { __typename: 'buildyourownbundle', id: string } | { __typename: 'categoryItemCard', id: string } | { __typename: 'coverageCalculator', id: string } | { __typename: 'eightLinkButtonWidget', id: string } | { __typename: 'imageSelectCard', id: string } | { __typename: 'imageSelectSlider', id: string } | { __typename: 'improvedSearchBestSellers', id: string } | { __typename: 'kitBuilder', id: string } | { __typename: 'loyaltyRewardsList', id: string } | { __typename: 'loyaltyWelcomeMessage', id: string } | { __typename: 'multiCategoryCardSet', id: string } | { __typename: 'parcelLabWidget', id: string } | { __typename: 'promoproductslider', id: string } | { __typename: 'provenanceBrandHeader', id: string } | { __typename: 'revieveWidget', id: string } | { __typename: 'shadeFinder', id: string } | { __typename: 'shopTheLook', id: string } | { __typename: 'simpleCTA', id: string } | { __typename: 'simpleTextWidgetSet', id: string } | { __typename: 'simpleTitleWidget', id: string } | { __typename: 'simpletextwidget', id: string } | { __typename: 'simpletextwidgetwithh1', id: string } | { __typename: 'sponsoredProducts', id: string } | { __typename: 'sponsoredProductsNew', id: string } | { __typename: 'storyStreamWidget', id: string } | { __typename: 'subscribeAndSaveInformationModal', id: string } | { __typename: 'swatchSelectSlider', id: string } | { __typename: 'swatchSelectSliderSet', id: string } | { __typename: 'trustReinforcementContainer', id: string } | { __typename: 'trustReinforcementSection', id: string } | { __typename: 'videoEditorial', id: string } | null> | null } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner', id: string, altImageLarge?: string | null, imageSmall?: any | null, imageMedium?: any | null, imageLarge?: any | null, bannerURL?: string | null, headline?: string | null, subtitle?: string | null, ctaOne?: string | null, ctaOneURL?: string | null, ctaOneAriaLabel?: string | null, contentTheme?: string | null, contentAlign?: string | null, contentBoxPosition?: string | null } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget', id: string, title?: string | null, textAlign?: string | null, itemOneURL?: string | null, itemOneCTAText?: string | null, body?: string | null } | { __typename: 'GlobalSixItemCategories', id: string, title?: string | null, itemOneCTA?: string | null, itemOneLink?: string | null, itemOneImage?: any | null, itemOneTitle?: string | null, itemTwoCTA?: string | null, itemTwoLink?: string | null, itemTwoImage?: any | null, itemTwoTitle?: string | null, itemThreeCTA?: string | null, itemThreeLink?: string | null, itemThreeImage?: any | null, itemThreeTitle?: string | null, itemFourCTA?: string | null, itemFourLink?: string | null, itemFourImage?: any | null, itemFourTitle?: string | null, itemFiveCTA?: string | null, itemFiveLink?: string | null, itemFiveImage?: any | null, itemFiveTitle?: string | null, itemSixCTA?: string | null, itemSixLink?: string | null, itemSixImage?: any | null, itemSixTitle?: string | null } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner', id: string, stripBannerURL?: string | null, stripBannerText?: string | null } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial', id: string, widgetTitle?: string | null, widgetSubtitle?: string | null, itemOneUrl?: string | null, itemOneDescription?: string | null, itemOneCTAText?: string | null, itemOneTitle?: string | null, itemOneImage?: any | null, itemTwoUrl?: string | null, itemTwoDescription?: string | null, itemTwoCTAText?: string | null, itemTwoTitle?: string | null, itemTwoImage?: any | null, itemThreeUrl?: string | null, itemThreeDescription?: string | null, itemThreeCTAText?: string | null, itemThreeTitle?: string | null, itemThreeImage?: any | null, altItemOne?: string | null, altItemTwo?: string | null, altItemThree?: string | null } | { __typename: 'GlobalThreeItemEditorialSubtitleBG', id: string, itemOneUrl?: string | null, itemOneImage?: any | null, itemOneTitle?: string | null, itemOneAltText?: string | null, itemOneCTAText?: string | null, itemOneSubtitle?: string | null, itemOneDescription?: string | null, itemOneSubtitleBGColour?: string | null, itemTwoUrl?: string | null, itemTwoImage?: any | null, itemTwoTitle?: string | null, itemTwoAltText?: string | null, itemTwoCTAText?: string | null, itemTwoSubtitle?: string | null, itemTwoDescription?: string | null, itemTwoSubtitleBGColour?: string | null, itemThreeUrl?: string | null, itemThreeImage?: any | null, itemThreeTitle?: string | null, itemThreeCTAText?: string | null, itemThreeAltText?: string | null, itemThreeSubtitle?: string | null, itemThreeDescription?: string | null, itemThreeSubtitleBGColour?: string | null } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial', id: string, widgetTitle?: string | null, widgetSubtitle?: string | null, itemOneURL?: string | null, itemOneDescription?: string | null, itemOneCTAText?: string | null, itemOneTitle?: string | null, itemOneImage?: any | null, itemTwoURL?: string | null, itemTwoDescription?: string | null, itemTwoCTAText?: string | null, itemTwoTitle?: string | null, itemTwoImage?: any | null, altItemOne?: string | null, altItemTwo?: string | null } | { __typename: 'GlobalTwoItemImageTextBlock', itemImage?: any | null, itemTitle?: string | null, itemAlign?: string | null, itemAlt?: string | null, itemButton?: string | null, itemURL?: string | null, itemText?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget', id: string, title?: string | null, descriptionHtml?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, productList?: { __typename?: 'ProductList', total: number, facets: Array<{ __typename: 'RangedFacet', facetName: string, facetHeader: any } | { __typename: 'SimpleFacet', facetName: string, facetHeader: any } | { __typename: 'SliderFacet', facetName: string, facetHeader: any, minValue: number, maxValue: number }> } | null } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet', id: string, isBulletNavigationHidden?: string | null, isAutoSlideOn?: string | null, slideDuration?: number | null, banners?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner', headline?: string | null, id: string, ctaTwoURL?: string | null, ctaTwoAriaLabel?: string | null, ctaTwo?: string | null, ctaOne?: string | null, ctaOneURL?: string | null, ctaOneAriaLabel?: string | null, imageSmall?: any | null, imageMedium?: any | null, imageLarge?: any | null, contentTheme?: string | null, contentAlign?: string | null, bannerURL?: string | null, altLogoPng?: string | null, useH1?: string | null, subtitle?: string | null, contentBoxPosition?: string | null, altImageLarge?: string | null } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner' } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget' } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' } | null> | null } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet', showMore?: string | null, showDiscoverTag?: string | null, DiscoverTitle?: string | null, banners?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner' } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner' } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget' } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory', id: string, buttonStyle?: string | null, topProductCategoryUrl?: string | null, topProductCategoryName?: string | null } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' } | null> | null } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet', id: string, banners?: Array<{ __typename?: 'AccordionWidget' } | { __typename?: 'AccordionWidgetContainer' } | { __typename?: 'BMICalculator' } | { __typename?: 'BMICalculatorV2' } | { __typename?: 'BrandsPageWidget' } | { __typename?: 'BuildYourOwnBundleProductList' } | { __typename?: 'CriteoSponsoredBannerAds' } | { __typename?: 'DeliveryInfoWidget' } | { __typename?: 'DeliveryInformationWidget' } | { __typename?: 'DynamicReferralWidget' } | { __typename?: 'Easiware' } | { __typename?: 'EditorialWidget' } | { __typename?: 'EmailReEngagementModal' } | { __typename?: 'FastTrackBanner' } | { __typename?: 'FoundationFinderLandingPageWidget' } | { __typename?: 'GlobalAboutUsVideo' } | { __typename?: 'GlobalAccreditationIcon' } | { __typename?: 'GlobalAccreditationIconCollection' } | { __typename?: 'GlobalBrandLogos' } | { __typename?: 'GlobalBuyingRightNow' } | { __typename?: 'GlobalBuyingRightNowManualProductURL' } | { __typename?: 'GlobalCardScrollerCard' } | { __typename?: 'GlobalCardScrollerSet' } | { __typename?: 'GlobalDispatchAndDateCountdownWidget' } | { __typename?: 'GlobalEditorialWithFeature' } | { __typename?: 'GlobalFooterAccreditationIcons' } | { __typename?: 'GlobalFooterContactUs' } | { __typename?: 'GlobalFourBestSellers' } | { __typename?: 'GlobalFourButtonLink' } | { __typename?: 'GlobalFourItemEditorial' } | { __typename?: 'GlobalGeneralImageBanner' } | { __typename?: 'GlobalHelpCentreAccordion' } | { __typename?: 'GlobalHelpCentreAccordion2' } | { __typename?: 'GlobalHelpCentreAccordionCollection' } | { __typename?: 'GlobalHelpCentreCollection' } | { __typename?: 'GlobalHeroCTABanner' } | { __typename?: 'GlobalImageCard' } | { __typename?: 'GlobalImageCardSet' } | { __typename?: 'GlobalMultiButton' } | { __typename?: 'GlobalPrimaryBanner' } | { __typename?: 'GlobalPrimaryBannerWithList' } | { __typename?: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename?: 'GlobalProductCardScroller' } | { __typename?: 'GlobalScalableLogos' } | { __typename?: 'GlobalSectionPeek' } | { __typename?: 'GlobalSetAndromeda' } | { __typename?: 'GlobalSimpleTextCTAWidget' } | { __typename?: 'GlobalSixItemCategories' } | { __typename?: 'GlobalSocialIcon' } | { __typename?: 'GlobalSocialIconCollection' } | { __typename?: 'GlobalSocialIconCollectionv2' } | { __typename?: 'GlobalSocialIconv2' } | { __typename?: 'GlobalStripBanner' } | { __typename?: 'GlobalSubscriptionOptions' } | { __typename?: 'GlobalTabbedWidgetSet' } | { __typename?: 'GlobalThreeItemEditorial' } | { __typename?: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename?: 'GlobalTransformationSlider' } | { __typename?: 'GlobalTrendingHashtagBlock' } | { __typename?: 'GlobalTrendingHashtagCollection' } | { __typename?: 'GlobalTwoBestSellers' } | { __typename?: 'GlobalTwoItemEditorial' } | { __typename?: 'GlobalTwoItemImageTextBlock' } | { __typename?: 'GlobalTwoItemImageTextCTA' } | { __typename?: 'GlobalTwoItemImageTextCTA3070' } | { __typename?: 'GlobalUGCCarousel' } | { __typename?: 'GlobalVideoGallery' } | { __typename?: 'GlobalVideoHeroBannerWidget' } | { __typename?: 'GlobalVideoTextImageCTA' } | { __typename?: 'GlobalWaitListSignUpFormResponses' } | { __typename?: 'GlobalWaitListSignUpWidget' } | { __typename?: 'GlobalWidgetSirius' } | { __typename?: 'GlobalWidgetVega' } | { __typename?: 'GlobalYoutubeGalleryItem' } | { __typename?: 'GlobalYoutubeGallerySet' } | { __typename?: 'LoyaltyHubBirthdayGift' } | { __typename?: 'LoyaltyHubTier' } | { __typename?: 'LoyaltyRewardTier' } | { __typename?: 'LoyaltyRewardTiers' } | { __typename?: 'MailingList' } | { __typename?: 'MultipleCTABanner' } | { __typename?: 'ProductListWidget' } | { __typename?: 'ResponsiveBuildYourOwnBundle' } | { __typename?: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename?: 'ResponsiveComparisonTable' } | { __typename?: 'ResponsiveComparisonTableContainer' } | { __typename?: 'ResponsiveProductBlockCarousel' } | { __typename?: 'ResponsiveProductTabs' } | { __typename?: 'ResponsiveSetSalon' } | { __typename?: 'ResponsiveSetSalonWithSlides' } | { __typename?: 'ResponsiveSliderSet' } | { __typename?: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename?: 'ResponsiveSuccessStoryWidget' } | { __typename?: 'ResponsiveTwoItemComparisonContainer' } | { __typename?: 'ResponsiveTwoItemComparisonRow' } | { __typename?: 'ResponsiveUSPBar' } | { __typename?: 'SeoProductCategory' } | { __typename?: 'SeoProductCategorySet' } | { __typename?: 'ShopTheLookHotSpot' } | { __typename?: 'TopBrandsWidget' } | { __typename?: 'TopProductCategory' } | { __typename?: 'TopProductCategorySet' } | { __typename?: 'TrustPilotCarouselWidget' } | { __typename?: 'TrustPilotWidget' } | { __typename?: 'VoucherCodesWidget' } | { __typename?: 'asymmetricGrid' } | { __typename?: 'buildyourownbundle' } | { __typename?: 'categoryItemCard' } | { __typename?: 'coverageCalculator' } | { __typename?: 'eightLinkButtonWidget' } | { __typename?: 'imageSelectCard' } | { __typename?: 'imageSelectSlider' } | { __typename?: 'improvedSearchBestSellers' } | { __typename?: 'kitBuilder' } | { __typename?: 'loyaltyRewardsList' } | { __typename?: 'loyaltyWelcomeMessage' } | { __typename?: 'multiCategoryCardSet' } | { __typename?: 'parcelLabWidget' } | { __typename?: 'promoproductslider' } | { __typename?: 'provenanceBrandHeader' } | { __typename?: 'revieveWidget' } | { __typename?: 'shadeFinder' } | { __typename?: 'shopTheLook' } | { __typename?: 'simpleCTA' } | { __typename?: 'simpleTextWidgetSet' } | { __typename?: 'simpleTitleWidget' } | { __typename?: 'simpletextwidget', id: string, title?: string | null, text?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename?: 'simpletextwidgetwithh1' } | { __typename?: 'sponsoredProducts' } | { __typename?: 'sponsoredProductsNew' } | { __typename?: 'storyStreamWidget' } | { __typename?: 'subscribeAndSaveInformationModal' } | { __typename?: 'swatchSelectSlider' } | { __typename?: 'swatchSelectSliderSet' } | { __typename?: 'trustReinforcementContainer' } | { __typename?: 'trustReinforcementSection' } | { __typename?: 'videoEditorial' } | null> | null } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget', id: string, title?: string | null, textAlign?: string | null, text?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' }> | null };

export type VariantContentFragment = { __typename?: 'ProductVariant', sku: any, title: string, inStock: boolean, availabilityMessage: any, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }>, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }> } | null, price?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename?: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename?: 'ProductContentIntValue', intValue: number } | { __typename?: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename?: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename?: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename?: 'ProductContentStringValue', stringValue: string } }> };

export type ProductContentFragment = { __typename?: 'Product', title: string, sku: any, inWishlist?: boolean | null, url: any, sizeGuide?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, marketedSpecialOffer?: { __typename?: 'ProductMarketedSpecialOffer', title?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, description?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, landingPageLink?: { __typename?: 'Hyperlink', text: any, url: any } | null } | null, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, options: Array<{ __typename?: 'VariantOption', key: string, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }> }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename: 'ProductContentIntValue', intValue: number } | { __typename: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, reviews?: { __typename?: 'ProductReviews', total: number, averageScore: number, maxScore: number, count1Score: number, count2Score: number, count3Score: number, count4Score: number, count5Score: number, reviews?: { __typename?: 'Reviews', total: number, hasMore: boolean, reviews: Array<{ __typename?: 'Review', id: string, title: any, authorName: any, verifiedPurchase: boolean, posted: any, positiveVotes?: number | null, negativeVotes?: number | null, elements: Array<{ __typename?: 'RatingReviewElement', key: string, score: number, maxScore: number } | { __typename?: 'TextReviewElement', key: string, value: string }> }> } | null } | null, variants: Array<{ __typename?: 'ProductVariant', sku: any, title: string, inStock: boolean, availabilityMessage: any, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }>, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }> } | null, price?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename?: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename?: 'ProductContentIntValue', intValue: number } | { __typename?: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename?: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename?: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename?: 'ProductContentStringValue', stringValue: string } }> }>, defaultVariant?: { __typename?: 'ProductVariant', sku: any, title: string, inStock: boolean, availabilityMessage: any, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }>, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }> } | null, price?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename?: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename?: 'ProductContentIntValue', intValue: number } | { __typename?: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename?: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename?: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename?: 'ProductContentStringValue', stringValue: string } }> } | null };

export type ProductListContentsFragment = { __typename?: 'ProductList', total: number, hasMore: boolean, facets: Array<{ __typename: 'RangedFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'RangedFacetOption', displayName: any, from?: number | null, to?: number | null, matchedProductCount: number }> } | { __typename: 'SimpleFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'SimpleFacetOption', optionName: string, displayName: any, matchedProductCount: number }> } | { __typename: 'SliderFacet', facetName: string, facetHeader: any, minValue: number, maxValue: number }>, products: Array<{ __typename?: 'Product', sku: any, url: any, title: string, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue' } }>, options: Array<{ __typename?: 'VariantOption', key: string, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }> }>, images: Array<{ __typename?: 'ProductImage', largeProduct?: any | null, zoom?: any | null, original?: any | null }>, marketedSpecialOffer?: { __typename?: 'ProductMarketedSpecialOffer', title?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, description?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, landingPageLink?: { __typename?: 'Hyperlink', text: any, url: any } | null } | null }> };

export type AddAddressMutationVariables = Exact<{
  addresseeName: Scalars['String'];
  addressLine1: Scalars['String'];
  addressLine2?: InputMaybe<Scalars['String']>;
  addressLine3?: InputMaybe<Scalars['String']>;
  addressLine4?: InputMaybe<Scalars['String']>;
  addressLine5?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  country?: Country;
  state?: InputMaybe<State>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
}>;


export type AddAddressMutation = { __typename?: 'Mutation', addAddress: string };

export type ReplaceAddressMutationVariables = Exact<{
  addresseeName: Scalars['String'];
  addressLine1: Scalars['String'];
  addressLine2?: InputMaybe<Scalars['String']>;
  addressLine3?: InputMaybe<Scalars['String']>;
  addressLine4?: InputMaybe<Scalars['String']>;
  addressLine5?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
  country: Country;
  state?: InputMaybe<State>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  companyName?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
}>;


export type ReplaceAddressMutation = { __typename?: 'Mutation', replaceAddress: string };

export type UpdateAccountSettingsMutationVariables = Exact<{
  fieldList: Array<SettingsFieldInput> | SettingsFieldInput;
}>;


export type UpdateAccountSettingsMutation = { __typename?: 'Mutation', updateAccountSettings: { __typename?: 'AccountUpdateStatus', error?: AuthenticationError | null, fieldErrors?: Array<{ __typename?: 'FormFieldValidationError', fieldName: string, validators: Array<ValidatorName>, requiredButNotProvided: boolean, invalidOption: boolean } | null> | null } };

export type UpdateEmailMutationVariables = Exact<{
  password: Scalars['String'];
  newEmail: Scalars['String'];
}>;


export type UpdateEmailMutation = { __typename?: 'Mutation', updateEmailAddress: { __typename?: 'AccountUpdateStatus', error?: AuthenticationError | null, fieldErrors?: Array<{ __typename?: 'FormFieldValidationError', fieldName: string, validators: Array<ValidatorName> } | null> | null } };

export type UpdatePasswordMutationVariables = Exact<{
  currentPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', updatePassword: { __typename?: 'PasswordUpdateStatus', error?: AuthenticationError | null, fieldErrors?: Array<{ __typename?: 'FormFieldValidationError', fieldName: string, validators: Array<ValidatorName> } | null> | null } };

export type AddSelectYourSampleMutationVariables = Exact<{
  sku: Scalars['SKU'];
  basketId: Scalars['ID'];
  selectYourSampleId: Scalars['ID'];
  tierId: Scalars['ID'];
  shippingDestination?: Country;
  currency?: Currency;
}>;


export type AddSelectYourSampleMutation = { __typename?: 'Mutation', addSelectYourSampleProductToBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type AddToWishlistMutationVariables = Exact<{
  sku: Scalars['SKU'];
}>;


export type AddToWishlistMutation = { __typename?: 'Mutation', addProductToWishlist?: boolean | null };

export type ApplyCodeToBasketMutationVariables = Exact<{
  basketId?: InputMaybe<Scalars['ID']>;
  code: Scalars['String'];
  shippingDestination?: Country;
  currency?: Currency;
}>;


export type ApplyCodeToBasketMutation = { __typename?: 'Mutation', applyCodeToBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type AddToBasketMutationVariables = Exact<{
  sku: Scalars['SKU'];
  qty: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  currency?: Currency;
  shippingDestination?: Country;
}>;


export type AddToBasketMutation = { __typename?: 'Mutation', addProductToBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type RemoveProductFromBasketMutationVariables = Exact<{
  basketId: Scalars['ID'];
  itemId: Scalars['ID'];
  currency?: Currency;
  shippingDestination?: Country;
}>;


export type RemoveProductFromBasketMutation = { __typename?: 'Mutation', removeProductFromBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type UpdateBasketQtyMutationVariables = Exact<{
  itemId: Scalars['ID'];
  qty: Scalars['Int'];
  id?: InputMaybe<Scalars['ID']>;
  currency?: Currency;
  shippingDestination?: Country;
}>;


export type UpdateBasketQtyMutation = { __typename?: 'Mutation', updateProductQuantityInBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type CancelFullOrderMutationVariables = Exact<{
  orderNumber: Scalars['OrderNumber'];
  reason: OrderCancellationReason;
}>;


export type CancelFullOrderMutation = { __typename?: 'Mutation', cancelOrder?: any | null };

export type CancelPartOrderMutationVariables = Exact<{
  orderNumber: Scalars['OrderNumber'];
  products: Array<CancelOrderProductInput> | CancelOrderProductInput;
}>;


export type CancelPartOrderMutation = { __typename?: 'Mutation', cancelOrderProducts?: any | null };

export type CancelOrderSpecialOfferGroupsMutationVariables = Exact<{
  orderNumber: Scalars['OrderNumber'];
  groups: Array<CancelOrderSpecialOfferGroupInput> | CancelOrderSpecialOfferGroupInput;
}>;


export type CancelOrderSpecialOfferGroupsMutation = { __typename?: 'Mutation', cancelOrderSpecialOfferGroups?: any | null };

export type CheckoutMutationVariables = Exact<{
  basketId: Scalars['ID'];
  currency?: Currency;
  shippingDestination?: Country;
}>;


export type CheckoutMutation = { __typename?: 'Mutation', checkout?: { __typename?: 'CheckoutStartResponse', error?: CheckoutStartError | null, checkoutUrl?: any | null } | null };

export type CheckoutWithShippingDestinationMutationVariables = Exact<{
  basketId: Scalars['ID'];
  paymentMethod: Scalars['String'];
  currency?: Currency;
  shippingDestination?: Country;
}>;


export type CheckoutWithShippingDestinationMutation = { __typename?: 'Mutation', checkout?: { __typename?: 'CheckoutStartResponse', error?: CheckoutStartError | null, checkoutUrl?: any | null } | null };

export type CreateDiscussionMutationVariables = Exact<{
  input: CreateDiscussionInput;
}>;


export type CreateDiscussionMutation = { __typename?: 'Mutation', createDiscussion: string };

export type ForgottenPasswordMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type ForgottenPasswordMutation = { __typename?: 'Mutation', forgottenPassword?: { __typename?: 'ForgottenPasswordResponse', error?: ForgottenPasswordError | null } | null };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthenticationResponse', newCustomer?: boolean | null, error?: AuthenticationError | null, fieldErrors?: Array<{ __typename?: 'FormFieldValidationError', fieldName: string, validators: Array<ValidatorName>, requiredButNotProvided: boolean, invalidOption: boolean } | null> | null, customer?: { __typename?: 'Customer', fullName: string } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout?: any | null };

export type MarkDiscussionAsReadMutationVariables = Exact<{
  discussionId: Scalars['ID'];
  latestMessage: Scalars['ID'];
}>;


export type MarkDiscussionAsReadMutation = { __typename?: 'Mutation', markDiscussionMessagesAsRead?: any | null };

export type RegistrationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  fullName: Scalars['String'];
  marketingConsent: Scalars['String'];
  marketingConsentAuditData: MarketingConsentAuditData;
  phoneNumber?: InputMaybe<Scalars['String']>;
  referralCode?: InputMaybe<Scalars['String']>;
}>;


export type RegistrationMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthenticationResponse', error?: AuthenticationError | null, fieldErrors?: Array<{ __typename?: 'FormFieldValidationError', fieldName: string } | null> | null, customer?: { __typename?: 'Customer', fullName: string, email: string } | null } };

export type DeleteAddressMutationVariables = Exact<{
  AddressId: Scalars['ID'];
}>;


export type DeleteAddressMutation = { __typename?: 'Mutation', deleteAddress?: any | null };

export type DeletePaymentCardMutationVariables = Exact<{
  cardId: Scalars['ID'];
}>;


export type DeletePaymentCardMutation = { __typename?: 'Mutation', deletePaymentCard?: any | null };

export type RemoveCodeFromBasketMutationVariables = Exact<{
  basketId?: InputMaybe<Scalars['ID']>;
  shippingDestination?: Country;
  currency?: Currency;
}>;


export type RemoveCodeFromBasketMutation = { __typename?: 'Mutation', removeCodeFromBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type RemoveFromWishlistMutationVariables = Exact<{
  sku: Scalars['SKU'];
}>;


export type RemoveFromWishlistMutation = { __typename?: 'Mutation', removeProductFromWishlist?: boolean | null };

export type RemoveSelectYourSampleFromBasketMutationVariables = Exact<{
  sku: Scalars['SKU'];
  basketId: Scalars['ID'];
  selectYourSampleId: Scalars['ID'];
  tierId: Scalars['ID'];
  shippingDestination?: Country;
  currency?: Currency;
}>;


export type RemoveSelectYourSampleFromBasketMutation = { __typename?: 'Mutation', removeSelectYourSampleProductFromBasket: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } };

export type RemoveSocialLinkMutationVariables = Exact<{
  socialLinkId: Scalars['SocialLinkID'];
}>;


export type RemoveSocialLinkMutation = { __typename?: 'Mutation', removeSocialLink?: boolean | null };

export type ReplyToDiscussionMutationVariables = Exact<{
  discussionId: Scalars['ID'];
  input: AddDiscussionMessageInput;
}>;


export type ReplyToDiscussionMutation = { __typename?: 'Mutation', replyToDiscussion: string };

export type ResetPasswordMutationVariables = Exact<{
  username: Scalars['String'];
  token: Scalars['PasswordResetToken'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'Mutation', resetPassword?: { __typename?: 'AuthenticationResponse', error?: AuthenticationError | null, fieldErrors?: Array<{ __typename?: 'FormFieldValidationError', fieldName: string } | null> | null, customer?: { __typename?: 'Customer', fullName: string, email: string } | null } | null };

export type ResolvePaymentProblemMutationVariables = Exact<{
  orderNumber: Scalars['OrderNumber'];
}>;


export type ResolvePaymentProblemMutation = { __typename?: 'Mutation', resolveOrderPaymentProblem?: { __typename?: 'CheckoutStartResponse', error?: CheckoutStartError | null, checkoutUrl?: any | null } | null };

export type UpdateMarketingPreferencesMutationVariables = Exact<{
  newValue: Scalars['Boolean'];
  messageShown: Scalars['String'];
  formIdentifier: Scalars['String'];
  formLocation: Scalars['String'];
}>;


export type UpdateMarketingPreferencesMutation = { __typename?: 'Mutation', updateMarketingPreferences?: { __typename?: 'UpdateMarketingPreferencesResponse', error?: UpdateMarketingPreferencesError | null } | null };

export type AccountSettingsFormQueryVariables = Exact<{ [key: string]: never; }>;


export type AccountSettingsFormQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', fullName: string, email: string, emailPreference?: boolean | null, socialLinks?: Array<{ __typename?: 'SocialLink', socialLinkId: any, username?: string | null, status: SocialLinkStatus, socialLoginProvider?: { __typename?: 'SocialLoginProvider', code: string, name: any, colour: string, iconUrl: string } | null }> | null } | null, accountSettingsForm: { __typename?: 'Form', identifier: string, fields: Array<{ __typename?: 'FormField', name: string, type?: FormFieldType | null, required: boolean, disabled: boolean, confirmable: boolean, defaultValue?: string | null, validators: Array<{ __typename?: 'Validator', name: ValidatorName, argument?: string | null }>, answerOptions?: Array<{ __typename?: 'AnswerOption', optionKey: string, translation?: any | null } | null> | null }> }, passwordField?: { __typename?: 'FormField', name: string, type?: FormFieldType | null, required: boolean, disabled: boolean, confirmable: boolean, defaultValue?: string | null, validators: Array<{ __typename?: 'Validator', name: ValidatorName, argument?: string | null }>, answerOptions?: Array<{ __typename?: 'AnswerOption', optionKey: string, translation?: any | null } | null> | null } | null };

export type AddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AddressesQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', addresses?: { __typename?: 'Addresses', total: number, hasMore: boolean, addresses: Array<{ __typename?: 'AddressRecord', id: string, address: { __typename?: 'Address', addresseeName: string, addressLine1: string, addressLine2?: string | null, addressLine3?: string | null, addressLine4?: string | null, addressLine5?: string | null, companyName?: string | null, postalCode: string, phoneNumber?: string | null, country: Country, state?: State | null } }> } | null } | null };

export type AttachmentConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type AttachmentConfigQuery = { __typename?: 'Query', attachmentUploaderConfig?: { __typename?: 'AttachmentUploaderConfig', uploadUrl: string, authToken: string } | null };

export type BasketQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  currency?: Currency;
  shippingDestination?: Country;
}>;


export type BasketQuery = { __typename?: 'Query', basket?: { __typename?: 'Basket', id: string, merged: boolean, chargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, standardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, discount: { __typename?: 'MoneyValue', displayValue: string, amount: string }, items: Array<{ __typename?: 'BasketItem', id: string, quantity: number, freeGift: boolean, product: { __typename?: 'ProductVariant', title: string, sku: any, product?: { __typename?: 'Product', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }> } | null, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string }> }, chargePricePerUnit: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalStandardPrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalChargePrice: { __typename?: 'MoneyValue', displayValue: string, amount: string }, totalDiscount: { __typename?: 'MoneyValue', displayValue: string }, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }> }>, appliedOffers: Array<{ __typename?: 'AppliedOffer', removeable: boolean, message: any, info?: any | null, totalBasketDiscount?: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } | null }>, messages: Array<{ __typename?: 'BasketMessage', type: BasketMessageType, message?: any | null }>, selectYourSample: Array<{ __typename?: 'SelectYourSample', id: string, title?: any | null, message?: any | null, currentAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, tiers: Array<{ __typename?: 'SelectYourSampleTier', id: string, maxSelectedProducts: number, thresholdAmountSpent: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, products: Array<{ __typename?: 'ProductVariant', sku: any, title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null }> }>, selectedProducts: Array<{ __typename?: 'ProductVariant', sku: any }> }> }>, availablePaymentOptions: Array<{ __typename?: 'AvailablePaymentOption', option: string, subOption?: string | null }> } | null };

export type CheckQueryVariables = Exact<{ [key: string]: never; }>;


export type CheckQuery = { __typename?: 'Query', check?: string | null };

export type PageClientQueryVariables = Exact<{
  handle: Scalars['PagePath'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort: ProductSort;
  facets?: Array<FacetInput> | FacetInput;
}>;


export type PageClientQuery = { __typename?: 'Query', page?: { __typename?: 'Page', title: any, metaDescription?: string | null, metaSearchKeywords: Array<string>, breadcrumbs: Array<{ __typename?: 'Breadcrumb', displayName: any, pagePath: any }>, widgets?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner' } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner' } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget', id: string, title?: string | null, descriptionHtml?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, productList?: { __typename?: 'ProductList', total: number, hasMore: boolean, facets: Array<{ __typename: 'RangedFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'RangedFacetOption', displayName: any, from?: number | null, to?: number | null, matchedProductCount: number }> } | { __typename: 'SimpleFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'SimpleFacetOption', optionName: string, displayName: any, matchedProductCount: number }> } | { __typename: 'SliderFacet', facetName: string, facetHeader: any, minValue: number, maxValue: number }>, products: Array<{ __typename?: 'Product', sku: any, url: any, title: string, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue' } }>, options: Array<{ __typename?: 'VariantOption', key: string, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }> }>, images: Array<{ __typename?: 'ProductImage', largeProduct?: any | null, zoom?: any | null, original?: any | null }>, marketedSpecialOffer?: { __typename?: 'ProductMarketedSpecialOffer', title?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, description?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, landingPageLink?: { __typename?: 'Hyperlink', text: any, url: any } | null } | null }> } | null } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' }> | null } | null };

export type PageServerQueryVariables = Exact<{
  handle: Scalars['PagePath'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort: ProductSort;
}>;


export type PageServerQuery = { __typename?: 'Query', page?: { __typename?: 'Page', title: any, metaDescription?: string | null, metaSearchKeywords: Array<string>, breadcrumbs: Array<{ __typename?: 'Breadcrumb', displayName: any, pagePath: any }>, widgets?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer', id: string, heading?: string | null, title?: string | null, titlePosition?: string | null, banners?: Array<{ __typename?: 'AccordionWidget', title?: string | null, content?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename?: 'AccordionWidgetContainer' } | { __typename?: 'BMICalculator' } | { __typename?: 'BMICalculatorV2' } | { __typename?: 'BrandsPageWidget' } | { __typename?: 'BuildYourOwnBundleProductList' } | { __typename?: 'CriteoSponsoredBannerAds' } | { __typename?: 'DeliveryInfoWidget' } | { __typename?: 'DeliveryInformationWidget' } | { __typename?: 'DynamicReferralWidget' } | { __typename?: 'Easiware' } | { __typename?: 'EditorialWidget' } | { __typename?: 'EmailReEngagementModal' } | { __typename?: 'FastTrackBanner' } | { __typename?: 'FoundationFinderLandingPageWidget' } | { __typename?: 'GlobalAboutUsVideo' } | { __typename?: 'GlobalAccreditationIcon' } | { __typename?: 'GlobalAccreditationIconCollection' } | { __typename?: 'GlobalBrandLogos' } | { __typename?: 'GlobalBuyingRightNow' } | { __typename?: 'GlobalBuyingRightNowManualProductURL' } | { __typename?: 'GlobalCardScrollerCard' } | { __typename?: 'GlobalCardScrollerSet' } | { __typename?: 'GlobalDispatchAndDateCountdownWidget' } | { __typename?: 'GlobalEditorialWithFeature' } | { __typename?: 'GlobalFooterAccreditationIcons' } | { __typename?: 'GlobalFooterContactUs' } | { __typename?: 'GlobalFourBestSellers' } | { __typename?: 'GlobalFourButtonLink' } | { __typename?: 'GlobalFourItemEditorial' } | { __typename?: 'GlobalGeneralImageBanner' } | { __typename?: 'GlobalHelpCentreAccordion' } | { __typename?: 'GlobalHelpCentreAccordion2' } | { __typename?: 'GlobalHelpCentreAccordionCollection' } | { __typename?: 'GlobalHelpCentreCollection' } | { __typename?: 'GlobalHeroCTABanner' } | { __typename?: 'GlobalImageCard' } | { __typename?: 'GlobalImageCardSet' } | { __typename?: 'GlobalMultiButton' } | { __typename?: 'GlobalPrimaryBanner' } | { __typename?: 'GlobalPrimaryBannerWithList' } | { __typename?: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename?: 'GlobalProductCardScroller' } | { __typename?: 'GlobalScalableLogos' } | { __typename?: 'GlobalSectionPeek' } | { __typename?: 'GlobalSetAndromeda' } | { __typename?: 'GlobalSimpleTextCTAWidget' } | { __typename?: 'GlobalSixItemCategories' } | { __typename?: 'GlobalSocialIcon' } | { __typename?: 'GlobalSocialIconCollection' } | { __typename?: 'GlobalSocialIconCollectionv2' } | { __typename?: 'GlobalSocialIconv2' } | { __typename?: 'GlobalStripBanner' } | { __typename?: 'GlobalSubscriptionOptions' } | { __typename?: 'GlobalTabbedWidgetSet' } | { __typename?: 'GlobalThreeItemEditorial' } | { __typename?: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename?: 'GlobalTransformationSlider' } | { __typename?: 'GlobalTrendingHashtagBlock' } | { __typename?: 'GlobalTrendingHashtagCollection' } | { __typename?: 'GlobalTwoBestSellers' } | { __typename?: 'GlobalTwoItemEditorial' } | { __typename?: 'GlobalTwoItemImageTextBlock' } | { __typename?: 'GlobalTwoItemImageTextCTA' } | { __typename?: 'GlobalTwoItemImageTextCTA3070' } | { __typename?: 'GlobalUGCCarousel' } | { __typename?: 'GlobalVideoGallery' } | { __typename?: 'GlobalVideoHeroBannerWidget' } | { __typename?: 'GlobalVideoTextImageCTA' } | { __typename?: 'GlobalWaitListSignUpFormResponses' } | { __typename?: 'GlobalWaitListSignUpWidget' } | { __typename?: 'GlobalWidgetSirius' } | { __typename?: 'GlobalWidgetVega' } | { __typename?: 'GlobalYoutubeGalleryItem' } | { __typename?: 'GlobalYoutubeGallerySet' } | { __typename?: 'LoyaltyHubBirthdayGift' } | { __typename?: 'LoyaltyHubTier' } | { __typename?: 'LoyaltyRewardTier' } | { __typename?: 'LoyaltyRewardTiers' } | { __typename?: 'MailingList' } | { __typename?: 'MultipleCTABanner' } | { __typename?: 'ProductListWidget' } | { __typename?: 'ResponsiveBuildYourOwnBundle' } | { __typename?: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename?: 'ResponsiveComparisonTable' } | { __typename?: 'ResponsiveComparisonTableContainer' } | { __typename?: 'ResponsiveProductBlockCarousel' } | { __typename?: 'ResponsiveProductTabs' } | { __typename?: 'ResponsiveSetSalon' } | { __typename?: 'ResponsiveSetSalonWithSlides' } | { __typename?: 'ResponsiveSliderSet' } | { __typename?: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename?: 'ResponsiveSuccessStoryWidget' } | { __typename?: 'ResponsiveTwoItemComparisonContainer' } | { __typename?: 'ResponsiveTwoItemComparisonRow' } | { __typename?: 'ResponsiveUSPBar' } | { __typename?: 'SeoProductCategory' } | { __typename?: 'SeoProductCategorySet' } | { __typename?: 'ShopTheLookHotSpot' } | { __typename?: 'TopBrandsWidget' } | { __typename?: 'TopProductCategory' } | { __typename?: 'TopProductCategorySet' } | { __typename?: 'TrustPilotCarouselWidget' } | { __typename?: 'TrustPilotWidget' } | { __typename?: 'VoucherCodesWidget' } | { __typename?: 'asymmetricGrid' } | { __typename?: 'buildyourownbundle' } | { __typename?: 'categoryItemCard' } | { __typename?: 'coverageCalculator' } | { __typename?: 'eightLinkButtonWidget' } | { __typename?: 'imageSelectCard' } | { __typename?: 'imageSelectSlider' } | { __typename?: 'improvedSearchBestSellers' } | { __typename?: 'kitBuilder' } | { __typename?: 'loyaltyRewardsList' } | { __typename?: 'loyaltyWelcomeMessage' } | { __typename?: 'multiCategoryCardSet' } | { __typename?: 'parcelLabWidget' } | { __typename?: 'promoproductslider' } | { __typename?: 'provenanceBrandHeader' } | { __typename?: 'revieveWidget' } | { __typename?: 'shadeFinder' } | { __typename?: 'shopTheLook' } | { __typename?: 'simpleCTA' } | { __typename?: 'simpleTextWidgetSet' } | { __typename?: 'simpleTitleWidget' } | { __typename?: 'simpletextwidget' } | { __typename?: 'simpletextwidgetwithh1' } | { __typename?: 'sponsoredProducts' } | { __typename?: 'sponsoredProductsNew' } | { __typename?: 'storyStreamWidget' } | { __typename?: 'subscribeAndSaveInformationModal' } | { __typename?: 'swatchSelectSlider' } | { __typename?: 'swatchSelectSliderSet' } | { __typename?: 'trustReinforcementContainer' } | { __typename?: 'trustReinforcementSection' } | { __typename?: 'videoEditorial' } | null> | null } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget', id: string } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget', content?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection', id: string, banners?: Array<{ __typename?: 'AccordionWidget' } | { __typename?: 'AccordionWidgetContainer' } | { __typename?: 'BMICalculator' } | { __typename?: 'BMICalculatorV2' } | { __typename?: 'BrandsPageWidget' } | { __typename?: 'BuildYourOwnBundleProductList' } | { __typename?: 'CriteoSponsoredBannerAds' } | { __typename?: 'DeliveryInfoWidget' } | { __typename?: 'DeliveryInformationWidget' } | { __typename?: 'DynamicReferralWidget' } | { __typename?: 'Easiware' } | { __typename?: 'EditorialWidget' } | { __typename?: 'EmailReEngagementModal' } | { __typename?: 'FastTrackBanner' } | { __typename?: 'FoundationFinderLandingPageWidget' } | { __typename?: 'GlobalAboutUsVideo' } | { __typename?: 'GlobalAccreditationIcon', id: string, imageAltText?: string | null, altText?: string | null, imagePath?: any | null, url?: string | null } | { __typename?: 'GlobalAccreditationIconCollection' } | { __typename?: 'GlobalBrandLogos' } | { __typename?: 'GlobalBuyingRightNow' } | { __typename?: 'GlobalBuyingRightNowManualProductURL' } | { __typename?: 'GlobalCardScrollerCard' } | { __typename?: 'GlobalCardScrollerSet' } | { __typename?: 'GlobalDispatchAndDateCountdownWidget' } | { __typename?: 'GlobalEditorialWithFeature' } | { __typename?: 'GlobalFooterAccreditationIcons' } | { __typename?: 'GlobalFooterContactUs' } | { __typename?: 'GlobalFourBestSellers' } | { __typename?: 'GlobalFourButtonLink' } | { __typename?: 'GlobalFourItemEditorial' } | { __typename?: 'GlobalGeneralImageBanner' } | { __typename?: 'GlobalHelpCentreAccordion' } | { __typename?: 'GlobalHelpCentreAccordion2' } | { __typename?: 'GlobalHelpCentreAccordionCollection' } | { __typename?: 'GlobalHelpCentreCollection' } | { __typename?: 'GlobalHeroCTABanner' } | { __typename?: 'GlobalImageCard' } | { __typename?: 'GlobalImageCardSet' } | { __typename?: 'GlobalMultiButton' } | { __typename?: 'GlobalPrimaryBanner' } | { __typename?: 'GlobalPrimaryBannerWithList' } | { __typename?: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename?: 'GlobalProductCardScroller' } | { __typename?: 'GlobalScalableLogos' } | { __typename?: 'GlobalSectionPeek' } | { __typename?: 'GlobalSetAndromeda' } | { __typename?: 'GlobalSimpleTextCTAWidget' } | { __typename?: 'GlobalSixItemCategories' } | { __typename?: 'GlobalSocialIcon' } | { __typename?: 'GlobalSocialIconCollection' } | { __typename?: 'GlobalSocialIconCollectionv2' } | { __typename?: 'GlobalSocialIconv2' } | { __typename?: 'GlobalStripBanner' } | { __typename?: 'GlobalSubscriptionOptions' } | { __typename?: 'GlobalTabbedWidgetSet' } | { __typename?: 'GlobalThreeItemEditorial' } | { __typename?: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename?: 'GlobalTransformationSlider' } | { __typename?: 'GlobalTrendingHashtagBlock' } | { __typename?: 'GlobalTrendingHashtagCollection' } | { __typename?: 'GlobalTwoBestSellers' } | { __typename?: 'GlobalTwoItemEditorial' } | { __typename?: 'GlobalTwoItemImageTextBlock' } | { __typename?: 'GlobalTwoItemImageTextCTA' } | { __typename?: 'GlobalTwoItemImageTextCTA3070' } | { __typename?: 'GlobalUGCCarousel' } | { __typename?: 'GlobalVideoGallery' } | { __typename?: 'GlobalVideoHeroBannerWidget' } | { __typename?: 'GlobalVideoTextImageCTA' } | { __typename?: 'GlobalWaitListSignUpFormResponses' } | { __typename?: 'GlobalWaitListSignUpWidget' } | { __typename?: 'GlobalWidgetSirius' } | { __typename?: 'GlobalWidgetVega' } | { __typename?: 'GlobalYoutubeGalleryItem' } | { __typename?: 'GlobalYoutubeGallerySet' } | { __typename?: 'LoyaltyHubBirthdayGift' } | { __typename?: 'LoyaltyHubTier' } | { __typename?: 'LoyaltyRewardTier' } | { __typename?: 'LoyaltyRewardTiers' } | { __typename?: 'MailingList' } | { __typename?: 'MultipleCTABanner' } | { __typename?: 'ProductListWidget' } | { __typename?: 'ResponsiveBuildYourOwnBundle' } | { __typename?: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename?: 'ResponsiveComparisonTable' } | { __typename?: 'ResponsiveComparisonTableContainer' } | { __typename?: 'ResponsiveProductBlockCarousel' } | { __typename?: 'ResponsiveProductTabs' } | { __typename?: 'ResponsiveSetSalon' } | { __typename?: 'ResponsiveSetSalonWithSlides' } | { __typename?: 'ResponsiveSliderSet' } | { __typename?: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename?: 'ResponsiveSuccessStoryWidget' } | { __typename?: 'ResponsiveTwoItemComparisonContainer' } | { __typename?: 'ResponsiveTwoItemComparisonRow' } | { __typename?: 'ResponsiveUSPBar' } | { __typename?: 'SeoProductCategory' } | { __typename?: 'SeoProductCategorySet' } | { __typename?: 'ShopTheLookHotSpot' } | { __typename?: 'TopBrandsWidget' } | { __typename?: 'TopProductCategory' } | { __typename?: 'TopProductCategorySet' } | { __typename?: 'TrustPilotCarouselWidget' } | { __typename?: 'TrustPilotWidget' } | { __typename?: 'VoucherCodesWidget' } | { __typename?: 'asymmetricGrid' } | { __typename?: 'buildyourownbundle' } | { __typename?: 'categoryItemCard' } | { __typename?: 'coverageCalculator' } | { __typename?: 'eightLinkButtonWidget' } | { __typename?: 'imageSelectCard' } | { __typename?: 'imageSelectSlider' } | { __typename?: 'improvedSearchBestSellers' } | { __typename?: 'kitBuilder' } | { __typename?: 'loyaltyRewardsList' } | { __typename?: 'loyaltyWelcomeMessage' } | { __typename?: 'multiCategoryCardSet' } | { __typename?: 'parcelLabWidget' } | { __typename?: 'promoproductslider' } | { __typename?: 'provenanceBrandHeader' } | { __typename?: 'revieveWidget' } | { __typename?: 'shadeFinder' } | { __typename?: 'shopTheLook' } | { __typename?: 'simpleCTA' } | { __typename?: 'simpleTextWidgetSet' } | { __typename?: 'simpleTitleWidget' } | { __typename?: 'simpletextwidget' } | { __typename?: 'simpletextwidgetwithh1' } | { __typename?: 'sponsoredProducts' } | { __typename?: 'sponsoredProductsNew' } | { __typename?: 'storyStreamWidget' } | { __typename?: 'subscribeAndSaveInformationModal' } | { __typename?: 'swatchSelectSlider' } | { __typename?: 'swatchSelectSliderSet' } | { __typename?: 'trustReinforcementContainer' } | { __typename?: 'trustReinforcementSection' } | { __typename?: 'videoEditorial' } | null> | null } | { __typename: 'GlobalBrandLogos', id: string, title?: string | null, titleAlign?: string | null, itemOneURL?: string | null, itemOneImage?: any | null, itemOneImageAlt?: string | null, itemTwoURL?: string | null, itemTwoImage?: any | null, itemTwoImageAlt?: string | null, itemThreeURL?: string | null, itemThreeImage?: any | null, itemThreeImageAlt?: string | null, itemFourURL?: string | null, itemFourImage?: any | null, itemFourImageAlt?: string | null, itemFiveURL?: string | null, itemFiveImage?: any | null, itemFiveImageAlt?: string | null, itemSixURL?: string | null, itemSixImage?: any | null, itemSixImageAlt?: string | null } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers', Title?: string | null, ProductOneButtonText?: string | null, ProductTwoButtonText?: string | null, ProductThreeButtonText?: string | null, ProductFourButtonText?: string | null, ProductOne?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null, ProductTwo?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null, ProductThree?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null, ProductFour?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, price?: { __typename?: 'ProductPrice', rrp: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any }, price: { __typename?: 'MoneyValue', displayValue: string, currency: Currency, amount: string, scalarValue: any } } | null } | null } | { __typename: 'GlobalFourButtonLink', buttonTextOne?: string | null, buttonTextThree?: string | null, buttonTextTwo?: string | null, buttonUrlTwo?: string | null, buttonUrlOne?: string | null, buttonUrlThree?: string | null, buttonTextFour?: string | null, buttonUrlFour?: string | null } | { __typename: 'GlobalFourItemEditorial', widgetTitle?: string | null, widgetSubtitle?: string | null, itemOneUrl?: string | null, itemOneDescription?: string | null, itemOneCTA?: string | null, itemOneTitle?: string | null, itemOneImage?: any | null, itemTwoUrl?: string | null, itemTwoDescription?: string | null, itemTwoCTA?: string | null, itemTwoTitle?: string | null, itemTwoImage?: any | null, itemThreeUrl?: string | null, itemThreeDescription?: string | null, itemThreeCTA?: string | null, itemThreeTitle?: string | null, itemThreeImage?: any | null, itemFourUrl?: string | null, itemFourDescription?: string | null, itemFourCTA?: string | null, itemFourTitle?: string | null, itemFourImage?: any | null, altItemOne?: string | null, altItemTwo?: string | null, altItemThree?: string | null, altItemFour?: string | null } | { __typename: 'GlobalGeneralImageBanner', id: string, smallImage?: any | null, mediumImage?: any | null, largeImage?: any | null, imageAltText?: string | null, linkUrl?: string | null } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet', id: string, title?: string | null, banners?: Array<{ __typename: 'AccordionWidget', id: string } | { __typename: 'AccordionWidgetContainer', id: string } | { __typename: 'BMICalculator', id: string } | { __typename: 'BMICalculatorV2', id: string } | { __typename: 'BrandsPageWidget', id: string } | { __typename: 'BuildYourOwnBundleProductList', id: string } | { __typename: 'CriteoSponsoredBannerAds', id: string } | { __typename: 'DeliveryInfoWidget', id: string } | { __typename: 'DeliveryInformationWidget', id: string } | { __typename: 'DynamicReferralWidget', id: string } | { __typename: 'Easiware', id: string } | { __typename: 'EditorialWidget', id: string } | { __typename: 'EmailReEngagementModal', id: string } | { __typename: 'FastTrackBanner', id: string } | { __typename: 'FoundationFinderLandingPageWidget', id: string } | { __typename: 'GlobalAboutUsVideo', id: string } | { __typename: 'GlobalAccreditationIcon', id: string } | { __typename: 'GlobalAccreditationIconCollection', id: string } | { __typename: 'GlobalBrandLogos', id: string } | { __typename: 'GlobalBuyingRightNow', id: string } | { __typename: 'GlobalBuyingRightNowManualProductURL', id: string } | { __typename: 'GlobalCardScrollerCard', id: string } | { __typename: 'GlobalCardScrollerSet', id: string } | { __typename: 'GlobalDispatchAndDateCountdownWidget', id: string } | { __typename: 'GlobalEditorialWithFeature', id: string } | { __typename: 'GlobalFooterAccreditationIcons', id: string } | { __typename: 'GlobalFooterContactUs', id: string } | { __typename: 'GlobalFourBestSellers', id: string } | { __typename: 'GlobalFourButtonLink', id: string } | { __typename: 'GlobalFourItemEditorial', id: string } | { __typename: 'GlobalGeneralImageBanner', id: string } | { __typename: 'GlobalHelpCentreAccordion', id: string } | { __typename: 'GlobalHelpCentreAccordion2', id: string } | { __typename: 'GlobalHelpCentreAccordionCollection', id: string } | { __typename: 'GlobalHelpCentreCollection', id: string } | { __typename: 'GlobalHeroCTABanner', id: string } | { __typename: 'GlobalImageCard', image?: any | null, url?: string | null, title?: string | null, altText?: string | null, subtitle?: string | null, buttonText?: string | null, id: string } | { __typename: 'GlobalImageCardSet', id: string } | { __typename: 'GlobalMultiButton', id: string } | { __typename: 'GlobalPrimaryBanner', id: string } | { __typename: 'GlobalPrimaryBannerWithList', id: string } | { __typename: 'GlobalPrimaryBannerWithTextOverlay', id: string } | { __typename: 'GlobalProductCardScroller', id: string } | { __typename: 'GlobalScalableLogos', id: string } | { __typename: 'GlobalSectionPeek', id: string } | { __typename: 'GlobalSetAndromeda', id: string } | { __typename: 'GlobalSimpleTextCTAWidget', id: string } | { __typename: 'GlobalSixItemCategories', id: string } | { __typename: 'GlobalSocialIcon', id: string } | { __typename: 'GlobalSocialIconCollection', id: string } | { __typename: 'GlobalSocialIconCollectionv2', id: string } | { __typename: 'GlobalSocialIconv2', id: string } | { __typename: 'GlobalStripBanner', id: string } | { __typename: 'GlobalSubscriptionOptions', id: string } | { __typename: 'GlobalTabbedWidgetSet', id: string } | { __typename: 'GlobalThreeItemEditorial', id: string } | { __typename: 'GlobalThreeItemEditorialSubtitleBG', id: string } | { __typename: 'GlobalTransformationSlider', id: string } | { __typename: 'GlobalTrendingHashtagBlock', id: string } | { __typename: 'GlobalTrendingHashtagCollection', id: string } | { __typename: 'GlobalTwoBestSellers', id: string } | { __typename: 'GlobalTwoItemEditorial', id: string } | { __typename: 'GlobalTwoItemImageTextBlock', id: string } | { __typename: 'GlobalTwoItemImageTextCTA', id: string } | { __typename: 'GlobalTwoItemImageTextCTA3070', id: string } | { __typename: 'GlobalUGCCarousel', id: string } | { __typename: 'GlobalVideoGallery', id: string } | { __typename: 'GlobalVideoHeroBannerWidget', id: string } | { __typename: 'GlobalVideoTextImageCTA', id: string } | { __typename: 'GlobalWaitListSignUpFormResponses', id: string } | { __typename: 'GlobalWaitListSignUpWidget', id: string } | { __typename: 'GlobalWidgetSirius', id: string } | { __typename: 'GlobalWidgetVega', id: string } | { __typename: 'GlobalYoutubeGalleryItem', id: string } | { __typename: 'GlobalYoutubeGallerySet', id: string } | { __typename: 'LoyaltyHubBirthdayGift', id: string } | { __typename: 'LoyaltyHubTier', id: string } | { __typename: 'LoyaltyRewardTier', id: string } | { __typename: 'LoyaltyRewardTiers', id: string } | { __typename: 'MailingList', id: string } | { __typename: 'MultipleCTABanner', id: string } | { __typename: 'ProductListWidget', id: string } | { __typename: 'ResponsiveBuildYourOwnBundle', id: string } | { __typename: 'ResponsiveBuildYourOwnBundleProducts', id: string } | { __typename: 'ResponsiveComparisonTable', id: string } | { __typename: 'ResponsiveComparisonTableContainer', id: string } | { __typename: 'ResponsiveProductBlockCarousel', id: string } | { __typename: 'ResponsiveProductTabs', id: string } | { __typename: 'ResponsiveSetSalon', id: string } | { __typename: 'ResponsiveSetSalonWithSlides', id: string } | { __typename: 'ResponsiveSliderSet', id: string } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer', id: string } | { __typename: 'ResponsiveSuccessStoryWidget', id: string } | { __typename: 'ResponsiveTwoItemComparisonContainer', id: string } | { __typename: 'ResponsiveTwoItemComparisonRow', id: string } | { __typename: 'ResponsiveUSPBar', id: string } | { __typename: 'SeoProductCategory', id: string } | { __typename: 'SeoProductCategorySet', id: string } | { __typename: 'ShopTheLookHotSpot', id: string } | { __typename: 'TopBrandsWidget', id: string } | { __typename: 'TopProductCategory', id: string } | { __typename: 'TopProductCategorySet', id: string } | { __typename: 'TrustPilotCarouselWidget', id: string } | { __typename: 'TrustPilotWidget', id: string } | { __typename: 'VoucherCodesWidget', id: string } | { __typename: 'asymmetricGrid', id: string } | { __typename: 'buildyourownbundle', id: string } | { __typename: 'categoryItemCard', id: string } | { __typename: 'coverageCalculator', id: string } | { __typename: 'eightLinkButtonWidget', id: string } | { __typename: 'imageSelectCard', id: string } | { __typename: 'imageSelectSlider', id: string } | { __typename: 'improvedSearchBestSellers', id: string } | { __typename: 'kitBuilder', id: string } | { __typename: 'loyaltyRewardsList', id: string } | { __typename: 'loyaltyWelcomeMessage', id: string } | { __typename: 'multiCategoryCardSet', id: string } | { __typename: 'parcelLabWidget', id: string } | { __typename: 'promoproductslider', id: string } | { __typename: 'provenanceBrandHeader', id: string } | { __typename: 'revieveWidget', id: string } | { __typename: 'shadeFinder', id: string } | { __typename: 'shopTheLook', id: string } | { __typename: 'simpleCTA', id: string } | { __typename: 'simpleTextWidgetSet', id: string } | { __typename: 'simpleTitleWidget', id: string } | { __typename: 'simpletextwidget', id: string } | { __typename: 'simpletextwidgetwithh1', id: string } | { __typename: 'sponsoredProducts', id: string } | { __typename: 'sponsoredProductsNew', id: string } | { __typename: 'storyStreamWidget', id: string } | { __typename: 'subscribeAndSaveInformationModal', id: string } | { __typename: 'swatchSelectSlider', id: string } | { __typename: 'swatchSelectSliderSet', id: string } | { __typename: 'trustReinforcementContainer', id: string } | { __typename: 'trustReinforcementSection', id: string } | { __typename: 'videoEditorial', id: string } | null> | null } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner', id: string, altImageLarge?: string | null, imageSmall?: any | null, imageMedium?: any | null, imageLarge?: any | null, bannerURL?: string | null, headline?: string | null, subtitle?: string | null, ctaOne?: string | null, ctaOneURL?: string | null, ctaOneAriaLabel?: string | null, contentTheme?: string | null, contentAlign?: string | null, contentBoxPosition?: string | null } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget', id: string, title?: string | null, textAlign?: string | null, itemOneURL?: string | null, itemOneCTAText?: string | null, body?: string | null } | { __typename: 'GlobalSixItemCategories', id: string, title?: string | null, itemOneCTA?: string | null, itemOneLink?: string | null, itemOneImage?: any | null, itemOneTitle?: string | null, itemTwoCTA?: string | null, itemTwoLink?: string | null, itemTwoImage?: any | null, itemTwoTitle?: string | null, itemThreeCTA?: string | null, itemThreeLink?: string | null, itemThreeImage?: any | null, itemThreeTitle?: string | null, itemFourCTA?: string | null, itemFourLink?: string | null, itemFourImage?: any | null, itemFourTitle?: string | null, itemFiveCTA?: string | null, itemFiveLink?: string | null, itemFiveImage?: any | null, itemFiveTitle?: string | null, itemSixCTA?: string | null, itemSixLink?: string | null, itemSixImage?: any | null, itemSixTitle?: string | null } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner', id: string, stripBannerURL?: string | null, stripBannerText?: string | null } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial', id: string, widgetTitle?: string | null, widgetSubtitle?: string | null, itemOneUrl?: string | null, itemOneDescription?: string | null, itemOneCTAText?: string | null, itemOneTitle?: string | null, itemOneImage?: any | null, itemTwoUrl?: string | null, itemTwoDescription?: string | null, itemTwoCTAText?: string | null, itemTwoTitle?: string | null, itemTwoImage?: any | null, itemThreeUrl?: string | null, itemThreeDescription?: string | null, itemThreeCTAText?: string | null, itemThreeTitle?: string | null, itemThreeImage?: any | null, altItemOne?: string | null, altItemTwo?: string | null, altItemThree?: string | null } | { __typename: 'GlobalThreeItemEditorialSubtitleBG', id: string, itemOneUrl?: string | null, itemOneImage?: any | null, itemOneTitle?: string | null, itemOneAltText?: string | null, itemOneCTAText?: string | null, itemOneSubtitle?: string | null, itemOneDescription?: string | null, itemOneSubtitleBGColour?: string | null, itemTwoUrl?: string | null, itemTwoImage?: any | null, itemTwoTitle?: string | null, itemTwoAltText?: string | null, itemTwoCTAText?: string | null, itemTwoSubtitle?: string | null, itemTwoDescription?: string | null, itemTwoSubtitleBGColour?: string | null, itemThreeUrl?: string | null, itemThreeImage?: any | null, itemThreeTitle?: string | null, itemThreeCTAText?: string | null, itemThreeAltText?: string | null, itemThreeSubtitle?: string | null, itemThreeDescription?: string | null, itemThreeSubtitleBGColour?: string | null } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial', id: string, widgetTitle?: string | null, widgetSubtitle?: string | null, itemOneURL?: string | null, itemOneDescription?: string | null, itemOneCTAText?: string | null, itemOneTitle?: string | null, itemOneImage?: any | null, itemTwoURL?: string | null, itemTwoDescription?: string | null, itemTwoCTAText?: string | null, itemTwoTitle?: string | null, itemTwoImage?: any | null, altItemOne?: string | null, altItemTwo?: string | null } | { __typename: 'GlobalTwoItemImageTextBlock', itemImage?: any | null, itemTitle?: string | null, itemAlign?: string | null, itemAlt?: string | null, itemButton?: string | null, itemURL?: string | null, itemText?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget', id: string, title?: string | null, descriptionHtml?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, productList?: { __typename?: 'ProductList', total: number, facets: Array<{ __typename: 'RangedFacet', facetName: string, facetHeader: any } | { __typename: 'SimpleFacet', facetName: string, facetHeader: any } | { __typename: 'SliderFacet', facetName: string, facetHeader: any, minValue: number, maxValue: number }> } | null } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet', id: string, isBulletNavigationHidden?: string | null, isAutoSlideOn?: string | null, slideDuration?: number | null, banners?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner', headline?: string | null, id: string, ctaTwoURL?: string | null, ctaTwoAriaLabel?: string | null, ctaTwo?: string | null, ctaOne?: string | null, ctaOneURL?: string | null, ctaOneAriaLabel?: string | null, imageSmall?: any | null, imageMedium?: any | null, imageLarge?: any | null, contentTheme?: string | null, contentAlign?: string | null, bannerURL?: string | null, altLogoPng?: string | null, useH1?: string | null, subtitle?: string | null, contentBoxPosition?: string | null, altImageLarge?: string | null } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner' } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget' } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' } | null> | null } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet', showMore?: string | null, showDiscoverTag?: string | null, DiscoverTitle?: string | null, banners?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner' } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner' } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget' } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory', id: string, buttonStyle?: string | null, topProductCategoryUrl?: string | null, topProductCategoryName?: string | null } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' } | null> | null } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet', id: string, banners?: Array<{ __typename?: 'AccordionWidget' } | { __typename?: 'AccordionWidgetContainer' } | { __typename?: 'BMICalculator' } | { __typename?: 'BMICalculatorV2' } | { __typename?: 'BrandsPageWidget' } | { __typename?: 'BuildYourOwnBundleProductList' } | { __typename?: 'CriteoSponsoredBannerAds' } | { __typename?: 'DeliveryInfoWidget' } | { __typename?: 'DeliveryInformationWidget' } | { __typename?: 'DynamicReferralWidget' } | { __typename?: 'Easiware' } | { __typename?: 'EditorialWidget' } | { __typename?: 'EmailReEngagementModal' } | { __typename?: 'FastTrackBanner' } | { __typename?: 'FoundationFinderLandingPageWidget' } | { __typename?: 'GlobalAboutUsVideo' } | { __typename?: 'GlobalAccreditationIcon' } | { __typename?: 'GlobalAccreditationIconCollection' } | { __typename?: 'GlobalBrandLogos' } | { __typename?: 'GlobalBuyingRightNow' } | { __typename?: 'GlobalBuyingRightNowManualProductURL' } | { __typename?: 'GlobalCardScrollerCard' } | { __typename?: 'GlobalCardScrollerSet' } | { __typename?: 'GlobalDispatchAndDateCountdownWidget' } | { __typename?: 'GlobalEditorialWithFeature' } | { __typename?: 'GlobalFooterAccreditationIcons' } | { __typename?: 'GlobalFooterContactUs' } | { __typename?: 'GlobalFourBestSellers' } | { __typename?: 'GlobalFourButtonLink' } | { __typename?: 'GlobalFourItemEditorial' } | { __typename?: 'GlobalGeneralImageBanner' } | { __typename?: 'GlobalHelpCentreAccordion' } | { __typename?: 'GlobalHelpCentreAccordion2' } | { __typename?: 'GlobalHelpCentreAccordionCollection' } | { __typename?: 'GlobalHelpCentreCollection' } | { __typename?: 'GlobalHeroCTABanner' } | { __typename?: 'GlobalImageCard' } | { __typename?: 'GlobalImageCardSet' } | { __typename?: 'GlobalMultiButton' } | { __typename?: 'GlobalPrimaryBanner' } | { __typename?: 'GlobalPrimaryBannerWithList' } | { __typename?: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename?: 'GlobalProductCardScroller' } | { __typename?: 'GlobalScalableLogos' } | { __typename?: 'GlobalSectionPeek' } | { __typename?: 'GlobalSetAndromeda' } | { __typename?: 'GlobalSimpleTextCTAWidget' } | { __typename?: 'GlobalSixItemCategories' } | { __typename?: 'GlobalSocialIcon' } | { __typename?: 'GlobalSocialIconCollection' } | { __typename?: 'GlobalSocialIconCollectionv2' } | { __typename?: 'GlobalSocialIconv2' } | { __typename?: 'GlobalStripBanner' } | { __typename?: 'GlobalSubscriptionOptions' } | { __typename?: 'GlobalTabbedWidgetSet' } | { __typename?: 'GlobalThreeItemEditorial' } | { __typename?: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename?: 'GlobalTransformationSlider' } | { __typename?: 'GlobalTrendingHashtagBlock' } | { __typename?: 'GlobalTrendingHashtagCollection' } | { __typename?: 'GlobalTwoBestSellers' } | { __typename?: 'GlobalTwoItemEditorial' } | { __typename?: 'GlobalTwoItemImageTextBlock' } | { __typename?: 'GlobalTwoItemImageTextCTA' } | { __typename?: 'GlobalTwoItemImageTextCTA3070' } | { __typename?: 'GlobalUGCCarousel' } | { __typename?: 'GlobalVideoGallery' } | { __typename?: 'GlobalVideoHeroBannerWidget' } | { __typename?: 'GlobalVideoTextImageCTA' } | { __typename?: 'GlobalWaitListSignUpFormResponses' } | { __typename?: 'GlobalWaitListSignUpWidget' } | { __typename?: 'GlobalWidgetSirius' } | { __typename?: 'GlobalWidgetVega' } | { __typename?: 'GlobalYoutubeGalleryItem' } | { __typename?: 'GlobalYoutubeGallerySet' } | { __typename?: 'LoyaltyHubBirthdayGift' } | { __typename?: 'LoyaltyHubTier' } | { __typename?: 'LoyaltyRewardTier' } | { __typename?: 'LoyaltyRewardTiers' } | { __typename?: 'MailingList' } | { __typename?: 'MultipleCTABanner' } | { __typename?: 'ProductListWidget' } | { __typename?: 'ResponsiveBuildYourOwnBundle' } | { __typename?: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename?: 'ResponsiveComparisonTable' } | { __typename?: 'ResponsiveComparisonTableContainer' } | { __typename?: 'ResponsiveProductBlockCarousel' } | { __typename?: 'ResponsiveProductTabs' } | { __typename?: 'ResponsiveSetSalon' } | { __typename?: 'ResponsiveSetSalonWithSlides' } | { __typename?: 'ResponsiveSliderSet' } | { __typename?: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename?: 'ResponsiveSuccessStoryWidget' } | { __typename?: 'ResponsiveTwoItemComparisonContainer' } | { __typename?: 'ResponsiveTwoItemComparisonRow' } | { __typename?: 'ResponsiveUSPBar' } | { __typename?: 'SeoProductCategory' } | { __typename?: 'SeoProductCategorySet' } | { __typename?: 'ShopTheLookHotSpot' } | { __typename?: 'TopBrandsWidget' } | { __typename?: 'TopProductCategory' } | { __typename?: 'TopProductCategorySet' } | { __typename?: 'TrustPilotCarouselWidget' } | { __typename?: 'TrustPilotWidget' } | { __typename?: 'VoucherCodesWidget' } | { __typename?: 'asymmetricGrid' } | { __typename?: 'buildyourownbundle' } | { __typename?: 'categoryItemCard' } | { __typename?: 'coverageCalculator' } | { __typename?: 'eightLinkButtonWidget' } | { __typename?: 'imageSelectCard' } | { __typename?: 'imageSelectSlider' } | { __typename?: 'improvedSearchBestSellers' } | { __typename?: 'kitBuilder' } | { __typename?: 'loyaltyRewardsList' } | { __typename?: 'loyaltyWelcomeMessage' } | { __typename?: 'multiCategoryCardSet' } | { __typename?: 'parcelLabWidget' } | { __typename?: 'promoproductslider' } | { __typename?: 'provenanceBrandHeader' } | { __typename?: 'revieveWidget' } | { __typename?: 'shadeFinder' } | { __typename?: 'shopTheLook' } | { __typename?: 'simpleCTA' } | { __typename?: 'simpleTextWidgetSet' } | { __typename?: 'simpleTitleWidget' } | { __typename?: 'simpletextwidget', id: string, title?: string | null, text?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename?: 'simpletextwidgetwithh1' } | { __typename?: 'sponsoredProducts' } | { __typename?: 'sponsoredProductsNew' } | { __typename?: 'storyStreamWidget' } | { __typename?: 'subscribeAndSaveInformationModal' } | { __typename?: 'swatchSelectSlider' } | { __typename?: 'swatchSelectSliderSet' } | { __typename?: 'trustReinforcementContainer' } | { __typename?: 'trustReinforcementSection' } | { __typename?: 'videoEditorial' } | null> | null } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget', id: string, title?: string | null, textAlign?: string | null, text?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', content: any }> } | null } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' }> | null } | null };

export type CreditAccountsQueryVariables = Exact<{
  currency?: Currency;
}>;


export type CreditAccountsQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', creditAccounts?: Array<{ __typename?: 'CreditAccount', currency: Currency, balance: { __typename?: 'MoneyValue', currency: Currency, amount: string }, expiringIn: { __typename?: 'MoneyValue', currency: Currency, amount: string }, actions: { __typename?: 'CreditActions', total: number, hasMore: boolean, actions: Array<{ __typename?: 'CreditAction', id: string, type: CreditActionType, status: CreditActionStatus, message?: any | null, addedAt: any, expiresAt?: any | null, amount: { __typename?: 'MoneyValue', currency: Currency, amount: string }, amountUsed: { __typename?: 'MoneyValue', currency: Currency, amount: string }, amountAvailable: { __typename?: 'MoneyValue', currency: Currency, amount: string }, order?: { __typename?: 'Order', orderNumber: any } | null }> } }> | null } | null };

export type CustomerQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomerQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', fullName: string } | null };

export type GetMessageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetMessageQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', discussions?: { __typename?: 'Discussions', discussions: Array<{ __typename?: 'Discussion', id: string, category: DiscussionCategory, status: DiscussionStatus, createdAt: any, updatedAt: any, read: boolean, selection?: { __typename?: 'DiscussionSelection', selectedOrder?: { __typename?: 'Order', orderNumber: any } | null, selectedProducts: Array<{ __typename?: 'OrderProduct', sku: any, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null }> } | null, messages: { __typename?: 'DiscussionMessages', total: number, hasMore: boolean, messages: Array<{ __typename?: 'DiscussionMessage', id: string, type: DiscussionMessageType, createdAt: any, message: any }> } }> } | null } | null };

export type GetMessagesQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetMessagesQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', discussions?: { __typename?: 'Discussions', total: number, hasMore: boolean, discussions: Array<{ __typename?: 'Discussion', id: string, category: DiscussionCategory, status: DiscussionStatus, createdAt: any, updatedAt: any, read: boolean, selection?: { __typename?: 'DiscussionSelection', selectedOrder?: { __typename?: 'Order', orderNumber: any } | null, selectedProducts: Array<{ __typename?: 'OrderProduct', sku: any, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null }> } | null, messages: { __typename?: 'DiscussionMessages', total: number, hasMore: boolean, messages: Array<{ __typename?: 'DiscussionMessage', id: string, type: DiscussionMessageType, createdAt: any, message: any }> } }> } | null } | null };

export type EmailFieldQueryVariables = Exact<{ [key: string]: never; }>;


export type EmailFieldQuery = { __typename?: 'Query', emailField?: { __typename?: 'FormField', name: string, type?: FormFieldType | null, required: boolean, confirmable: boolean, disabled: boolean, defaultValue?: string | null, validators: Array<{ __typename?: 'Validator', name: ValidatorName, argument?: string | null }>, answerOptions?: Array<{ __typename?: 'AnswerOption', optionKey: string, translation?: any | null } | null> | null } | null };

export type HeaderFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type HeaderFooterQuery = { __typename?: 'Query', header?: { __typename?: 'Header', widgets?: Array<{ __typename: 'AccordionWidget' } | { __typename: 'AccordionWidgetContainer' } | { __typename: 'BMICalculator' } | { __typename: 'BMICalculatorV2' } | { __typename: 'BrandsPageWidget' } | { __typename: 'BuildYourOwnBundleProductList' } | { __typename: 'CriteoSponsoredBannerAds' } | { __typename: 'DeliveryInfoWidget' } | { __typename: 'DeliveryInformationWidget' } | { __typename: 'DynamicReferralWidget' } | { __typename: 'Easiware' } | { __typename: 'EditorialWidget' } | { __typename: 'EmailReEngagementModal' } | { __typename: 'FastTrackBanner' } | { __typename: 'FoundationFinderLandingPageWidget' } | { __typename: 'GlobalAboutUsVideo' } | { __typename: 'GlobalAccreditationIcon' } | { __typename: 'GlobalAccreditationIconCollection' } | { __typename: 'GlobalBrandLogos' } | { __typename: 'GlobalBuyingRightNow' } | { __typename: 'GlobalBuyingRightNowManualProductURL' } | { __typename: 'GlobalCardScrollerCard' } | { __typename: 'GlobalCardScrollerSet' } | { __typename: 'GlobalDispatchAndDateCountdownWidget' } | { __typename: 'GlobalEditorialWithFeature' } | { __typename: 'GlobalFooterAccreditationIcons' } | { __typename: 'GlobalFooterContactUs' } | { __typename: 'GlobalFourBestSellers' } | { __typename: 'GlobalFourButtonLink' } | { __typename: 'GlobalFourItemEditorial' } | { __typename: 'GlobalGeneralImageBanner' } | { __typename: 'GlobalHelpCentreAccordion' } | { __typename: 'GlobalHelpCentreAccordion2' } | { __typename: 'GlobalHelpCentreAccordionCollection' } | { __typename: 'GlobalHelpCentreCollection' } | { __typename: 'GlobalHeroCTABanner' } | { __typename: 'GlobalImageCard' } | { __typename: 'GlobalImageCardSet' } | { __typename: 'GlobalMultiButton' } | { __typename: 'GlobalPrimaryBanner' } | { __typename: 'GlobalPrimaryBannerWithList' } | { __typename: 'GlobalPrimaryBannerWithTextOverlay' } | { __typename: 'GlobalProductCardScroller' } | { __typename: 'GlobalScalableLogos' } | { __typename: 'GlobalSectionPeek' } | { __typename: 'GlobalSetAndromeda' } | { __typename: 'GlobalSimpleTextCTAWidget' } | { __typename: 'GlobalSixItemCategories' } | { __typename: 'GlobalSocialIcon' } | { __typename: 'GlobalSocialIconCollection' } | { __typename: 'GlobalSocialIconCollectionv2' } | { __typename: 'GlobalSocialIconv2' } | { __typename: 'GlobalStripBanner', stripBannerText?: string | null, stripBannerURL?: string | null } | { __typename: 'GlobalSubscriptionOptions' } | { __typename: 'GlobalTabbedWidgetSet' } | { __typename: 'GlobalThreeItemEditorial' } | { __typename: 'GlobalThreeItemEditorialSubtitleBG' } | { __typename: 'GlobalTransformationSlider' } | { __typename: 'GlobalTrendingHashtagBlock' } | { __typename: 'GlobalTrendingHashtagCollection' } | { __typename: 'GlobalTwoBestSellers' } | { __typename: 'GlobalTwoItemEditorial' } | { __typename: 'GlobalTwoItemImageTextBlock' } | { __typename: 'GlobalTwoItemImageTextCTA' } | { __typename: 'GlobalTwoItemImageTextCTA3070' } | { __typename: 'GlobalUGCCarousel' } | { __typename: 'GlobalVideoGallery' } | { __typename: 'GlobalVideoHeroBannerWidget' } | { __typename: 'GlobalVideoTextImageCTA' } | { __typename: 'GlobalWaitListSignUpFormResponses' } | { __typename: 'GlobalWaitListSignUpWidget' } | { __typename: 'GlobalWidgetSirius' } | { __typename: 'GlobalWidgetVega' } | { __typename: 'GlobalYoutubeGalleryItem' } | { __typename: 'GlobalYoutubeGallerySet' } | { __typename: 'LoyaltyHubBirthdayGift' } | { __typename: 'LoyaltyHubTier' } | { __typename: 'LoyaltyRewardTier' } | { __typename: 'LoyaltyRewardTiers' } | { __typename: 'MailingList' } | { __typename: 'MultipleCTABanner' } | { __typename: 'ProductListWidget' } | { __typename: 'ResponsiveBuildYourOwnBundle' } | { __typename: 'ResponsiveBuildYourOwnBundleProducts' } | { __typename: 'ResponsiveComparisonTable' } | { __typename: 'ResponsiveComparisonTableContainer' } | { __typename: 'ResponsiveProductBlockCarousel' } | { __typename: 'ResponsiveProductTabs' } | { __typename: 'ResponsiveSetSalon' } | { __typename: 'ResponsiveSetSalonWithSlides' } | { __typename: 'ResponsiveSliderSet' } | { __typename: 'ResponsiveSuccessStoriesWidgetContainer' } | { __typename: 'ResponsiveSuccessStoryWidget' } | { __typename: 'ResponsiveTwoItemComparisonContainer' } | { __typename: 'ResponsiveTwoItemComparisonRow' } | { __typename: 'ResponsiveUSPBar' } | { __typename: 'SeoProductCategory' } | { __typename: 'SeoProductCategorySet' } | { __typename: 'ShopTheLookHotSpot' } | { __typename: 'TopBrandsWidget' } | { __typename: 'TopProductCategory' } | { __typename: 'TopProductCategorySet' } | { __typename: 'TrustPilotCarouselWidget' } | { __typename: 'TrustPilotWidget' } | { __typename: 'VoucherCodesWidget' } | { __typename: 'asymmetricGrid' } | { __typename: 'buildyourownbundle' } | { __typename: 'categoryItemCard' } | { __typename: 'coverageCalculator' } | { __typename: 'eightLinkButtonWidget' } | { __typename: 'imageSelectCard' } | { __typename: 'imageSelectSlider' } | { __typename: 'improvedSearchBestSellers' } | { __typename: 'kitBuilder' } | { __typename: 'loyaltyRewardsList' } | { __typename: 'loyaltyWelcomeMessage' } | { __typename: 'multiCategoryCardSet' } | { __typename: 'parcelLabWidget' } | { __typename: 'promoproductslider' } | { __typename: 'provenanceBrandHeader' } | { __typename: 'revieveWidget' } | { __typename: 'shadeFinder' } | { __typename: 'shopTheLook' } | { __typename: 'simpleCTA' } | { __typename: 'simpleTextWidgetSet' } | { __typename: 'simpleTitleWidget' } | { __typename: 'simpletextwidget' } | { __typename: 'simpletextwidgetwithh1' } | { __typename: 'sponsoredProducts' } | { __typename: 'sponsoredProductsNew' } | { __typename: 'storyStreamWidget' } | { __typename: 'subscribeAndSaveInformationModal' } | { __typename: 'swatchSelectSlider' } | { __typename: 'swatchSelectSliderSet' } | { __typename: 'trustReinforcementContainer' } | { __typename: 'trustReinforcementSection' } | { __typename: 'videoEditorial' }> | null, navigation?: { __typename?: 'Navigation', topLevel: Array<{ __typename?: 'NavigationItem', displayName: any, type: NavigationItemType, link?: { __typename?: 'Hyperlink', url: any, openExternally?: boolean | null, noFollow?: boolean | null, noIndex?: boolean | null } | null, image?: { __typename?: 'Image', url: any } | null, subNavigation?: Array<{ __typename?: 'NavigationItem', displayName: any, type: NavigationItemType, link?: { __typename?: 'Hyperlink', text: any, url: any, openExternally?: boolean | null, noFollow?: boolean | null } | null, image?: { __typename?: 'Image', url: any, alt?: any | null } | null, subNavigation?: Array<{ __typename?: 'NavigationItem', displayName: any, type: NavigationItemType, link?: { __typename?: 'Hyperlink', text: any, url: any, openExternally?: boolean | null, noFollow?: boolean | null } | null, image?: { __typename?: 'Image', url: any, alt?: any | null } | null }> | null }> | null }> } | null } | null, footer?: { __typename?: 'Footer', navigation?: { __typename?: 'Navigation', topLevel: Array<{ __typename?: 'NavigationItem', displayName: any, type: NavigationItemType, link?: { __typename?: 'Hyperlink', url: any, openExternally?: boolean | null, noFollow?: boolean | null, noIndex?: boolean | null } | null, image?: { __typename?: 'Image', url: any } | null, subNavigation?: Array<{ __typename?: 'NavigationItem', displayName: any, type: NavigationItemType, link?: { __typename?: 'Hyperlink', url: any, openExternally?: boolean | null, noFollow?: boolean | null } | null, image?: { __typename?: 'Image', url: any } | null }> | null }> } | null } | null };

export type MarketingConsentFormQueryVariables = Exact<{ [key: string]: never; }>;


export type MarketingConsentFormQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', fullName: string, email: string } | null, form?: { __typename?: 'Form', fields: Array<{ __typename?: 'FormField', name: string, type?: FormFieldType | null, required: boolean, confirmable: boolean, disabled: boolean, defaultValue?: string | null, answerOptions?: Array<{ __typename?: 'AnswerOption', optionKey: string, translation?: any | null } | null> | null, validators: Array<{ __typename?: 'Validator', name: ValidatorName, argument?: string | null }> }> } | null };

export type OrderDetailsQueryVariables = Exact<{
  id: Scalars['OrderNumber'];
}>;


export type OrderDetailsQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', orders?: { __typename?: 'Orders', orders: Array<{ __typename?: 'Order', cancellable: boolean, orderNumber: any, createdAt: any, status: OrderStatus, totalQuantity: number, paymentType?: string | null, paymentCard?: { __typename?: 'PaymentCard', nameOnCard: string, obfuscatedCardNumber: string, validToMonth: any, validToYear: any, type?: PaymentCardType | null } | null, products: Array<{ __typename?: 'OrderProduct', cancellable: boolean, sku: any, quantity?: number | null, dispatchDate?: any | null, deliveryMethod?: any | null, trackingUrls?: Array<any> | null, status?: OrderStatus | null, specialOfferGroup?: any | null, cancelledQuantity?: number | null, pendingCancelQuantity?: number | null, cancellableQuantity?: number | null, dispatchedQuantity?: number | null, refundedQuantity?: number | null, pendingRefundQuantity?: number | null, replacementQuantity?: number | null, pendingReplaceQuantity?: number | null, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null } | null, costPerUnit?: { __typename?: 'MoneyValue', displayValue: string } | null, deliveryDateRange?: { __typename?: 'DateRange', from?: any | null, to?: any | null } | null }>, deliveryCost?: { __typename?: 'MoneyValue', currency: Currency, amount: string } | null, totalCost: { __typename?: 'MoneyValue', displayValue: string }, discounts?: Array<{ __typename?: 'OrderDiscount', message?: any | null, amount: { __typename?: 'MoneyValue', currency: Currency, amount: string } }> | null, deliveryAddress?: { __typename?: 'Address', addresseeName: string, addressLine1: string, addressLine2?: string | null, addressLine3?: string | null, addressLine4?: string | null, addressLine5?: string | null, postalCode: string, country: Country } | null, discussions?: { __typename?: 'Discussions', discussions: Array<{ __typename?: 'Discussion', id: string, category: DiscussionCategory, status: DiscussionStatus, createdAt: any, updatedAt: any, read: boolean, selection?: { __typename?: 'DiscussionSelection', selectedOrder?: { __typename?: 'Order', orderNumber: any } | null } | null, messages: { __typename?: 'DiscussionMessages', total: number, hasMore: boolean, messages: Array<{ __typename?: 'DiscussionMessage', id: string, type: DiscussionMessageType, createdAt: any, message: any }> } }> } | null }> } | null } | null };

export type OrderHistoryQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type OrderHistoryQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', fullName: string, latest?: { __typename?: 'Orders', hasMore: boolean, total?: number | null, orders: Array<{ __typename?: 'Order', orderNumber: any, createdAt: any, status: OrderStatus, products: Array<{ __typename?: 'OrderProduct', sku: any, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null } | null, deliveryDateRange?: { __typename?: 'DateRange', from?: any | null, to?: any | null } | null }>, totalCost: { __typename?: 'MoneyValue', displayValue: string } }> } | null, active?: { __typename?: 'Orders', hasMore: boolean, total?: number | null, orders: Array<{ __typename?: 'Order', orderNumber: any, createdAt: any, status: OrderStatus, products: Array<{ __typename?: 'OrderProduct', sku: any, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null }>, totalCost: { __typename?: 'MoneyValue', displayValue: string } }> } | null, completed?: { __typename?: 'Orders', hasMore: boolean, total?: number | null, orders: Array<{ __typename?: 'Order', orderNumber: any, createdAt: any, status: OrderStatus, products: Array<{ __typename?: 'OrderProduct', sku: any, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null } | null }>, totalCost: { __typename?: 'MoneyValue', displayValue: string } }> } | null } | null };

export type SavedCardsQueryVariables = Exact<{ [key: string]: never; }>;


export type SavedCardsQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', paymentCards?: { __typename?: 'PaymentCards', total: number, hasMore: boolean, cards: Array<{ __typename?: 'PaymentCardRecord', id: string, card: { __typename?: 'PaymentCard', nameOnCard: string, obfuscatedCardNumber: string, validFromMonth?: any | null, validFromYear?: any | null, validToMonth: any, validToYear: any, issueNumber?: string | null, type?: PaymentCardType | null } }> } | null } | null };

export type ProductQueryVariables = Exact<{
  sku: Scalars['SKU'];
  offset?: Scalars['Int'];
  limit?: Scalars['Int'];
}>;


export type ProductQuery = { __typename?: 'Query', product?: { __typename?: 'Product', title: string, sku: any, inWishlist?: boolean | null, url: any, sizeGuide?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, marketedSpecialOffer?: { __typename?: 'ProductMarketedSpecialOffer', title?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, description?: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } | null, landingPageLink?: { __typename?: 'Hyperlink', text: any, url: any } | null } | null, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, options: Array<{ __typename?: 'VariantOption', key: string, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }> }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename: 'ProductContentIntValue', intValue: number } | { __typename: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, reviews?: { __typename?: 'ProductReviews', total: number, averageScore: number, maxScore: number, count1Score: number, count2Score: number, count3Score: number, count4Score: number, count5Score: number, reviews?: { __typename?: 'Reviews', total: number, hasMore: boolean, reviews: Array<{ __typename?: 'Review', id: string, title: any, authorName: any, verifiedPurchase: boolean, posted: any, positiveVotes?: number | null, negativeVotes?: number | null, elements: Array<{ __typename?: 'RatingReviewElement', key: string, score: number, maxScore: number } | { __typename?: 'TextReviewElement', key: string, value: string }> }> } | null } | null, variants: Array<{ __typename?: 'ProductVariant', sku: any, title: string, inStock: boolean, availabilityMessage: any, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }>, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }> } | null, price?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename?: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename?: 'ProductContentIntValue', intValue: number } | { __typename?: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename?: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename?: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename?: 'ProductContentStringValue', stringValue: string } }> }>, defaultVariant?: { __typename?: 'ProductVariant', sku: any, title: string, inStock: boolean, availabilityMessage: any, choices: Array<{ __typename?: 'OptionChoice', optionKey: string, key: string, colour?: any | null, title: string }>, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }>, product?: { __typename?: 'Product', url: any, images: Array<{ __typename?: 'ProductImage', original?: any | null, thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null }> } | null, price?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string } } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename?: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename?: 'ProductContentIntValue', intValue: number } | { __typename?: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename?: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename?: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename?: 'ProductContentStringValue', stringValue: string } }> } | null } | null };

export type RecentOrderHistoryQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type RecentOrderHistoryQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', orders?: { __typename?: 'Orders', hasMore: boolean, total?: number | null, orders: Array<{ __typename?: 'Order', orderNumber: any, createdAt: any, status: OrderStatus, products: Array<{ __typename?: 'OrderProduct', sku: any, productVariant?: { __typename?: 'ProductVariant', title: string, images: Array<{ __typename?: 'ProductImage', original?: any | null }> } | null, deliveryDateRange?: { __typename?: 'DateRange', from?: any | null, to?: any | null } | null }>, totalCost: { __typename?: 'MoneyValue', displayValue: string } }> } | null } | null };

export type RegisterFormQueryVariables = Exact<{ [key: string]: never; }>;


export type RegisterFormQuery = { __typename?: 'Query', form?: { __typename?: 'Form', fields: Array<{ __typename?: 'FormField', name: string, type?: FormFieldType | null, required: boolean, confirmable: boolean, disabled: boolean, defaultValue?: string | null, answerOptions?: Array<{ __typename?: 'AnswerOption', optionKey: string, translation?: any | null } | null> | null, validators: Array<{ __typename?: 'Validator', name: ValidatorName, argument?: string | null }> }> } | null };

export type ReviewsQueryVariables = Exact<{
  sku: Scalars['SKU'];
  offset?: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type ReviewsQuery = { __typename?: 'Query', product?: { __typename?: 'Product', reviews?: { __typename?: 'ProductReviews', total: number, averageScore: number, maxScore: number, count1Score: number, count2Score: number, count3Score: number, count4Score: number, count5Score: number, reviews?: { __typename?: 'Reviews', total: number, hasMore: boolean, reviews: Array<{ __typename?: 'Review', id: string, title: any, authorName: any, verifiedPurchase: boolean, posted: any, positiveVotes?: number | null, negativeVotes?: number | null, elements: Array<{ __typename?: 'RatingReviewElement', key: string, score: number, maxScore: number } | { __typename?: 'TextReviewElement', key: string, value: string }> }> } | null } | null } | null };

export type SearchQueryVariables = Exact<{
  query: Scalars['String'];
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  sort: ProductSort;
  facets?: Array<FacetInput> | FacetInput;
}>;


export type SearchQuery = { __typename?: 'Query', search?: { __typename?: 'ProductList', total: number, hasMore: boolean, correctedQuery?: any | null, facets: Array<{ __typename: 'RangedFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'RangedFacetOption', displayName: any, from?: number | null, to?: number | null, matchedProductCount: number }> } | { __typename: 'SimpleFacet', facetName: string, facetHeader: any, options: Array<{ __typename?: 'SimpleFacetOption', optionName: string, displayName: any, matchedProductCount: number }> } | { __typename: 'SliderFacet', facetName: string, facetHeader: any, minValue: number, maxValue: number }>, products: Array<{ __typename?: 'Product', url: any, title: string, sku: any, images: Array<{ __typename?: 'ProductImage', thumbnail?: any | null, largeProduct?: any | null, zoom?: any | null, original?: any | null }>, reviews?: { __typename?: 'ProductReviews', total: number, averageScore: number } | null, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue', intListValue: Array<number> } | { __typename: 'ProductContentIntValue', intValue: number } | { __typename: 'ProductContentRichContentListValue', richContentListValue: Array<{ __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> }> } | { __typename: 'ProductContentRichContentValue', richContentValue: { __typename?: 'RichContent', content: Array<{ __typename?: 'RichContentItem', type: RichContentType, content: any }> } } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue', stringValue: string } }>, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null }> } | null };

export type SearchProductSkusQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type SearchProductSkusQuery = { __typename?: 'Query', search?: { __typename?: 'ProductList', hasMore: boolean, products: Array<{ __typename?: 'Product', sku: any }> } | null };

export type SiteSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteSettingsQuery = { __typename?: 'Query', supportedCurrencies: Array<Currency>, supportedShippingDestinations: Array<Country> };

export type SitemapPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type SitemapPathsQuery = { __typename?: 'Query', sitemap: { __typename?: 'Sitemap', paths: Array<any> } };

export type SocialProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type SocialProvidersQuery = { __typename?: 'Query', socialLoginProviders?: Array<{ __typename?: 'SocialLoginProvider', name: any, code: string, loginUrl: string, iconUrl: string, colour: string }> | null };

export type WishlistQueryVariables = Exact<{
  currency?: Currency;
  shippingDestination?: Country;
  sort?: WishlistSort;
}>;


export type WishlistQuery = { __typename?: 'Query', customer?: { __typename?: 'Customer', emailPreference?: boolean | null, wishlist?: { __typename?: 'WishlistItems', total: number, items: Array<{ __typename?: 'WishlistItem', product: { __typename?: 'Product', sku: any, url: any, title: string, inWishlist?: boolean | null, images: Array<{ __typename?: 'ProductImage', largeProduct?: any | null, original?: any | null, zoom?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue' } }>, cheapestVariantPrice?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null }, selectedVariant?: { __typename?: 'ProductVariant', sku: any, title: string, inWishlist?: boolean | null, inStock: boolean, images: Array<{ __typename?: 'ProductImage', largeProduct?: any | null, original?: any | null, zoom?: any | null }>, content: Array<{ __typename?: 'ProductContentItem', key: string, value: { __typename: 'ProductContentIntListValue' } | { __typename: 'ProductContentIntValue' } | { __typename: 'ProductContentRichContentListValue' } | { __typename: 'ProductContentRichContentValue' } | { __typename: 'ProductContentStringListValue', stringListValue: Array<string> } | { __typename: 'ProductContentStringValue' } }>, price?: { __typename?: 'ProductPrice', price: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any }, rrp: { __typename?: 'MoneyValue', currency: Currency, amount: string, displayValue: string, scalarValue: any } } | null } | null }> } | null } | null };
