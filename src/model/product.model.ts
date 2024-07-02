export interface Product {
    [x: string]: any;
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity:any;
    rating: {
      rate: number;
      count: number;
    };
  }

 export interface CartData {
    userId: number;
    date: string;
    products: { productId: number; quantity: number }[];
  }