<template>
  <SfFooter :column="footer.length" multiple class="footer">
    <SfFooterColumn v-for="(nav, index) in footer" :key="index" :title="nav.displayName">
      <SfList>
        <SfListItem
          v-for="(item, idx) in nav.subNavigation"
          :key="idx"
          >
          <SfMenuItem
            :label="item.displayName"
            :link="convertLink(item.link.url)"
          />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Social">
      <div class="footer__socials">
        <SfImage class="footer__social-image" v-for="item in social" :key="item" :src="addBasePath('/icons/'+item+'.svg')" :alt="item" width="32" height="32" />
      </div>
    </SfFooterColumn>
  </SfFooter>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem } from '@storefront-ui/vue';
import { useSettings, settingsGetters } from '@vue-storefront/horizon';
import { addBasePath } from '@vue-storefront/core';
import { computed } from '@nuxtjs/composition-api';
import { useUiHelpers } from '~/composables';

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem
  },
  setup() {
    const { convertLink } = useUiHelpers();
    const { settings } = useSettings();

    const footer = computed(() => settingsGetters.getFooter(settings.value)?.navigation.topLevel);
    return {
      footer,
      addBasePath,
      convertLink
    };
  },
  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  }
};
</script>

<style lang="scss">

.footer {
  margin-bottom: 3.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
</style>
