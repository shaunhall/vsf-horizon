import { computed, Ref } from '@nuxtjs/composition-api';
import { sharedRef, useVSFContext, Logger, CustomQuery } from '@vue-storefront/core';
import type { FormField, FormFieldInput } from '@vue-storefront/horizon-api';

export const useForm = (id: string): {
  search: (params: FormFieldInput, customQuery: CustomQuery) => Promise<void>,
  form: Ref<FormField[]>,
  loading: Ref<boolean>,
  error: Ref<Record<string, any>>
} => {
  const context = useVSFContext();
  const form = sharedRef(null, `useForm-${id}`);
  const loading = sharedRef(false, `useForm-loading-${id}`);

  const error = sharedRef({
    search: null
  }, `useForm-error-${id}`);

  const search = async (params: FormFieldInput, customQuery: CustomQuery): Promise<void> => {
    Logger.debug(`useForm/${id}/search`, params);

    try {
      loading.value = true;
      const data: FormField[] = await context.$horizon.api.getForm(params, customQuery).then(res => res.data);
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
