import { CategoryGetters, AgnosticCategoryTree } from '@vue-storefront/core';
import type { Category } from '@vue-storefront/horizon-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTree(category: Category): AgnosticCategoryTree {
  if (category?.link?.url) {
    const items: AgnosticCategoryTree[] = category.subNavigation?.map((nav) => {
      return {
        label: nav?.displayName,
        slug: nav?.link?.url,
        items: nav.subNavigation?.map((subNav) => {
          return {
            label: subNav?.displayName,
            slug: subNav?.link?.url,
            items: [],
            isCurrent: false,
            image: {
              url: subNav.image?.url,
              alt: subNav.image?.alt
            }
          };
        }) || [],
        isCurrent: false,
        image: {
          url: nav.image?.url,
          alt: nav.image?.alt
        }
      };
    }) || [];
    return {
      label: category.displayName,
      slug: category.link?.url,
      items,
      isCurrent: false,
      image: {
        url: category.image?.url,
        alt: category.image?.alt
      }
    };
  } else {
    return undefined;
  }
}

export const categoryGetters: CategoryGetters<Category> = {
  getTree
};
