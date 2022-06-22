import {
  Context,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';
import type {
  Cart,
  CartItem,
  ProductVariant
} from '@vue-storefront/horizon-api';

const params: UseCartFactoryParams<Cart, CartItem, ProductVariant> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const app = context.$horizonApp?.config?.app;
    const existingBasketId = app?.$cookies.get('cart_id');
    const variables = existingBasketId !== undefined && existingBasketId !== ''
      ? { id: existingBasketId }
      : {};
    const data = await context.$horizon.api.getBasket(variables, customQuery);
    app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const data = await context.$horizon.api.addToBasket({ currentCart, product, quantity }, customQuery);
    context.$horizonApp?.config?.app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentCart, product, customQuery }) => {
    const data = await context.$horizon.api.removeFromBasket({ currentCart, product }, customQuery);
    context.$horizonApp?.config?.app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const data = await context.$horizon.api.updateItemQty({ currentCart, product, quantity }, customQuery);
    context.$horizonApp?.config?.app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, _) => {
    const data = await context.$horizon.api.clearBasket();
    context.$horizonApp?.config?.app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    const data: Cart = await context.$horizon.api.applyCodeToBasket({ currentCart, couponCode }, customQuery);
    context.$horizonApp?.config?.app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return {
      updatedCart: data
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    const data: Cart = await context.$horizon.api.removeCodeFromBasket({ currentCart, couponCode }, customQuery);
    context.$horizonApp?.config?.app?.$cookies.set('cart_id', data?.id, { maxAge: 60 * 60 * 24 * 365, path: '/' });
    return {
      updatedCart: data
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    const skusInCart = currentCart?.items?.map(item => item.id);
    return skusInCart?.includes(product.sku);
  }
};

export const useCart = useCartFactory<Cart, CartItem, ProductVariant>(params);
