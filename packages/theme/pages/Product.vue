<template>
  <div id="product">
    <SfBreadcrumbs
      class="breadcrumbs desktop-only"
      :breadcrumbs="breadcrumbs"
    />
    <div class="product">
      <LazyHydrate when-idle>
        <SfGallery :images=" variantProductGallery && variantProductGallery.length ? variantProductGallery : productGallery" class="product__gallery" />
      </LazyHydrate>

      <div class="product__info">
        <div class="product__header">
          <SfHeading
            :title="productVariantGetters.getName(currentVariant)"
            :level="3"
            class="sf-heading--no-underline sf-heading--left"
          />
          <SfIcon
            icon="drag"
            size="xxl"
            color="var(--c-text-disabled)"
            class="product__drag-icon smartphone-only"
          />
        </div>
        <div class="product__price-and-rating">
          <SfPrice
            :regular="productVariantGetters.getPrice(currentVariant).regular && productVariantGetters.getDisplayPrice(currentVariant, 'rrp')"
            :special="productVariantGetters.getPrice(currentVariant).special && productVariantGetters.getDisplayPrice(currentVariant)"
          />
          <div v-if="!!totalReviews">
            <div class="product__rating">
              <SfRating
                :score="averageRating"
                :max="5"
              />
              <a href="#" class="product__count">
                ({{ totalReviews }})
              </a>
            </div>
            <SfButton class="sf-button--text">{{ $t('Read all reviews') }}</SfButton>
          </div>
        </div>
        <div>
          <div class="product__description desktop-only" v-html="productGetters.getDescription(product)" />
          <SfButton class="sf-button--text desktop-only product__guide">
            {{ $t('Size guide') }}
          </SfButton>
          <template v-for="optionKey in Object.keys(options)">
            <div v-if="optionKey === 'Colour'" class="product__colors desktop-only" :key="optionKey">
              <p class="product__color-label">{{ $t('Color') }}:</p>
              <SfColor
                v-for="(colour, i) in options[optionKey]"
                :key="i"
                :color="colour.value"
                :selected="colour.value === configuration[optionKey].value"
                class="product__color"
                @click="updateSelectedVariant(optionKey, colour.label)"
              />
            </div>
            <SfSelect
              v-e2e="optionKey + '-select'"
              v-else
              :key="optionKey"
              :value="configuration[optionKey].label"
              @input="option => updateSelectedVariant( optionKey, option)"
              label="Size"
              class="sf-select--underlined product__select-size"
              :required="true"
            >
              <SfSelectOption
                v-for="option in options[optionKey]"
                :key="option.value"
                :value="option.label"
              >
                {{option.label}}
              </SfSelectOption>
            </SfSelect>

          </template>
          <SfAddToCart
            v-e2e="'product_add-to-cart'"
            :stock="stock"
            v-model="qty"
            :disabled="loading"
            :canAddToCart="stock > 0"
            class="product__add-to-cart"
            @click="addItem({ product, quantity: parseInt(qty) })"
          />
        </div>

        <LazyHydrate when-idle>
          <SfTabs :open-tab="1" class="product__tabs">
            <SfTab title="Read reviews" v-if="reviews">
              <SfReview
                v-for="review in reviews"
                :key="reviewGetters.getReviewId(review)"
                :author="reviewGetters.getReviewAuthor(review)"
                :date="reviewGetters.getReviewDate(review)"
                :message="reviewGetters.getReviewMessage(review)"
                :max-rating="reviewGetters.getMax"
                :rating="reviewGetters.getReviewRating(review)"
                :char-limit="250"
                read-more-text="Read more"
                hide-full-text="Read less"
                class="product__review"
              />
            </SfTab>
            <SfTab
              v-for="(info, idx) in productGetters.getAdditionalInformation(product)" :key="idx" class="product__additional-info"
              :title="$t('productAttributes.' + info.label)"
            >
              <p class="product__additional-info__paragraph" v-html="info.value" />
            </SfTab>
          </SfTabs>
        </LazyHydrate>
      </div>
    </div>
    <!-- <LazyHydrate when-visible>
      <RelatedProducts
        :products="relatedProducts"
        :loading="relatedLoading"
        title="Match it with"
      />
    </LazyHydrate> -->

    <!-- <LazyHydrate when-visible>
      <InstagramFeed />
    </LazyHydrate> -->

  </div>
