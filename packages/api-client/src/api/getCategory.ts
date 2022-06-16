import { Context } from '@vue-storefront/core';
import { HeaderFooterQuery, HeaderFooterQueryVariables } from 'src/graphql-types';
import { Category } from 'src/types';
import headerFooterQuery from 'src/graphql-operations/queries/headerFooter.graphql';
import { queryWithCookies } from './_utils';

export async function getCategories(context: Context, params: HeaderFooterQueryVariables): Promise<Category[]> {
  const navData: HeaderFooterQuery = await queryWithCookies<HeaderFooterQuery>(context, headerFooterQuery, params)
    .then(res => res.data);
  return navData?.header?.navigation?.topLevel || [];
}
