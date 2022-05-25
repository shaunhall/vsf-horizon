import { UseCartFactoryParams } from '@vue-storefront/core';
import addToBasketMutation from 'src/graphql-operations/mutations/basketAdd.graphql';
import type {
  Cart,
  CartItem,
  Product
} from '../types';
import { AddToBasketMutation, AddToBasketMutationVariables, ApplyCodeToBasketMutation, ApplyCodeToBasketMutationVariables, BasketQuery, BasketQueryVariables, RemoveCodeFromBasketMutation, RemoveCodeFromBasketMutationVariables, RemoveProductFromBasketMutation, RemoveProductFromBasketMutationVariables } from 'src/graphql-types';

type cartParams = UseCartFactoryParams<Cart, CartItem, Product>;

export const getBasket: cartParams['load'] = async (context, params) => {
  const basketData: BasketQuery = await context.client.mutation({ mutation: addToBasketMutation, variables: {} as BasketQueryVariables }).data;
  return basketData.basket;
};

export const addToBasket: cartParams['addItem'] = async (context, params) => {
  const variables: AddToBasketMutationVariables = {
    sku: params.product?.sku,
    qty: params.quantity
  };
  if (params.currentCart?.id) variables.id = params.currentCart.id;
  const basketData: AddToBasketMutation = await context.client.mutation({ mutation: addToBasketMutation, variables }).data;
  return basketData.addProductToBasket;
};

export const removeFromBasket: cartParams['removeItem'] = async (context, params) => {
  const variables: RemoveProductFromBasketMutationVariables = {
    basketId: params.currentCart.id,
    itemId: params.product.id
  };
  const basketData: RemoveProductFromBasketMutation = await context.client.mutation({ mutation: addToBasketMutation, variables }).data;
  return basketData.removeProductFromBasket;
};

export const updateItemQty: cartParams['updateItemQty'] = async (context, params) => {
  const variables: AddToBasketMutationVariables = {
    sku: params.product.id,
    qty: params.quantity
  };
  if (params.currentCart.id) variables.id = params.currentCart.id;
  const basketData: AddToBasketMutation = await context.client.mutation({ mutation: addToBasketMutation, variables }).data;
  return basketData.addProductToBasket;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const clearBasket: cartParams['clear'] = async (context, params) => {
  return await getBasket(context, {});
};

export const applyCodeToBasket: cartParams['applyCoupon'] = async (context, params) => {
  const variables: ApplyCodeToBasketMutationVariables = {
    basketId: params.currentCart.id,
    code: params.couponCode
  };
  const basketData: ApplyCodeToBasketMutation = await context.client.mutation({ mutation: addToBasketMutation, variables }).data;
  return {
    updatedCart: basketData.applyCodeToBasket
  };
};

export const removeCodeFromBasket: cartParams['removeCoupon'] = async (context, params) => {
  const variables: RemoveCodeFromBasketMutationVariables = {
    basketId: params.currentCart?.id
  };
  const basketData: RemoveCodeFromBasketMutation = await context.client.mutation({ mutation: addToBasketMutation, variables }).data;
  return {
    updatedCart: basketData.removeCodeFromBasket
  };
};

export const isInCart: cartParams['isInCart'] = (context, params) => {
  const skusInCart = params.currentCart.items.map(item => item.id);
  return skusInCart.includes(params.product.sku);
};
