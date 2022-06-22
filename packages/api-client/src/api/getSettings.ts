import { Context, CustomQuery } from '@vue-storefront/core';
import { ExecutionResult } from 'graphql';
import initialSettingsQuery from 'src/graphql-operations/queries/initialSettings.graphql';
import { SiteSettings } from 'src/types';
import { queryWithCookies } from './_utils';

export async function getSettings(context: Context, customQuery: CustomQuery): Promise<ExecutionResult<SiteSettings>> {
  const siteSettingsResponse = await queryWithCookies<SiteSettings>(context, initialSettingsQuery, {}, customQuery);
  return siteSettingsResponse;
}
