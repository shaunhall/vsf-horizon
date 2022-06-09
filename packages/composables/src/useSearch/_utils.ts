import { AgnosticFacet, AgnosticFacetSearchParams, AgnosticGroupedFacet, FacetSearchResult } from '@vue-storefront/core';
import type { Facet } from '@vue-storefront/horizon-api';
import { FacetInput, ProductListContentsFragment, ProductSort, SearchQueryVariables } from '@vue-storefront/horizon-api/lib/graphql-types';

export const convertToLocalSearchParams = (agnosticParams: AgnosticFacetSearchParams): SearchQueryVariables => {
  const convertedFacets = agnosticParams.facets && Object.entries(agnosticParams?.facets).map(([facetName, filters]) => {
    return {
      facetName,
      selections: filters
    };
  });
  return {
    query: agnosticParams.term,
    sort: agnosticParams.sort as ProductSort,
    limit: agnosticParams.itemsPerPage,
    offset: agnosticParams.itemsPerPage * agnosticParams.page,
    facets: convertedFacets as FacetInput[]
  };

};

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType : never;

const _getAgnosticFacet = (facet: ArrElement<ProductListContentsFragment['facets']>, searchInput: FacetSearchResult<Facet>['input']): AgnosticFacet[] => {
  const facets: AgnosticFacet[] = [];
  if (facet.__typename === 'SimpleFacet') {
    facet.options.forEach((option) => {
      facets.push({
        type: facet.__typename,
        id: option.optionName,
        value: { optionName: option.optionName },
        count: option.matchedProductCount,
        selected: searchInput?.filters && searchInput.filters[facet.facetName] && searchInput.filters[facet.facetName].includes(option.displayName),
        attrName: option.displayName
      });
    });
  }
  if (facet.__typename === 'RangedFacet') {
    facet.options.forEach((option) => {
      facets.push({
        type: facet.__typename,
        id: option.displayName,
        value: { from: option.from, to: option.to },
        count: option.matchedProductCount,
        selected: searchInput?.filters && searchInput.filters[facet.facetName] && searchInput.filters[facet.facetName].includes(option.displayName),
        attrName: option.displayName
      });
    });
  }
  if (facet.__typename === 'SliderFacet') {
    facets.push({
      type: facet.__typename,
      id: facet.facetName,
      value: { from: facet.minValue, to: facet.maxValue }
    });
  }
  return facets;
};

export const getAgnosticFacets = (horizonFacets: ProductListContentsFragment['facets'], searchInput: FacetSearchResult<Facet>['input']): AgnosticFacet[] => {
  const facets: AgnosticFacet[] = [];
  horizonFacets.forEach(facet => {
    facets.concat(_getAgnosticFacet(facet, searchInput));
  });

  return facets;
};

export type GroupedFacetWithType = AgnosticGroupedFacet & { type: string }

export const getGroupedAgnosticFacets = (horizonFacets: ProductListContentsFragment['facets'], searchInput: FacetSearchResult<Facet>['input']): GroupedFacetWithType[] => {
  return horizonFacets?.map(facet => {
    return {
      type: facet.__typename,
      id: facet.facetName,
      label: facet.facetHeader,
      options: _getAgnosticFacet(facet, searchInput)
    };
  });
};
