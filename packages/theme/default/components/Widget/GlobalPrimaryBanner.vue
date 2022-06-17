<template>
 <SfBanner
  :title="widget.headline"
  :subtitle="widget.subtitle"
  :buttonText="widget.ctaOne"
  :link="convertLink(widget.ctaOneURL)"
  :class="`sf-banner--${widget.contentAlign || left} primary-banner`"
  :style="`--banner-title-color: var(--c-${widget.contentTheme}); --banner-subtitle-color: var(--c-${widget.contentTheme}; --banner-description-color: var(--c-${widget.contentTheme});`"
 >
  <template #img-tag>
    <SfLink v-if="widget.bannerURL"
      :link="convertLink(widget.bannerURL)"
      class="primary-banner__background"
    >
      <SfImage
        :src="widget.imageLarge"
        :alt="widget.altImageLarge || ''"
        class="primary-banner__background_secondary"
        width="1920"
      />
    </SfLink>
    <SfImage v-else
        :src="widget.imageLarge"
        :alt="widget.altImageLarge || ''"
        class="primary-banner__background"
      />
  </template>
 </SfBanner>
</template>

<script>
import {
  SfBanner,
  SfImage,
  SfLink
} from '@storefront-ui/vue';
import { useUiHelpers } from '~/composables';

export default {
  props: {
    widget: {
      type: Object
    }
  },
  components: {
    SfBanner,
    SfImage,
    SfLink
  },
  setup() {
    const { convertLink } = useUiHelpers();
    return {
      convertLink
    };
  }
};
</script>

<style lang="scss" scoped>

  .primary-banner {
    position: relative;

    &__background_secondary {
      position: relative;
      width: inherit;
      height: inherit;
      object-fit: cover;
    }

    &__background {
      position: relative;
      width: inherit;
      object-fit: cover;
    }
  }
  ::v-deep {
    .sf-banner {
      &__call-to-action {
        z-index: 2;
      }
      &__wrapper-desktop {
        position: absolute;
      }
      &__image {
        position: relative !important;
      }
    }
    .sf-image {
      position: relative;
    }
  }
</style>
