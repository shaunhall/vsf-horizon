<template>
  <div class="sf-header__navigation desktop nav-desktop" v-if="!isMobile">
    <SfHeaderNavigationItem
      v-for="(category, index) in categoryTree"
      :key="index"
      class="sf-header-navigation-item__menu-item"
      v-e2e="`app-header-url_${category.slug}`"
      :label="category.label"
      :link="localePath(category.slug)"
      @mouseover="updateNavFlyout($event, category)"
      @mouseleave="updateNavFlyout($event)"
      @keydown.esc="updateNavFlyout($event)"
    />
  </div>
  <SfModal v-else :visible="isMobileMenuOpen">
    {{ isMobileMenuOpen }}
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
                    :link="localePath(subNav.slug)"
                    @click="toggleMobileMenu"
                  />
            </SfAccordionItem>
            <SfMenuItem
                v-else
                :label="item.label"
                :key="idx"
                class="sf-header-navigation-item__menu-item"
                :link="localePath(item.slug)"
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
import { computed } from '@nuxtjs/composition-api';
import { useUiState } from '~/composables';
import { useCategory, categoryGetters } from '@vue-storefront/horizon';

export default {
  name: 'HeaderNavigation',
  components: {
    SfMenuItem,
    SfModal,
    SfAccordion,
    SfList,
    SfMegaMenu
  },
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { categories, search } = useCategory('categories');
    const { isMobileMenuOpen, toggleMobileMenu, updateNavFlyout } = useUiState();

    const categoryTree = computed(() => categories?.value.map(category => categoryGetters.getTree(category)));
    onSSR(async () => {
      await search();
    });

    return {
      categoryTree: categoryTree?.value,
      isMobileMenuOpen,
      toggleMobileMenu,
      updateNavFlyout
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
</style>
