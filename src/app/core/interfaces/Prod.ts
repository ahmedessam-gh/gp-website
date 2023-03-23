import { Interface } from 'readline';
import { cart } from './cart';

export class Prod {
  id: number;
  ProdName: string;
  Price: number;
  Category: string;
  img: string;
  size: string;
  color: prodDetails[];
  colorChosen: string;

  quantity: Number = 1;
}
export interface prodDetails {
  value: string;
  label: string;
  imgUrl: string;
}
