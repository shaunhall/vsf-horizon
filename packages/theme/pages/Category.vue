<template>
  <div>
    <SfLoader v-if="loading" />
    <template v-for="(widget, index) in widgets" v-else>
      <template v-if="widget.__typename == 'ProductListWidget'">
        <!-- ProductListWidget -->
        <WidgetProductList
          :key="widget.id + index"
          :product-list="widget.productList"
          type="collection"
        />
      </template>
      <template v-else-if="widget.__typename == 'GlobalPrimaryBanner'">
        <WidgetGlobalPrimaryBanner
          :key="widget.id + index"
          :widget="widget"
        />
      </template>
      <template v-else>
        <WidgetNotSupported
          :key="widget.__typename + index"
          :name="widget.__typename"
        />
      </template>
    </template>
  </div>
</template>

<script>
import { computed, useRoute } from '@nuxtjs/composition-api';
import { usePage, pageGetters } from '@vue-storefront/horizon';
import { useUiHelpers } from '~/composables';
import { SfLoader } from '@storefront-ui/vue';
import LazyHydrate from 'vue-lazy-hydration';
import { onSSR } from '@vue-storefront/core';
import CategoryPageHeader from '~/components/CategoryPageHeader';
import WidgetProductList from '~/components/Widget/ProductList';
import WidgetGlobalPrimaryBanner from '~/components/Widget/GlobalPrimaryBanner';
import WidgetNotSupported from '~/components/Widget/NotSupported';

export default {
  transition: 'fade',
  setup(props, context) {
    const th = useUiHelpers();
    const route = useRoute();
    const { result, search, loading, error } = usePage();

    const path = computed(() => route?.value?.path);
    const page = computed(() => route?.value?.query?.page);
    const sort = computed(() => route?.value?.query?.sort);
    const initialFilters = computed(() => th.getFacetsFromURL(route?.value?.query?.filters));
    const widgets = computed(() => pageGetters?.getWidgets(result?.value?.data));
    const input = computed(() => result?.value?.input);

    onSSR(async () => {
      await search({
        sort: sort.value || 'RELEVANCE',
        categorySlug: path.value.replace(/^\/[a-zA-Z]+/g, '').replace(/\/$/, ''),
        itemsPerPage: 30,
        page: page?.value && page.value - 1,
        facets: initialFilters?.value });
      if (error?.value?.search) context.root.$nuxt.error({ statusCode: 404 });
    });

    return {
      widgets,
      input,
      loading
    };
  },
  components: {
    CategoryPageHeader,
    WidgetProductList,
    WidgetGlobalPrimaryBanner,
    WidgetNotSupported,
    LazyHydrate,
    SfLoader
  }
};
</script>

<style lang="scss" scoped>
</style>
