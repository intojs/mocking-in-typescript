import { Product } from './Product';
import { Price } from './Price';

export const filterProductsByName =
  (name: string) =>
    (products: Product[]) =>
      products.filter((product: Product) => product.name.includes(name));

export const addPriceToProduct =
  (price: Price) =>
    (product: Product) => ({
      ...product,
      price: {...price}
    });
