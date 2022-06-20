import { Context } from '@vue-storefront/core';
import { ExecutionResult } from 'graphql';
import startCheckoutMutation from 'src/graphql-operations/mutations/checkoutStart.graphql';
import {
  CheckoutMutation,
  CheckoutMutationVariables
} from 'src/graphql-types';
import { mutateWithCookies } from './_utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const startCheckout = async (context: Context, params: CheckoutMutationVariables): Promise<ExecutionResult<CheckoutMutation['checkout']>> => {
  const checkoutRes = await mutateWithCookies<CheckoutMutation>(context, startCheckoutMutation, params);
  return { ...checkoutRes, data: checkoutRes?.data?.checkout };
};
