import { Context, UseCartFactoryParams } from '@vue-storefront/core';
import addToBasketMutation from 'src/graphql-operations/mutations/basketAdd.graphql';
import updateBasketQtyMutation from 'src/graphql-operations/mutations/basketUpdate.graphql';
import basketQuery from 'src/graphql-operations/queries/basket.graphql';
import removeFromBasketMutation from 'src/graphql-operations/mutations/basketRemove.graphql';
import applyCodeToBasketMutation from 'src/graphql-operations/mutations/applyCodeToBasket.graphql';
import removeCodeFromBasketMutation from 'src/graphql-operations/mutations/removeCodeFromBasket.graphql';
import type {
  Cart,
  CartItem,
  ProductVariant
} from '../types';
import {
  AddToBasketMutation,
  AddToBasketMutationVariables,
  ApplyCodeToBasketMutation,
  ApplyCodeToBasketMutationVariables,
  BasketQuery,
  RemoveCodeFromBasketMutation,
  RemoveCodeFromBasketMutationVariables,
  RemoveProductFromBasketMutation,
  RemoveProductFromBasketMutationVariables,
  UpdateBasketQtyMutation,
  UpdateBasketQtyMutationVariables
} from 'src/graphql-types';

type cartParams = UseCartFactoryParams<Cart, CartItem, ProductVariant>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getBasket = async (context: Context, params: { id?: string }): ReturnType<cartParams['load']> => {
  const basketData: BasketQuery = await context.client.query({ query: basketQuery, variables: params })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  return basketData.basket;
};

export const addToBasket: cartParams['addItem'] = async (context, params) => {
  const variables: AddToBasketMutationVariables = {
    sku: params.product?.sku,
    qty: params.quantity
  };
  if (params.currentCart?.id) variables.id = params.currentCart.id;
  const basketData: AddToBasketMutation = await context.client.mutate({ mutation: addToBasketMutation, variables })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  return basketData.addProductToBasket;
};

export const removeFromBasket: cartParams['removeItem'] = async (context, params) => {
  const variables: RemoveProductFromBasketMutationVariables = {
    basketId: params.currentCart.id,
    itemId: params.product.id
  };
  const basketData: RemoveProductFromBasketMutation = await context.client.mutate({ mutation: removeFromBasketMutation, variables })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  return basketData.removeProductFromBasket;
};

export const updateItemQty: cartParams['updateItemQty'] = async (context, params) => {
  const variables: UpdateBasketQtyMutationVariables = {
    itemId: params.product.id,
    qty: params.quantity
  };
  if (params.currentCart.id) variables.id = params.currentCart.id;
  const basketData: UpdateBasketQtyMutation = await context.client.mutate({ mutation: updateBasketQtyMutation, variables })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  return basketData.updateProductQuantityInBasket;
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
  const basketData: ApplyCodeToBasketMutation = await context.client.mutate({ mutation: applyCodeToBasketMutation, variables })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  return {
    updatedCart: basketData.applyCodeToBasket
  };
};

export const removeCodeFromBasket: cartParams['removeCoupon'] = async (context, params) => {
  const variables: RemoveCodeFromBasketMutationVariables = {
    basketId: params.currentCart?.id
  };
  const basketData: RemoveCodeFromBasketMutation = await context.client.mutate({ mutation: removeCodeFromBasketMutation, variables })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  return {
    updatedCart: basketData.removeCodeFromBasket
  };
};

export const isInCart: cartParams['isInCart'] = (context, params) => {
  const skusInCart = params.currentCart.items.map(item => item.id);
  return skusInCart.includes(params.product.sku);
};
