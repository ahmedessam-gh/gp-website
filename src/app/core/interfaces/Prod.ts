export interface Prod {
  id: number;
  ProdName: string;
  Price: number;
  Category: string;
  img: string;
  size: string;
  color: prodDetails[];
  colorChosen: string;
  discount: number;
  quantity: number;
  status: string;
  rating: number;
  rent: boolean;
  note: string;
  details: string;
  isStock: boolean;
}
export interface prodDetails {
  value: string;
  label: string;
  imgUrl: string;
}
