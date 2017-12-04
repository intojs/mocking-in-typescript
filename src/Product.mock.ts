import { Product } from './Product';

const getDefaults = (): Product => ({
  name: 'mock name',
  description: 'mock description',
  longDescription: 'mock long description',
  imageOne: 'mock imageOne src',
  imageTwo: 'mock imageTwo src',
  imageThree: 'mock imageThree src',
  price: null
});

export const getProductMock = (p?: Partial<Product>): Product => ({
  ...getDefaults(),
  ...p
});
