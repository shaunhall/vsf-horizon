import { UseCheckout, Context } from '@vue-storefront/core';
import { ref, Ref, computed } from '@nuxtjs/composition-api';
import { CheckoutMutation, CheckoutMutationVariables } from '@vue-storefront/horizon-api/lib/graphql-types';

const PAYMENT_METHODS_MOCK = [
  {
    label: 'Visa Debit',
    value: 'debit'
  },
  {
    label: 'MasterCard',
    value: 'mastercard'
  },
  {
    label: 'Visa Electron',
    value: 'electron'
  },
  {
    label: 'Cash on delivery',
    value: 'cash'
  },
  {
    label: 'Check',
    value: 'check'
  }
];

const paymentMethods: Ref<any[]> = ref(PAYMENT_METHODS_MOCK);
const shippingMethods: Ref<any[]> = ref([]);
const personalDetails: Ref<any> = ref({});
const shippingDetails: Ref<any> = ref({});
const billingDetails: Ref<any> = ref({});
const chosenPaymentMethod: Ref<string> = ref('');
const chosenShippingMethod: Ref<any> = ref({});
const placeOrder = async (context: Context): Promise<CheckoutMutation['checkout']> => {
  const app = context.$horizonApp?.config?.app;
  const basketId = app?.$cookies.get('cart_id');
  const data = await context.$horizon.api.startCheckout({ basketId });
  return data;
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
    loading: computed(() => false)
  };
};
