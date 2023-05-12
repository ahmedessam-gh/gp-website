export interface product {
  productId: number;
  productName: string;
  productImages: {
    imageID: number;
    imageUrl: string;
  }[];
  price: number;
  sale: number;
  rentable: boolean;
  type: string;
  questions: {
    question: string;
    answer: string;
  }[];
  quantity: number;
  description: string;
}
