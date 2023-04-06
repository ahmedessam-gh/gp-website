import { Prod, prodDetails } from './Prod';

export class cart implements Prod {
  id: number;
  ProdName: string;
  Price: number;
  Category: string;
  img: string;
  size: string;
  color: prodDetails[];
  colorChosen: string;
  discount: number;
  status: string;
  rating: number;
  rent: boolean;
  note: string;
  details: string;

  quantity: Number = 1;
}
