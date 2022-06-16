import { computed } from '@nuxtjs/composition-api';
import { sharedRef, useVSFContext, Logger } from '@vue-storefront/core';
import type { FormFieldInput } from '@vue-storefront/horizon-api';

export const useForm = (id: string) => {
  const context = useVSFContext();
  const form = sharedRef(null, `useForm-${id}`);
  const loading = sharedRef(false, `useForm-loading-${id}`);

  const error = sharedRef({
    search: null
  }, `useForm-error-${id}`);

  const search = async (params: FormFieldInput): Promise<void> => {
    Logger.debug(`useForm/${id}/search`, params);

    try {
      loading.value = true;
      const data = await context.$horizon.api.getForm(params).then(res => res.data);
      form.value = data;
      error.value.search = null;
    } catch (err) {
      error.value.search = err;
      Logger.error(`useForm/${id}/search`, err);
    } finally {
      loading.value = false;
    }
  };

  return {
    search,
    form: computed(() => form.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value)
  };
};