</template>
<script>
import {
  SfProperty,
  SfHeading,
  SfPrice,
  SfRating,
  SfSelect,
  SfAddToCart,
  SfTabs,
  SfGallery,
  SfIcon,
  SfImage,
  SfBanner,
  SfAlert,
  SfSticky,
  SfReview,
  SfBreadcrumbs,
  SfButton,
  SfColor
} from '@storefront-ui/vue';

import InstagramFeed from '~/components/InstagramFeed.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';
import { ref, computed, useRoute, useRouter } from '@nuxtjs/composition-api';
import { useProduct, useCart, productGetters, productVariantGetters, reviewGetters } from '@vue-storefront/horizon';
import { onSSR } from '@vue-storefront/core';
import LazyHydrate from 'vue-lazy-hydration';
import { addBasePath } from '@vue-storefront/core';

export default {
  name: 'Product',
  transition: 'fade',
  setup() {
    const qty = ref(1);
    const route = useRoute();
    const router = useRouter();
    const { products, search, loading: productLoading } = useProduct('products');
    const { addItem, loading } = useCart();
    const product = computed(() => productGetters.getFiltered(products.value)[0]);
    const reviewBlob = computed(() => productGetters.getReviews(product.value));
    const reviews = computed(() => reviewGetters.getItems(reviewBlob?.value));
    const id = computed(() => route.value.params.id);
    const filters = computed(() => route.value.query);
    const currentVariant = computed(() => productGetters.getVariant(product.value, filters.value));
    const options = computed(() => productGetters.getAttributes(product.value));
    const configuration = computed(() => productVariantGetters.getAttributes(currentVariant.value));
    const title = computed(() => productVariantGetters.getName(currentVariant.value));

    // TODO: Breadcrumbs are temporary disabled because productGetters return undefined. We have a mocks in data
    const breadcrumbs = computed(() => productGetters.getBreadcrumbs(product.value));
    const productGallery = computed(() => productGetters.getGallery(product.value)?.map((img, idx) => ({
      mobile: { url: addBasePath(img.small) },
      desktop: { url: addBasePath(img.normal) },
      big: { url: addBasePath(img.big) },
      alt: `${title} image ${idx}`
    })));

    const variantProductGallery = computed(() => productVariantGetters.getGallery(currentVariant.value)?.map((img, idx) => ({
      mobile: { url: addBasePath(img.small) },
      desktop: { url: addBasePath(img.normal) },
      big: { url: addBasePath(img.big) },
      alt: `${title} image ${idx}`
    })));

    onSSR(async () => {
      await search({ sku: id.value });
    });

    const updateSelectedVariant = (key, value) => {
      const newConfig = {};
      const keys = Object.keys(configuration.value);
      keys.forEach(k => {
        newConfig[k] = configuration.value[k].label;
      });
      newConfig[key] = value;
      router.replace({
        path: route.value.path,
        query: {
          ...newConfig
        }
      });
    };

    return {
      updateSelectedVariant,
      configuration,
      product,
      breadcrumbs,
      reviewGetters,
      averageRating: computed(() => productGetters.getAverageRating(product.value)),
      totalReviews: computed(() => productGetters.getTotalReviews(product.value)),
      options,
      qty,
      productLoading,
      addItem,
      loading,
      productGetters,
      productVariantGetters,
      productGallery,
      currentVariant,
      variantProductGallery,
      reviews
    };
  },
  components: {
    SfAlert,
    SfColor,
    SfProperty,
    SfHeading,
    SfPrice,
    SfRating,
    SfSelect,
    SfAddToCart,
    SfTabs,
    SfGallery,
    SfIcon,
    SfImage,
    SfBanner,
    SfSticky,
    SfReview,
    SfBreadcrumbs,
    SfButton,
    InstagramFeed,
    RelatedProducts,
    LazyHydrate
  },
  data() {
    return {
      stock: 5,
      properties: [
        {
          name: 'Product Code',
          value: '578902-00'
        },
        {
          name: 'Category',
          value: 'Pants'
        },
        {
          name: 'Material',
          value: 'Cotton'
        },
        {
          name: 'Country',
          value: 'Germany'
        }
      ],
      detailsIsActive: false,
      brand:
          'Brand name is the perfect pairing of quality and design. This label creates major everyday vibes with its collection of modern brooches, silver and gold jewellery, or clips it back with hair accessories in geo styles.',
      careInstructions: 'Do not wash!'
    };
  }
};
</script>

