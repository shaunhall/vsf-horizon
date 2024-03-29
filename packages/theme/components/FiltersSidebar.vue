<template>
  <div id="filters">
    <SfSidebar
      :visible="isFilterSidebarOpen"
      title="Filters"
      class="sidebar-filters"
      @close="toggleFilterSidebar"
    >
      <div class="filters desktop-only">
        <div v-for="(facet, i) in facets" :key="i">
          <SfHeading
            v-if="facet.options.filter(option => option.count > 0).length > 0"
            :level="4"
            :title="facet.label"
            class="filters__title sf-heading--left"
            :key="`filter-title-${facet.id}`"
          />
          <div>
            <SfFilter
              v-for="option in facet.options.filter(option => option.count > 0)"
              :key="`${facet.id}-${option.id}`"
              :label="option.attrName + `${option.count ? ` (${option.count})` : ''}`"
              :selected="isFilterSelected(facet, option)"
              class="filters__item"
              @change="() => selectFilter(facet, option)"
            />
          </div>
        </div>
      </div>
      <SfAccordion class="filters smartphone-only">
        <div v-for="(facet, i) in facets" :key="i">
          <SfAccordionItem
            :key="`filter-title-${facet.id}`"
            :header="facet.label"
            class="filters__accordion-item"
          >
            <SfFilter
              v-for="option in facet.options"
              :key="`${facet.id}-${option.id}`"
              :label="option.id"
              :selected="isFilterSelected(facet, option)"
              class="filters__item"
              @change="() => selectFilter(facet, option)"
            />
          </SfAccordionItem>
        </div>
      </SfAccordion>
      <template #content-bottom>
        <div class="filters__buttons">
          <SfButton
            class="sf-button--full-width"
            @click="applyFilters"
          >
            {{ $t('Done') }}
          </SfButton
          >
          <SfButton
            class="sf-button--full-width filters__button-clear"
            @click="clearFilters"
          >
            {{ $t('Clear all') }}
          </SfButton
          >
        </div>
      </template>
    </SfSidebar>
  </div>
</template>

<script>
import {
  SfSidebar,
  SfButton,
  SfHeading,
  SfFilter,
  SfAccordion,
  SfColor
} from '@storefront-ui/vue';

import { ref, onMounted, useRouter, useRoute } from '@nuxtjs/composition-api';
import { useUiHelpers, useUiState } from '~/composables';
import Vue from 'vue';

export default {
  name: 'FiltersSidebar',
  components: {
    SfButton,
    SfSidebar,
    SfFilter,
    SfAccordion,
    SfColor,
    SfHeading
  },
  props: {
    facets: {
      type: Array
    }
  },
  setup(props, context) {
    const { changeFilters, getFacetsFromURL } = useUiHelpers();
    const { toggleFilterSidebar, isFilterSidebarOpen } = useUiState();
    const router = useRouter();
    const route = useRoute();

    const selectedFilters = ref(getFacetsFromURL(route?.value?.query?.filters));
    const setSelectedFilters = () => {
      if (!props?.facets?.length || (selectedFilters.value && Object.keys(selectedFilters.value).length)) return;
      selectedFilters.value = props?.facets.reduce((prev, curr) => ({
        ...prev,
        [curr.id]: curr.options
          .filter(o => o.selected)
          .map(o => o.value)
      }), {});
    };

    const isFilterSelected = (facet, option) => {
      return (JSON.stringify(selectedFilters.value[facet.id]) || []).includes(JSON.stringify(option.value));
    };

    const selectFilter = (facet, option) => {
      if (!selectedFilters.value[facet.id]) {
        Vue.set(selectedFilters.value, facet.id, []);
      }
      if (selectedFilters.value[facet.id].find(f => JSON.stringify(f) === JSON.stringify(option.value))) {
        selectedFilters.value[facet.id] = selectedFilters.value[facet.id].filter(f => JSON.stringify(f) !== JSON.stringify(option.value));
        return;
      }

      selectedFilters.value[facet.id].push(option.value);
    };

    const clearFilters = () => {
      toggleFilterSidebar();
      selectedFilters.value = {};
      router.push({ path: route.value.path, query: {...route.value.query, filters: '', page: 1 } });
    };

    const applyFilters = () => {
      toggleFilterSidebar();
      const query = route.value.query;
      router.push({ path: route.value.path, query: { ...query, filters: changeFilters(selectedFilters.value), page: 1 } });
    };

    onMounted(() => {
      context.root.$scrollTo(context.root.$el, 2000);
      setSelectedFilters();
    });

    return {
      selectFilter,
      isFilterSelected,
      isFilterSidebarOpen,
      toggleFilterSidebar,
      clearFilters,
      applyFilters
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar-filters {
  --overlay-z-index: 3;
  --sidebar-title-display: none;
  --sidebar-top-padding: 0;
  @include for-desktop {
    --sidebar-content-padding: 0 var(--spacer-xl);
    --sidebar-bottom-padding: 0 var(--spacer-xl);
  }
}
::v-deep .sf-sidebar__aside {
  --sidebar-z-index: 3;
}
.filters {
  &__title {
    --heading-title-font-size: var(--font-size--xl);
    margin: var(--spacer-xl) 0 var(--spacer-base) 0;
    &:first-child {
      margin: calc(var(--spacer-xl) + var(--spacer-base)) 0 var(--spacer-xs) 0;
    }
  }
  &__colors {
    display: flex;
  }
  &__color {
    margin: var(--spacer-xs) var(--spacer-xs) var(--spacer-xs) 0;
  }
  &__chosen {
    color: var(--c-text-muted);
    font-weight: var(--font-weight--normal);
    font-family: var(--font-family--secondary);
    position: absolute;
    right: var(--spacer-xl);
  }
  &__item {
    --radio-container-padding: 0 var(--spacer-sm) 0 var(--spacer-xl);
    --radio-background: transparent;
    --filter-label-color: var(--c-secondary-variant);
    --filter-count-color: var(--c-secondary-variant);
    --checkbox-padding: 0 var(--spacer-sm) 0 var(--spacer-xl);
    padding: var(--spacer-sm) 0;
    border-bottom: 1px solid var(--c-light);
    &:last-child {
      border-bottom: 0;
    }
    @include for-desktop {
      --checkbox-padding: 0;
      margin: var(--spacer-sm) 0;
      border: 0;
      padding: 0;
    }
  }
  &__accordion-item {
    --accordion-item-content-padding: 0;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    width: 100vw;
  }
  &__buttons {
    margin: var(--spacer-sm) 0;
  }
  &__button-clear {
    --button-background: var(--c-light);
    --button-color: var(--c-dark-variant);
    margin: var(--spacer-xs) 0 0 0;
  }
}
</style>
