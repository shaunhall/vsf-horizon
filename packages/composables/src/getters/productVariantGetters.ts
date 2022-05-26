import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import type { ProductVariant, ProductFilter, ProductVariantFilter } from '@vue-storefront/horizon-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getName(product: ProductVariant): string {
  return product?.title || '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSlug(product: ProductVariant): string {
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getPrice(product: ProductVariant): AgnosticPrice {
  return {
    regular: parseFloat(product?.price?.rrp.amount),
    special: parseFloat(product?.price?.price.amount) < parseFloat(product?.price?.rrp.amount)
      ? parseFloat(product?.price?.price.amount)
      : null
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getGallery(product: ProductVariant): AgnosticMediaGalleryItem[] {
  if (product) {
    return product.images?.length
      ? product.images.map((image => {
        return {
          small: image.largeProduct,
          normal: image.zoom,
          big: image.original
        };
      }))
      : product.product?.images.map((image => {
        return {
          small: image.largeProduct,
          normal: image.zoom,
          big: image.original
        };
      }));
  } else {
    return [];
  }
  return product ? product?.images?.map((image => {
    return {
      small: image.largeProduct,
      normal: image.zoom,
      big: image.original
    };
  })) : [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCoverImage(product: ProductVariant): string {
  return null;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFiltered(products: ProductVariant[], filters: ProductVariantFilter): ProductVariant[] {
  return products.filter((variant) => {
    let shouldAccept = true;
    if (filters.sku !== undefined) {
      shouldAccept = filters.sku === variant.sku;
    }
    if (filters.title !== undefined) {
      shouldAccept = filters.title === variant.title;
    }
    if (filters.inStock !== undefined) {
      shouldAccept = filters.inStock;
    }
    return shouldAccept;
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAttributes(product: ProductVariant, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> {
  const attributes = {};
  product?.choices?.forEach(choice => {
    if (filterByAttributeName?.length && !filterByAttributeName.includes(choice.optionKey)) {
      return null;
    }
    attributes[choice.optionKey] = {
      value: choice.optionKey === 'Colour' ? choice.colour : choice.key,
      label: choice.title
    };
  });
  return attributes;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getDescription(product: ProductVariant): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getCategoryIds(product: ProductVariant): string[] {
  return [];
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getId(product: ProductVariant): string {
  return '1';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getFormattedPrice(price: number): string {
  return String(price);
}

function getDisplayPrice(product: ProductVariant, type: 'rrp' | 'actual' = 'actual'): string {
  if (product?.price) {
    return type === 'rrp'
      ? product?.price.rrp.displayValue
      : product?.price.price.displayValue;
  } else {
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTotalReviews(product: ProductVariant): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getAverageRating(product: ProductVariant): number {
  return 0;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getIsInStock(product: ProductVariant): boolean {
  return product?.inStock;
}

const getBreadcrumbs = (product: ProductVariant): any => {
  const breadCrumbs = [
    {
      text: 'Home',
      route: {
        link: '/'
      }
    }
  ];
  if (product && product?.title) {
    breadCrumbs.push({
      text: getName(product),
      route: {
        link: '#'
      }
    });
  }
  return breadCrumbs;
};

export const productVariantGetters: ProductGetters<ProductVariant, ProductFilter> = {
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
  getDisplayPrice,
  getTotalReviews,
  getAverageRating,
  getIsInStock,
  getBreadcrumbs
};
