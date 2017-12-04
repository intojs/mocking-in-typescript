import { Product } from './Product';
import { Price } from './Price';

import { filterProductsByName, addPriceToProduct } from './product-utils';

describe('product-utils', () => {
  test('filterProductsByName', () => {
    const name = 'Puffy';
    const puffy: Product = {
      name: 'Puffy',
      description: 'the description',
      longDescription: 'the long description',
      imageOne: 'imageOne src',
      imageTwo: 'imageTwo src',
      imageThree: 'imageThree src',
      price: null // We do not need a price, keeping it null
    };
    const fluffy: Product = {
      name: 'Flully',
      description: 'the description',
      longDescription: 'the long description',
      imageOne: 'imageOne src',
      imageTwo: 'imageTwo src',
      imageThree: 'imageThree src',
      price: null // We do not need a price, keeping it null
    };
    const products: Product[] = [puffy, fluffy];
    expect(filterProductsByName('Puffy')(products)).toEqual([puffy]);
  });

  test('addPriceToProduct', () => {
    const product: Product = {
      name: 'Flully',
      description: 'the description',
      longDescription: 'the long description',
      imageOne: 'imageOne src',
      imageTwo: 'imageTwo src',
      imageThree: 'imageThree src',
      price: null // We do not need a price, keeping it null
    };
    const price: Price = {
      value: 1000,
      currency: 'EUR',
      vat: 190,
      stringRepresentation: '1190 &euro;'
    };
    const productWithPrice: Product = {
      name: 'Flully',
      description: 'the description',
      longDescription: 'the long description',
      imageOne: 'imageOne src',
      imageTwo: 'imageTwo src',
      imageThree: 'imageThree src',
      price: {
        value: 1000,
        currency: 'EUR',
        vat: 190,
        stringRepresentation: '1190 &euro;'
      }
    };
    expect(addPriceToProduct(price)(product)).toEqual(productWithPrice);
  });
});
