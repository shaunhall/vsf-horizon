import { Context } from '@vue-storefront/core';
import { HeaderFooterQuery, HeaderFooterQueryVariables } from 'src/graphql-types';
import { Category } from 'src/types';
import headerFooterQuery from 'src/graphql-operations/queries/headerFooter.graphql';

export async function getCategories(context: Context, params: HeaderFooterQueryVariables): Promise<Category[]> {
  const navData: HeaderFooterQuery = await context.client.query({ query: headerFooterQuery, variables: params })
    .then(res => res.data)
    .catch((err) => {
      console.log(err);
    });
  console.log(navData);
  return navData?.header?.navigation?.topLevel || [];
}
