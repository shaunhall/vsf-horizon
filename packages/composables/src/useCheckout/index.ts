import { UseCheckout, Context } from '@vue-storefront/core';
import { ref, Ref, computed } from '@nuxtjs/composition-api';
import { CheckoutMutation, CheckoutMutationVariables } from '@vue-storefront/horizon-api/lib/graphql-types';
import { ExecutionResult } from 'graphql';

const paymentMethods: Ref<any[]> = ref([]);
const shippingMethods: Ref<any[]> = ref([]);
const personalDetails: Ref<any> = ref({});
const shippingDetails: Ref<any> = ref({});
const billingDetails: Ref<any> = ref({});
const chosenPaymentMethod: Ref<string> = ref('');
const chosenShippingMethod: Ref<any> = ref({});

const loading = computed(() => false);

const placeOrder = async (context: Context): Promise<CheckoutMutation['checkout']> => {
  const app = context.$horizonApp?.config?.app;
  const basketId = app?.$cookies.get('cart_id');
  const response: ExecutionResult<CheckoutMutation['checkout']> = await context.$horizon.api.startCheckout({ basketId });
  if (response.errors?.length) {
    throw Promise.reject(response.errors);
  } else {
    return response.data;
  }
};

export const useCheckout: () => UseCheckout<any, any, any, any, any, any, any, (context: Context, { basketId }: CheckoutMutationVariables) => Promise<CheckoutMutation['checkout']>> = () => {
  return {
    paymentMethods,
    shippingMethods,
    personalDetails,
    shippingDetails,
    billingDetails,
    chosenPaymentMethod,
    chosenShippingMethod,
    placeOrder,
    loading
  };
};
