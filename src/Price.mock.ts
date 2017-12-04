import { Price } from './Price';

const getDefaults = (): Price => ({
  value: 1000,
  currency: 'EUR',
  vat: 190,
  stringRepresentation: '1190 &euro;'
});

export const getPriceMock = (p?: Partial<Price>): Price => ({
  ...getDefaults(),
  ...p
});
