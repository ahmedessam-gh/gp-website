export interface orderDetails {
  address: string;
  detailsList: productDetails[];
  email: string;
  fname: string;
  lname: string;
  phone: string;
}

interface productDetails {
  quantity: number;
  isRent: boolean;
  price: number;
  productName: string;
}