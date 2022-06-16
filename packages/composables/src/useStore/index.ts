import { SiteSettings, Store } from '@vue-storefront/horizon-api';
import { Context, useStoreFactory } from '@vue-storefront/core';

export const useStore = useStoreFactory<Store>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async load(context: Context, { customQuery }) {
    const app = context.$horizonApp?.config?.app;
    const query = app?.router?.history?.current?.query;
    const currency = query?.switchcurrency || app?.$cookies.get('en_currency_V6') || 'GBP';
    const shippingDestination = query?.shippingcountry || app?.$cookies.get('en_shippingCountry_V6') || 'GB';
    if (query?.switchcurrency || query?.shippingcountry) {
      const d = new Date();
      d.setTime(d.getTime() + (24 * 60 * 60 * 365 * 1000));
      query?.switchcurrency && app?.$cookies.set('en_currency_V6', query?.switchcurrency, {
        expires: d,
        path: '/',
        domain: 'localhost',
        secure: true
      });
      query?.shippingcountry && app?.$cookies.set('en_shippingCountry_V6', query?.shippingcountry, {
        expires: d,
        path: '/',
        domain: 'localhost',
        secure: true
      });
    }
    const apiStore: SiteSettings = await context.$horizon.api.getStore().then(res => res.data);
    return {
      name: 'Site Settings',
      id: 0,
      active: {
        currency,
        shippingDestination
      },
      currencies: apiStore?.supportedCurrencies,
      shippingDestinations: apiStore?.supportedShippingDestinations,
      ...customQuery
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async change(context: Context, { currentStore, store }) {
    const app = context.$horizonApp?.config?.app;
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 365 * 1000));
    store?.active?.currency && app?.$cookies.set('en_currency_V6', store.active.currency, {
      expires: d,
      path: '/'
    });
    store?.active?.shippingDestination && app?.$cookies.set('en_shippingCountry_V6', store.active.shippingDestination, {
      expires: d,
      path: '/'
    });
    return {
      ...currentStore,
      ...store
    };
  }
});
