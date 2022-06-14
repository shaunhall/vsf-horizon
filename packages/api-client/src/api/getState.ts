import { Context } from '@vue-storefront/core';
import { ExecutionResult } from 'graphql';
import siteSettingsQuery from 'src/graphql-operations/queries/siteSettings.graphql';
import { SiteSettings } from 'src/types';

export async function getState(context: Context): Promise<ExecutionResult<SiteSettings>> {
  const siteSettingsResponse: ExecutionResult<SiteSettings> = await context.client.query({ query: siteSettingsQuery })
    .catch((err) => {
      console.log(err);
    });
  return siteSettingsResponse;
}
