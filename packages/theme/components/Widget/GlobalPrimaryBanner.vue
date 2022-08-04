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
        :srcsets="srcSetImage"
        :alt="widget.altImageLarge || ''"
        class="primary-banner__background_secondary"
        width="1920"
      />
    </SfLink>
    <SfImage v-else
        :src="widget.imageLarge"
        :srcSet="srcSetImage"
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
  setup(props) {

    const { convertLink } = useUiHelpers();

    const srcSetImage = [
      {
        src: props.widget.imageSmall,
        width: 400,
        breakpoint: 480
      },
      {
        src: props.widget.imageMedium,
        width: 1280,
        breakpoint: 768},
      {
        src: props.widget.imageLarge,
        width: 1920,
        breakpoint: 1200}
    ];

    return {
      convertLink,
      srcSetImage
    };
  }
};
</script>

<style lang="scss" scoped>

  .primary-banner {
    position: relative;
    width: 100%;
    height: max-content;

    &__background_secondary {
      position: relative;
      width: inherit;
      height: inherit;
      object-fit: cover;
    }

    &__background {
      position: relative;
      height: max-content;
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
      &__wrapper {
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
