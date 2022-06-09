import {
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import { CollectionQuery, PageWidgetsFragment } from '@vue-storefront/horizon-api/lib/graphql-types';

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getWidgets(page: CollectionQuery['page'], typenames: string[]): ArrElement<PageWidgetsFragment['widgets']>[] {
  return typenames?.length ? page?.widgets?.filter(widget => typenames.includes(widget.__typename)) : page?.widgets;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getBreadcrumbs(page: CollectionQuery['page']): AgnosticBreadcrumb[] {
  let breadcrumbs: AgnosticBreadcrumb[];
  if (page && page?.breadcrumbs) {
    breadcrumbs = page.breadcrumbs.map(breadcrumb => {
      return {
        text: breadcrumb.displayName,
        link: breadcrumb.pagePath
      };
    });
  } else {
    breadcrumbs = [
      {
        text: 'Home',
        link: '/'
      }
    ];
  }
  return breadcrumbs;
}

function getTitle(page: CollectionQuery['page']): string {
  return page?.title;
}

function getMetaDescription(page: CollectionQuery['page']): string {
  return page?.metaDescription;
}

function getMetaKeywords(page: CollectionQuery['page']): string[] {
  return page?.metaSearchKeywords;
}

export const pageGetters = {
  getWidgets,
  getBreadcrumbs,
  getTitle,
  getMetaDescription,
  getMetaKeywords
};
