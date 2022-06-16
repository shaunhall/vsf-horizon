import { Context } from '@vue-storefront/core';
import { ExecutionResult } from 'graphql';
import siteSettingsQuery from 'src/graphql-operations/queries/siteSettings.graphql';
import { SiteSettings } from 'src/types';
import { queryWithCookies } from './_utils';

export async function getStore(context: Context): Promise<ExecutionResult<SiteSettings>> {
  const siteSettingsResponse = await queryWithCookies<SiteSettings>(context, siteSettingsQuery);
  return siteSettingsResponse;
}
