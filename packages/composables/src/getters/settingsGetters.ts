
import { Country, Currency } from '@vue-storefront/horizon-api';
import { ActiveSettings, EnhancedSettings } from '../types';

export interface UseSettingsGetters {
  getCurrencies(settings: EnhancedSettings): Currency[];
  getShippingDestinations(settings: EnhancedSettings): Country[];
  getHeader(settings: EnhancedSettings): EnhancedSettings['header'];
  getFooter(settings: EnhancedSettings): EnhancedSettings['footer'];
  getSelected(settings: EnhancedSettings): ActiveSettings['active'] | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getCurrencies = (settings: EnhancedSettings): Currency[] => settings.supportedCurrencies;

const getShippingDestinations = (settings: EnhancedSettings): Country[] => settings.supportedShippingDestinations;

const getHeader = (settings: EnhancedSettings): EnhancedSettings['header'] => settings.header;

const getFooter = (settings: EnhancedSettings): EnhancedSettings['footer'] => settings.footer;

const getSelected = (settings: EnhancedSettings): ActiveSettings['active'] => settings.active;

export const settingsGetters: UseSettingsGetters = {
  getCurrencies,
  getShippingDestinations,
  getHeader,
  getFooter,
  getSelected
};
