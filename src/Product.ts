import { Price } from './Price';

export interface Product {
  name: string;
  description: string;
  longDescription: string;
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  price: Price;
}
