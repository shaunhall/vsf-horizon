import {
  CartGetters,
  AgnosticPrice,
  AgnosticTotals,
  AgnosticCoupon,
  AgnosticDiscount,
  AgnosticAttribute
} from '@vue-storefront/core';
import type { Cart, CartItem } from '@vue-storefront/horizon-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(cart: Cart): CartItem[] {
  return cart.items.sort((a, b) => parseInt(a.id) - parseInt(b.id)) || [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemName(item: CartItem): string {
  return item?.product?.title || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemImage(item: CartItem): string {
  return item?.product?.product?.images.length ? item?.product?.product?.images[0].largeProduct : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemPrice(item: CartItem): AgnosticPrice {
  return {
    regular: parseFloat(item?.totalStandardPrice?.amount),
    special: parseFloat(item?.totalChargePrice?.amount) < parseFloat(item?.totalStandardPrice?.amount)
      ? parseFloat(item?.totalChargePrice?.amount)
      : null
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemQty(item: CartItem): number {
  return item?.quantity || 1;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemAttributes(item: CartItem, filterByAttributeName?: Array<string>): Record<string, AgnosticAttribute | string> {
  return item?.product.choices.reduce(((currentObj, choice) => {
    currentObj[choice.optionKey] = choice.key;
    return currentObj;
  }), {});
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItemSku(item: CartItem): string {
  return item?.id;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotals(cart: Cart): AgnosticTotals {
  return {
    total: parseFloat(cart?.standardPrice?.amount),
    subtotal: parseFloat(cart?.chargePrice?.amount),
    special: parseFloat(cart?.discount?.amount)
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getShippingPrice(cart: Cart): number {
  // Not possible in the current setup
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalItems(cart: Cart): number {
  return cart?.items?.length || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return String(price);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoupons(cart: Cart): AgnosticCoupon[] {
  return cart?.messages?.map(message => {
    return {
      id: null,
      name: message?.message,
      code: message?.type,
      value: null
    };
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDiscounts(cart: Cart): AgnosticDiscount[] {
  return cart?.appliedOffers?.map(offer => {
    return {
      id: null,
      name: '',
      description: offer?.message,
      value: parseFloat(offer?.totalBasketDiscount?.amount)
    };
  });
}

export const cartGetters: CartGetters<Cart, CartItem> = {
  getTotals,
  getShippingPrice,
  getItems,
  getItemName,
  getItemImage,
  getItemPrice,
  getItemQty,
  getItemAttributes,
  getItemSku,
  getFormattedPrice,
  getTotalItems,
  getCoupons,
  getDiscounts
};
