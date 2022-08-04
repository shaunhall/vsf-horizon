<template>
  <div class="container">
    <SfButton
        class="container__lang container__lang--selected"
        @click="isSiteSettingsOpen = !isSiteSettingsOpen"
    >
      <SfImage :src="`/icons/flags/${locale}.svg`" width="20" alt="Flag" />
    </SfButton>
    <SfModal
      :visible="isSiteSettingsOpen"
      title="Settings"
      :persistent="false"
      @close="isSiteSettingsOpen = !isSiteSettingsOpen"
    >
      <form class="form" @submit.prevent="handleSubmit" autocomplete="off">
        <SfSelect
          label="Language"
          v-model="form['locale']"
        >
          <SfSelectOption
            v-for="lang in locales"
            :key="lang.code"
            :value="lang.code"
            :label="lang.label"
            class="sf-select__option"
            tabindex="0"
          />
        </SfSelect>
        <SfSelect
          label="Currency"
          v-model="form['currency']"
        >
          <SfSelectOption
            v-for="currency in currencyList"
            :key="currency"
            :value="currency"
            :label="`${currency} (${$t('currencies.' + currency)})`"
            class="sf-select__option"
            tabindex="0"
          />
        </SfSelect>
        <SfSelect
          label="Shipping Destination"
          v-model="form.shippingDestination"
        >
          <SfSelectOption
            v-for="dest in shippingDestinationList"
            :key="dest"
            :value="dest"
            :label="$t('countries.' + dest)"
            class="sf-select__option"
            tabindex="0"
          />
        </SfSelect>
        <SfButton
          type="submit"
          class="sf-button--full-width form__button"
          :disabled="loading"
        >
          <SfLoader :class="{ loader: loading }" :loading="loading">
            <div>Save Changes</div>
          </SfLoader>
        </SfButton>
      </form>
    </SfModal>
  </div>
</template>

<script>
import {
  SfImage,
  SfSelect,
  SfButton,
  SfList,
  SfLoader,
  SfModal,
  SfCharacteristic
} from '@storefront-ui/vue';
import { ref, computed } from '@nuxtjs/composition-api';
import { useSettings, settingsGetters } from '@vue-storefront/horizon';
export default {
  components: {
    SfImage,
    SfSelect,
    SfButton,
    SfLoader,
    SfList,
    SfModal,
    SfCharacteristic
  },
  setup(_, context) {
    const { locale, locales } = context.root.$i18n;
    const { settings, loading, change } = useSettings();
    const isSiteSettingsOpen = ref(false);
    const activeSettings = computed(() => settingsGetters.getSelected(settings.value)).value;
    const currentCurrency = computed(() => activeSettings?.currency);
    const currentShippingDestination = computed(() => activeSettings?.shippingDestination);

    const form = ref({ currency: currentCurrency.value, shippingDestination: currentShippingDestination.value, locale });

    const currencyList = computed(() => settingsGetters.getCurrencies(settings.value));
    const shippingDestinationList = computed(() => settingsGetters.getShippingDestinations(settings.value));

    const handleSubmit = () => {
      change(form.value);
      if (locale !== form.value.locale) {
        console.log('CHANGE LOCALE');
      }
      isSiteSettingsOpen.value = !isSiteSettingsOpen.value;
      context.root.$nuxt.refresh();
    };

    return {
      locales,
      locale,
      loading,
      form,
      currencyList,
      shippingDestinationList,
      currentCurrency,
      currentShippingDestination,
      isSiteSettingsOpen,
      handleSubmit
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 -5px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
  .form {
    margin-top: var(--spacer-sm);
    &__element {
      margin: 0 0 var(--spacer-xl) 0;
    }
  }
  .sf-list {
    .language {
      padding: var(--spacer-sm);
      &__flag {
        margin-right: var(--spacer-sm);
      }
    }
    @include for-desktop {
      display: flex;
      width: 33%;
    }
  }
  &__lang {
    width: 20px;
    --button-box-shadow: none;
    background: none;
    padding: 0 5px;
    display: flex;
    align-items: center;
    opacity: 0.5;
    border: none;
    &:hover,
    &--selected {
      opacity: 1;
    }
  }
}
</style>
