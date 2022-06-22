import { Context, CustomQuery, UseCartFactoryParams } from '@vue-storefront/core';
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
import { mutateWithCookies, queryWithCookies } from './_utils';

type cartParams = UseCartFactoryParams<Cart, CartItem, ProductVariant>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getBasket = async (context: Context, params: { id?: string, acknowledgeMerge?: boolean } = {}, customQuery: CustomQuery = {}): Promise<Cart> => {
  const basketData = await queryWithCookies<BasketQuery>(context, basketQuery, params, customQuery)
    .then(res => res.data);
  return basketData.basket;
};

export const addToBasket = async (context: Context, params: { currentCart: Cart, product: ProductVariant, quantity: number }, customQuery: CustomQuery = {}): Promise<Cart> => {
  const variables: AddToBasketMutationVariables = {
    sku: params.product?.sku,
    qty: params.quantity
  };
  if (params.currentCart?.id) variables.id = params.currentCart.id;
  const basketData = await mutateWithCookies<AddToBasketMutation>(context, addToBasketMutation, variables, customQuery)
    .then(res => res.data);
  return basketData.addProductToBasket;
};

export const removeFromBasket = async (context: Context, params: { currentCart: Cart, product: CartItem }, customQuery: CustomQuery = {}): Promise<Cart> => {
  const variables: RemoveProductFromBasketMutationVariables = {
    basketId: params.currentCart.id,
    itemId: params.product.id
  };
  const basketData = await mutateWithCookies<RemoveProductFromBasketMutation>(context, removeFromBasketMutation, variables, customQuery)
    .then(res => res.data);
  return basketData.removeProductFromBasket;
};

export const updateItemQty = async (context: Context, params: { currentCart: Cart, product: CartItem, quantity: number }, customQuery: CustomQuery = {}): Promise<Cart> => {
  const variables: UpdateBasketQtyMutationVariables = {
    itemId: params.product.id,
    qty: params.quantity
  };
  if (params.currentCart.id) variables.id = params.currentCart.id;
  const basketData = await mutateWithCookies<UpdateBasketQtyMutation>(context, updateBasketQtyMutation, variables, customQuery)
    .then(res => res.data);
  return basketData.updateProductQuantityInBasket;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const clearBasket: cartParams['clear'] = async (context, params) => {
  return await getBasket(context);
};

export const applyCodeToBasket = async (context: Context, params: { currentCart: Cart, couponCode: string }, customQuery: CustomQuery): Promise<Cart> => {
  const variables: ApplyCodeToBasketMutationVariables = {
    basketId: params.currentCart.id,
    code: params.couponCode
  };
  const basketData = await mutateWithCookies<ApplyCodeToBasketMutation>(context, applyCodeToBasketMutation, variables, customQuery)
    .then(res => res.data);
  return basketData.applyCodeToBasket;
};

export const removeCodeFromBasket = async (context: Context, params: { currentCart: Cart, couponCode: string }, customQuery: CustomQuery): Promise<Cart> => {
  const variables: RemoveCodeFromBasketMutationVariables = {
    basketId: params.currentCart?.id
  };
  const basketData = await mutateWithCookies<RemoveCodeFromBasketMutation>(context, removeCodeFromBasketMutation, variables, customQuery)
    .then(res => res.data);
  return basketData.removeCodeFromBasket;
};
