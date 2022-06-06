import { ProductQuery } from '@vue-storefront/horizon-api/lib/graphql-types';

type ArrElement<ArrType> = ArrType extends readonly (infer ElementType)[]
  ? ElementType
  : never;

export const getContentItemValueAsString = (contentItem: ArrElement<ProductQuery['product']['content']>): string => {
  const itemValue = contentItem.value;
  switch (itemValue.__typename) {
    case 'ProductContentStringValue':
      return itemValue.stringValue;
    case 'ProductContentStringListValue':
      return itemValue.stringListValue[0];
    case 'ProductContentIntValue':
      return itemValue.intValue.toString();
    case 'ProductContentIntListValue':
      return itemValue.intListValue.toString();
    case 'ProductContentRichContentValue':
      return itemValue.richContentValue.content[0].content;
    case 'ProductContentRichContentListValue':
      return itemValue.richContentListValue[0].content[0].content;
    default:
      return null;
  }
};

export const isValidHttpUrl = (link: string): boolean => {

  let url;

  try {
    url = new URL(link);
  } catch (_) {
    return false;
  }

  return url.protocol === 'http:' || url.protocol === 'https:';
};

export const convertLink = (oldLink: string): string => {
  if (!oldLink) {
    return '';
  }
  if (isValidHttpUrl(oldLink)) {
    return oldLink;
  }
  let link = oldLink;

  const linkArray = link.split('?');
  const newLink = (linkArray[0][0] === '/') ? linkArray[0] : '/' + linkArray[0];

  if (link.includes('.list')) {
    link = `/c${newLink}/`;
    link = link.replace('.list', '');
  } else if (link.includes('.html')) {
    link = `/p${newLink}/`;
    link = link.replace('.html', '');
  } else if (link.includes('.search')) {
    link = '/search/';
  } else {
    link = linkArray[0];
  }

  if (linkArray.length > 1) {
    const linkQuery = `?${linkArray[1]}`;
    link = link + linkQuery;
  }

  if (link.includes('?search')) {
    link = link.replace('?search', '?q');
  }

  return link;
};
