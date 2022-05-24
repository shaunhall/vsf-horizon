import { ProductContentItem } from '@vue-storefront/horizon-api/lib/graphql-types';

export const getContentItemValueAsString = (contentItem: ProductContentItem): string => {
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
