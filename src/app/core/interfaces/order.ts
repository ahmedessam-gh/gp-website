export interface order {
  count: number;
  productsWithAvgRates: orderData[];
}

export interface orderData {
  orderId: number;
  totalPrice: number;
  status: string;
  dateTime: string;
  paymentMethod: string;
  quantity: number;
  productDetails: {
    img: string;
    productPrice: number;
    quantity: number;
    productName: string;
  }[];
}
