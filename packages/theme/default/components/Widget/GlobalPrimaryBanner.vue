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
  setup(props) {
    const { convertLink } = useUiHelpers();
    console.log(props.banner);

    return {
      convertLink
    };
  }
};
</script>

<style lang="scss" scoped>
  .primary-banner {

    position: relative;
    min-height: 500px;

    &__background_secondary {
      position: relative;
      top: 0;
      left: 0;
      width: inherit;
      height: inherit;
      min-height: inherit;
      object-fit: cover;
    }

    &__background {
      position: absolute;
      top: 0;
      left: 0;
      width: inherit;
      min-height: inherit;
      object-fit: cover;
    }
  }
  ::v-deep {
    .sf-banner {
      &__call-to-action {
        z-index: 2;
      }
    }
  }
</style>
