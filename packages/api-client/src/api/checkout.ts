import { Context } from '@vue-storefront/core';
import startCheckoutMutation from 'src/graphql-operations/mutations/checkoutStart.graphql';
import {
  CheckoutMutation,
  CheckoutMutationVariables
} from 'src/graphql-types';
import { mutateWithCookies } from './_utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const startCheckout = async (context: Context, params: CheckoutMutationVariables): Promise<CheckoutMutation['checkout']> => {
  let checkoutData: CheckoutMutation;
  try {
    checkoutData = await mutateWithCookies<CheckoutMutation>(context, startCheckoutMutation, params)
      .then(res => res.data);
  } catch (err) {
    console.log(err);
  }
  return checkoutData?.checkout;
};
