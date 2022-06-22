import { computed, Ref } from '@nuxtjs/composition-api';
import { sharedRef, useVSFContext, Logger, CustomQuery } from '@vue-storefront/core';
import type { Currency, Country, SiteSettings } from '@vue-storefront/horizon-api';
import { EnhancedSettings } from '../types';

export const useSettings = (id: string): {
  load: (customQuery: CustomQuery) => Promise<void>,
  change: (params: {
      currency: Currency
      shippingDestination: Country
  }) => Promise<void>,
  settings: Ref<EnhancedSettings>,
  loading: Ref<boolean>,
  error: Ref<Record<string, any>>
} => {
  const context = useVSFContext();
  const settings: Ref<EnhancedSettings> = sharedRef(null, `useSettings-${id}`);
  const loading: Ref<boolean> = sharedRef(false, `useSettings-loading-${id}`);

  const error: Record<string, any> = sharedRef({
    load: null,
    change: null
  }, `useSettings-error-${id}`);

  const load = async (customQuery: CustomQuery): Promise<void> => {
    Logger.debug(`useSettings/${id}/search`);
    try {
      loading.value = true;
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
      const apiSettings: SiteSettings = await context.$horizon.api.getSettings(customQuery).then(res => res.data);
      settings.value = {
        ...apiSettings,
        active: {
          currency,
          shippingDestination
        }
      };
      error.value.load = null;
    } catch (err) {
      error.value.load = err;
      Logger.error(`useForm/${id}/search`, err);
    } finally {
      loading.value = false;
    }
  };

  const change = async (params: { currency: Currency, shippingDestination: Country}): Promise<void> => {
    Logger.debug(`useSettings/${id}/search`);

    try {
      loading.value = true;
      const app = context.$horizonApp?.config?.app;
      const d = new Date();
      d.setTime(d.getTime() + (24 * 60 * 60 * 365 * 1000));
      params.currency && app?.$cookies.set('en_currency_V6', params.currency, {
        expires: d,
        path: '/'
      });
      params.shippingDestination && app?.$cookies.set('en_shippingCountry_V6', params.shippingDestination, {
        expires: d,
        path: '/'
      });
      settings.value = {
        ...settings.value,
        ...params
      };
      error.value.change = null;
    } catch (err) {
      error.value.change = err;
      Logger.error(`useForm/${id}/search`, err);
    } finally {
      loading.value = false;
    }
  };

  return {
    load,
    change,
    settings: computed(() => settings.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
