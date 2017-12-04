import { Product } from './Product';
import { Price } from './Price';

import { filterProductsByName, addPriceToProduct } from './product-utils';
import { getProductMock } from './Product.mock';
import { getPriceMock } from './Price.mock';

describe('product-utils', () => {
  test('filterProductsByName', () => {
    const puffy = getProductMock({name: 'Puffy'});
    const fluffy: Product = getProductMock({name: 'Fluffy'});
    const products: Product[] = [puffy, fluffy];
    expect(filterProductsByName('Puffy')(products)).toEqual([puffy]);
  });

  test('addPriceToProduct', () => {
    const product: Product = getProductMock({name: 'Puffy'});
    const price: Price = getPriceMock({
      value: 2000
    });
    const productWithPrice: Product = getProductMock({
      name: 'Puffy',
      price
    });
    expect(addPriceToProduct(price)(product)).toEqual(productWithPrice);
  });
});