<style lang="scss" scoped>
#product {
  box-sizing: border-box;
  @include for-desktop {
    max-width: 1272px;
    margin: 0 auto;
  }
}
.product {
  @include for-desktop {
    display: flex;
  }
  &__info {
    margin: var(--spacer-sm) auto;
    @include for-desktop {
      max-width: 32.625rem;
      margin: 0 0 0 7.5rem;
    }
  }
  &__header {
    --heading-title-color: var(--c-link);
    --heading-title-font-weight: var(--font-weight--bold);
    --heading-padding: 0;
    margin: 0 var(--spacer-sm);
    display: flex;
    justify-content: space-between;
    @include for-desktop {
      --heading-title-font-weight: var(--font-weight--semibold);
      margin: 0 auto;
    }
  }
  &__drag-icon {
    animation: moveicon 1s ease-in-out infinite;
  }
  &__price-and-rating {
    margin: 0 var(--spacer-sm) var(--spacer-base);
    align-items: center;
    @include for-desktop {
      display: flex;
      justify-content: space-between;
      margin: var(--spacer-sm) 0 var(--spacer-lg) 0;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: var(--spacer-xs) 0 var(--spacer-xs);
  }
  &__count {
    @include font(
      --count-font,
      var(--font-weight--normal),
      var(--font-size--sm),
      1.4,
      var(--font-family--secondary)
    );
    color: var(--c-text);
    text-decoration: none;
    margin: 0 0 0 var(--spacer-xs);
  }
  &__description {
    @include font(
      --product-description-font,
      var(--font-weight--light),
      var(--font-size--base),
      1.6,
      var(--font-family--primary)
    );
  }
  &__select-size {
    margin: 0 var(--spacer-sm);
    @include for-desktop {
      margin: 0;
    }
  }
  &__colors {
    @include font(
      --product-color-font,
      var(--font-weight--normal),
      var(--font-size--lg),
      1.6,
      var(--font-family--secondary)
    );
    display: flex;
    align-items: center;
    margin-top: var(--spacer-xl);
  }
  &__color-label {
    margin: 0 var(--spacer-lg) 0 0;
  }
  &__color {
    margin: 0 var(--spacer-2xs);
  }
  &__add-to-cart {
    margin: var(--spacer-base) var(--spacer-sm) 0;
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__guide,
  &__compare,
  &__save {
    display: block;
    margin: var(--spacer-xl) 0 var(--spacer-base) auto;
  }
  &__compare {
    margin-top: 0;
  }
  &__tabs {
    --tabs-title-z-index: 0;
    margin: var(--spacer-lg) auto var(--spacer-2xl);
    --tabs-title-font-size: var(--font-size--lg);
    @include for-desktop {
      margin-top: var(--spacer-2xl);
    }
  }
  &__property {
    margin: var(--spacer-base) 0;
    &__button {
      --button-font-size: var(--font-size--base);
    }
  }
  &__review {
    padding-bottom: 24px;
    border-bottom: var(--c-light) solid 1px;
    margin-bottom: var(--spacer-base);
  }
  &__additional-info {
    color: var(--c-link);
    @include font(
      --additional-info-font,
      var(--font-weight--light),
      var(--font-size--sm),
      1.6,
      var(--font-family--primary)
    );
    &__title {
      font-weight: var(--font-weight--normal);
      font-size: var(--font-size--base);
      margin: 0 0 var(--spacer-sm);
      &:not(:first-child) {
        margin-top: 3.5rem;
      }
    }
    &__paragraph {
      margin-top: 0;
    }
  }
  &__gallery {
    flex: 1;
  }
}
.breadcrumbs {
  margin: var(--spacer-base) auto var(--spacer-lg);
}
@keyframes moveicon {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, 30%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
