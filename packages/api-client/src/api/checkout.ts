import { Context } from '@vue-storefront/core';
import startCheckoutMutation from 'src/graphql-operations/mutations/checkoutStart.graphql';
import {
  CheckoutMutation,
  CheckoutMutationVariables
} from 'src/graphql-types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const startCheckout = async (context: Context, params: CheckoutMutationVariables): Promise<CheckoutMutation['checkout']> => {
  const cookie = context.req?.headers?.cookie;
  let checkoutData: CheckoutMutation;
  try {
    checkoutData = await context.client.mutate({ context: { headers: { cookie } }, mutation: startCheckoutMutation, variables: params })
      .then(res => res.data)
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log(err);
  }
  return checkoutData?.checkout;
};
