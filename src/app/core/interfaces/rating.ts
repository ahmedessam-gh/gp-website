export interface rating {
  average: number;
  customerRates: {
    rate: number;
    rateComment: string;
    customerName: string;
  }[];

  count: number;
}
