<template>
  <div>
    <template v-if="loading" />
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
import { computed, useRoute, useFetch } from '@nuxtjs/composition-api';
import { usePage, pageGetters } from '@vue-storefront/horizon';
import { useUiHelpers } from '~/composables';
import LazyHydrate from 'vue-lazy-hydration';
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

    const { fetch } = useFetch(async () => {
      await search({
        sort: sort.value || 'RELEVANCE',
        categorySlug: path.value.replace(/^\/[a-zA-Z]+/g, '').replace(/\/$/, ''),
        itemsPerPage: 30,
        page: page?.value && page.value - 1,
        facets: initialFilters?.value });
      if (error?.value?.search) context.root.$nuxt.error({ statusCode: 404 });
    });

    fetch();

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
    LazyHydrate
  }
};
</script>

<style lang="scss" scoped>
</style>
