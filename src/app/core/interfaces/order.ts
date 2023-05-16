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
}
