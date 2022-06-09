import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters,
  AgnosticBreadcrumb
} from '@vue-storefront/core';
import type { Product, ProductFilter, ProductVariant, Review } from '@vue-storefront/horizon-api';
import { getContentItemValueAsString } from './_utils';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: Product): string {
  return product?.title || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: Product): string {
  return product?.url?.match('[^/]+')[0] || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: Product): AgnosticPrice {
  return {
    regular: parseFloat(product?.cheapestVariantPrice?.rrp.amount),
    special: parseFloat(product?.cheapestVariantPrice?.price.amount) < parseFloat(product?.cheapestVariantPrice?.rrp.amount)
      ? parseFloat(product?.cheapestVariantPrice.price.amount)
      : null
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: Product): AgnosticMediaGalleryItem[] {
  return product?.images.map((image => {
    return {
      small: image.largeProduct,
      normal: image.zoom,
      big: image.original
    };
  }));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: Product): string {
  return product?.images.length ? product.images[0].largeProduct : '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: Product[], filters: ProductFilter): Product[] {
  return products;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(product: Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  const options = product?.options;
  const agnosticAttributes = {} as any;
  options && options.forEach(option => {
    if (filterByAttributeName && !filterByAttributeName.includes(option.key)) {
      return;
    }
    const choices = option.choices.map(choice => {
      return {
        value: choice.optionKey === 'Colour' ? choice.colour : choice.key,
        label: choice.title
      };
    });
    agnosticAttributes[option.key] = choices;
  });
  return agnosticAttributes;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: Product): string {
  const synopsisContent = product?.content.filter(content => content.key === 'synopsis');
  if (synopsisContent?.length) {
    return getContentItemValueAsString(synopsisContent[0]);
  } else {
    return '';
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: Product): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: Product): string {
  return product?.sku || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return String(price);
}

function getDisplayPrice(product: Product, type: 'rrp' | 'actual' = 'actual'): string {
  if (product?.cheapestVariantPrice) {
    return type === 'rrp'
      ? product?.cheapestVariantPrice.rrp.displayValue
      : product?.cheapestVariantPrice.price.displayValue;
  } else {
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: Product): number {
  return product?.reviews?.total || 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: Product): number {
  return product?.reviews?.averageScore || 0;
}

const getBreadcrumbs = (product: Product): AgnosticBreadcrumb[] => {
  const breadCrumbs = [
    {
      text: 'Home',
      link: '/'
    }
  ];
  if (product && product?.title) {
    breadCrumbs.push({
      text: getName(product),
      link: '#'
    });
  }
  return breadCrumbs;
};

const getAdditionalInformation = (product: Product, informationFilters: string[]): AgnosticAttribute[] => {
  const contentList = product?.content;
  const additionalInfo = [];
  contentList?.forEach((content) => {
    const key = content.key;
    if (key === 'synopsis' || (informationFilters && !informationFilters.includes(key))) {
      return;
    }
    const value = getContentItemValueAsString(content);
    additionalInfo.push({
      label: key,
      value
    });
  });
  return additionalInfo;
};

const getVariants = (product: Product): ProductVariant[] => {
  return product?.variants as ProductVariant[] || [];
};

const getVariant = (product: Product, filters: Record<string, unknown>): ProductVariant => {
  if (product && filters && Object.keys(filters).length) {
    const filteredVariants = product?.variants.filter((variant) => {
      return Object.entries(filters).every(([key, value]) => variant.choices.filter(choice => choice.optionKey === key && choice.key === value).length);
    });
    return filteredVariants.length ? filteredVariants[0] : product?.defaultVariant;
  } else {
    return product?.defaultVariant;
  }
};

const getReviews = (product: Product): Review => {
  return product?.reviews;
};

export const productGetters: ProductGetters<Product, ProductFilter> = {
  getName,
  getSlug,
  getPrice,
  getGallery,
  getCoverImage,
  getFiltered,
  getAttributes,
  getDescription,
  getCategoryIds,
  getId,
  getFormattedPrice,
  getTotalReviews,
  getAverageRating,
  getBreadcrumbs,
  getAdditionalInformation,
  getDisplayPrice,
  getVariant,
  getVariants,
  getReviews
};
