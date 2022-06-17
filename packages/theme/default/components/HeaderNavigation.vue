<template>
  <div
    v-if="!isMobile"
    @mouseleave="changeNavFlyoutOpenStatus()"
  >
    <div class="sf-header__navigation desktop nav-desktop">
      <SfHeaderNavigationItem
        v-for="(category, index) in nav"
        :key="index"
        class="sf-header-navigation-item__menu-item"
        v-e2e="`app-header-url_${category.slug}`"
        :label="category.label"
        :link="localePath(convertLink(category.slug))"
        @mouseover="updateNavFlyout(category)"
        @click="changeNavFlyoutOpenStatus()"
        @keydown.esc="changeNavFlyoutOpenStatus()"
      />
    </div>
    <desktop-nav-flyout />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    <SfAccordion open="" showChevron>
      <SfAccordionItem
        v-for="(category, index) in categoryTree"
        :key="index"
        class="nav-item"
        :header="category.label"
      >
        <SfAccordion
          open="" showChevron
        >
          <template v-for="(item, idx) in category.items">
            <SfAccordionItem
              v-if="item.items.length"
              :key="idx"
              class="nav-item"
              :header="item.label"
            >
              <SfMenuItem
                    v-for="(subNav, i) in item.items"
                    :key="i"
                    :label="subNav.label"
                    class="sf-header-navigation-item__menu-item"
                    :link="localePath(convertLink(subNav.slug))"
                    @click="toggleMobileMenu"
                  />
            </SfAccordionItem>
            <SfMenuItem
                v-else
                :label="item.label"
                :key="idx"
                class="sf-header-navigation-item__menu-item"
                :link="localePath(convertLink(item.slug))"
                @click="toggleMobileMenu"
              />
          </template>
        </SfAccordion>
      </SfAccordionItem>
    </SfAccordion>
  </SfModal>
</template>

<script>
import { SfMenuItem, SfModal, SfAccordion, SfList, SfMegaMenu } from '@storefront-ui/vue';
import { onSSR } from '@vue-storefront/core';
import { computed, ref } from '@nuxtjs/composition-api';
import { useUiState, useUiHelpers } from '~/composables';
import { useSettings, settingsGetters, navigationGetters } from '@vue-storefront/horizon';
import {
  mapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import DesktopNavFlyout from './DesktopNavFlyout.vue';

export default {
  name: 'HeaderNavigation',
  components: {
    SfMenuItem,
    SfModal,
    SfAccordion,
    SfList,
    SfMegaMenu,
    DesktopNavFlyout
  },
  setup() {
    const { settings } = useSettings();
    const { isMobileMenuOpen, toggleMobileMenu, updateNavFlyout, changeNavFlyoutOpenStatus, isNavFlyoutOpen } = useUiState();
    const { convertLink } = useUiHelpers();
    const isMobile = ref(mapMobileObserver().isMobile.get());
    const header = computed(() => settingsGetters.getHeader(settings.value));
    const nav = computed(() => header?.value?.navigation?.topLevel.map(item => navigationGetters.getTree(item)));

    return {
      nav,
      isMobileMenuOpen,
      toggleMobileMenu,
      updateNavFlyout,
      changeNavFlyoutOpenStatus,
      isMobile,
      convertLink,
      isNavFlyoutOpen
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header-navigation-item {
  ::v-deep &__item--mobile {
    display: block;
  }
}

.sf-modal {
  ::v-deep &__bar {
    display: none;
  }
  ::v-deep &__content {
    padding: var(--modal-content-padding, var(--spacer-base) 0);
  }
}

.nav-desktop {
  overflow: auto;
  width: 50vw;
}
.nav-item {
  --header-navigation-item-margin: 0 var(--spacer-base);
  .sf-header-navigation-item__item--mobile {
    display: none;
  }
}
</style>
