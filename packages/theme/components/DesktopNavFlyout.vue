<template>
  <LazyHydrate never :trigger-hydration="isNavFlyoutOpen">
    <SfMegaMenu
      v-if="navFlyoutCategory"
      :visible="isNavFlyoutOpen && navFlyoutCategory && Boolean(navFlyoutCategory.items.length)"
      id="navFlyout"
      class="navflyout"
      >
        <SfList
          v-for="(subNav, idx) in navFlyoutCategory.items"
          :key="idx"
        >
          <SfMegaMenuColumn
            v-if="subNav && subNav.items.length"
            :title="subNav.label"
          >
            <SfList>
              <SfListItem v-for="(leaf, i) in subNav.items" :key="i">
                <SfImage
                  v-if="leaf.image && leaf.image.url"
                  :src="convertLink(leaf.image.url)"
                  :alt="leaf.image.alt || ''"
                  :width="75"
                  :height="75"
                />
                <SfMenuItem
                  :label="leaf.label"
                  :link="convertLink(leaf.slug)"
                />
              </SfListItem>
            </SfList>
          </SfMegaMenuColumn>
          <SfListItem v-else :key="idx">
            <SfImage
              v-if="subNav.image && subNav.image.url"
              :src="subNav.image.url"
              :alt="subNav.image.alt || ''"
              :width="75"
              :height="75"
              :key="idx"
            />
            <SfMenuItem
              :label="subNav.label"
              :link="convertLink(subNav.slug)"
            />
          </SfListItem>
        </SfList>
      </SfMegaMenu>
  </LazyHydrate>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import { useUiState, useUiHelpers } from '~/composables';
import {
  SfList,
  SfMegaMenu,
  SfImage,
  SfMenuItem
} from '@storefront-ui/vue';
export default {
  components: {
    SfList,
    SfMegaMenu,
    SfImage,
    SfMenuItem,
    LazyHydrate
  },
  setup () {
    const { navFlyoutCategory, updateNavFlyout, isNavFlyoutOpen, changeNavFlyoutOpenStatus } = useUiState();
    const { convertLink } = useUiHelpers();

    return {
      navFlyoutCategory,
      updateNavFlyout,
      isNavFlyoutOpen,
      convertLink,
      changeNavFlyoutOpenStatus
    };

  }
};
</script>

<style scoped>
  .navflyout {
    position: absolute;
    left: 0;
    right: 0;
    z-index: 100;
  }
</style>
