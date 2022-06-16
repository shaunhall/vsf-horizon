import { Store } from '@vue-storefront/horizon-api';
import { AgnosticStore, UseStoreGetters } from '@vue-storefront/core';
import { UseStoreFilterParams } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getItems(store: Store, criteria: UseStoreFilterParams = { key: 'currencies' }): AgnosticStore[] {
  return store ? store[criteria.key] : undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getSelected(store: Store): AgnosticStore | undefined {
  return store?.active;
}

export const storeGetters: UseStoreGetters<Store, UseStoreFilterParams> = {
  getItems,
  getSelected
};
