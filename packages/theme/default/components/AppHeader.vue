<template>
  <div>
    <SfHeader
      class="sf-header--has-mobile-search"
      :class="{'header-on-top': isSearchOpen}"
      :isNavVisible="isMobileMenuOpen"
    >
      <!-- TODO: add mobile view buttons after SFUI team PR -->
      <template #logo>
        <nuxt-link :to="localePath({ name: 'home' })" class="sf-header__logo">
          <SfImage :src="addBasePath('/icons/logo.svg')" alt="Vue Storefront Next" class="sf-header__logo-image" width="35" height="35"/>
        </nuxt-link>
      </template>
      <template #navigation>
        <HeaderNavigation :isMobile="isMobile" />
      </template>
      <template #aside>
        <LocaleSelector class="smartphone-only" />
      </template>
      <template #header-icons>
        <div v-e2e="'header-icons'" class="sf-header__icons">
          <SfButton
            class="sf-button--pure sf-header__action"
            aria-label="Open account button"
            @click="handleAccountClick"
          >
            <SfIcon
              :icon="accountIcon"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            class="sf-button--pure sf-header__action"
            aria-label="Toggle wishlist sidebar"
            @click="toggleWishlistSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              icon="heart"
              size="1.25rem"
            />
          </SfButton>
          <SfButton
            class="sf-button--pure sf-header__action"
            aria-label="Toggle cart sidebar"
            @click="toggleCartSidebar"
          >
            <SfIcon
              class="sf-header__icon"
              icon="empty_cart"
              size="1.25rem"
            />
            <SfBadge v-if="cartTotalItems" class="sf-badge--number cart-badge">{{cartTotalItems}}</SfBadge>
          </SfButton>
        </div>
      </template>
      <template #search>
        <SfSearchBar
          ref="searchBarRef"
          :placeholder="$t('Search for items')"
          aria-label="Search"
          :value="searchBarRef.searchResult"
          @input="(input) => searchBarRef.searchResult = input"
          @keydown.enter="handleSearch"
          @focus="isSearchOpen = true"
          @keydown.esc="closeSearch"
          v-click-outside="closeSearch"
        >
          <template #icon>
            <SfButton
              v-if="!!searchBarRef.searchResult"
              aria-label="Close search"
              class="sf-search-bar__button sf-button--pure"
              @click="searchBarRef.searchResult = ''"
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="18px" icon="cross" />
              </span>
            </SfButton>
            <SfButton
              v-else
              aria-label="Open search"
              class="sf-search-bar__button sf-button--pure"
              @click="isSearchOpen ? isSearchOpen = false : isSearchOpen = true"
            >
              <span class="sf-search-bar__icon">
                <SfIcon color="var(--c-text)" size="20px" icon="search" />
              </span>
            </SfButton>
          </template>
        </SfSearchBar>
      </template>
    </SfHeader>

    <SfMegaMenu :visible="isNavFlyoutOpen" id="navFlyout">
      <SfList
        v-for="(subNav, idx) in navFlyoutCategory.items"
        :key="idx"
      >
        <SfMegaMenuColumn
          v-if="subNav.items.length"
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
  </div>
</template>

<script>
import { SfHeader, SfImage, SfIcon, SfButton, SfBadge, SfSearchBar, SfOverlay, SfMegaMenu, SfList, SfMenuItem, SfBanner } from '@storefront-ui/vue';
import { useUiState } from '~/composables';
import { useCart, useUser, cartGetters } from '@vue-storefront/horizon';
import { computed, ref, reactive, onBeforeUnmount, useRouter } from '@nuxtjs/composition-api';
import { useUiHelpers } from '~/composables';
import LocaleSelector from './LocaleSelector';
import SearchResults from '~/components/SearchResults';
import HeaderNavigation from './HeaderNavigation';
import { clickOutside } from '@storefront-ui/vue/src/utilities/directives/click-outside/click-outside-directive.js';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
import { addBasePath } from '@vue-storefront/core';

export default {
  components: {
    SfHeader,
    SfImage,
    LocaleSelector,
    SfIcon,
    SfList,
    SfMegaMenu,
    SfMenuItem,
    SfButton,
    SfBadge,
    SfSearchBar,
    SearchResults,
    SfOverlay,
    SfBanner,
    HeaderNavigation
  },
  directives: { clickOutside },
  setup(props, { root }) {
    const router = useRouter();
    const { toggleCartSidebar, toggleWishlistSidebar, toggleLoginModal, isMobileMenuOpen, navFlyoutCategory, updateNavFlyout, isNavFlyoutOpen } = useUiState();
    const { convertLink } = useUiHelpers();
    const { isAuthenticated } = useUser();
    const { cart } = useCart();
    const isSearchOpen = ref(false);
    const searchBarRef = reactive({ searchResult: '' });
    const result = ref(null);
    const isMobile = ref(mapMobileObserver().isMobile.get());

    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      return count ? count.toString() : null;
    });

    const accountIcon = computed(() => isAuthenticated.value ? 'profile_fill' : 'profile');

    // TODO: https://github.com/DivanteLtd/vue-storefront/issues/4927
    const handleAccountClick = async () => {
      if (isAuthenticated.value) {
        const localeAccountPath = root.localePath({ name: 'my-account' });
        return router.push(localeAccountPath);
      }

      toggleLoginModal();
    };

    const closeSearch = () => {
      const wishlistClassName = 'sf-product-card__wishlist-icon';
      const isWishlistIconClicked = event.path.find(p => wishlistClassName.search(p.className) > 0);
      if (isWishlistIconClicked || !isSearchOpen.value) return;

      isSearchOpen.value = false;
      searchBarRef.searchResult = '';
    };

    const handleSearch = () => {
      router.push({ path: `/search/${searchBarRef.searchResult}` });
    };

    const closeOrFocusSearchBar = () => {
      if (isMobile.value) {
        return closeSearch();
      }
    };

    const removeSearchResults = () => {
      result.value = null;
    };

    onBeforeUnmount(() => {
      unMapMobileObserver();
    });

    return {
      accountIcon,
      cartTotalItems,
      handleAccountClick,
      toggleCartSidebar,
      toggleWishlistSidebar,
      isSearchOpen,
      closeSearch,
      handleSearch,
      result,
      closeOrFocusSearchBar,
      searchBarRef,
      isMobile,
      isMobileMenuOpen,
      removeSearchResults,
      addBasePath,
      isNavFlyoutOpen,
      navFlyoutCategory,
      updateNavFlyout,
      convertLink
    };
  },
  watch: {
    $route () {
      this.updateNavFlyout();
    }
  }
};
</script>

<style lang="scss" scoped>
.sf-header {
  --header-padding:  var(--spacer-sm);
  @include for-desktop {
    --header-padding: 0;
  }
  &__logo-image {
    height: 100%;
  }
}

.sf-search-bar {
  min-width: var(--search-bar-width);
}

.header-on-top {
  z-index: 2;
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

.cart-badge {
  position: absolute;
  bottom: 40%;
  left: 40%;
}
</style>
