import {
  Context,
  useCartFactory,
  UseCartFactoryParams
} from '@vue-storefront/core';
import type {
  Cart,
  CartItem,
  Product
} from '@vue-storefront/horizon-api';

const params: UseCartFactoryParams<Cart, CartItem, Product> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context, { customQuery }) => {
    const data = await context.$horizon.api.getBasket(customQuery);
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addItem: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const data = await context.$horizon.api.addToBasket({ currentCart, product, quantity, customQuery });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeItem: async (context: Context, { currentCart, product, customQuery }) => {
    const data = await context.$horizon.api.removeFromBasket({ currentCart, product, customQuery });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateItemQty: async (context: Context, { currentCart, product, quantity, customQuery }) => {
    const data = await context.$horizon.api.updateItemQty({ currentCart, product, quantity, customQuery });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  clear: async (context: Context, { currentCart }) => {
    const data = await context.$horizon.api.clearBasket({ currentCart });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  applyCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    const data = await context.$horizon.api.applyCodeToBasket({ currentCart, couponCode });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  removeCoupon: async (context: Context, { currentCart, couponCode, customQuery }) => {
    const data = await context.$horizon.api.removeCodeFromBasket({ currentCart, couponCode });
    return data;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  isInCart: (context: Context, { currentCart, product }) => {
    const data = context.$horizon.api.isInCart(currentCart, { currentCart, product });
    return data;
  }
};

export const useCart = useCartFactory<Cart, CartItem, Product>(params);
