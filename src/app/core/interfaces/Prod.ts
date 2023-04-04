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
  discount: number;
  quantity: Number = 1;
  status: string;
  rating: number;
  rent: boolean;
  note: string;
}
export interface prodDetails {
  value: string;
  label: string;
  imgUrl: string;
}
