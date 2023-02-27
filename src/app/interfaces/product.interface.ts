
export interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  employee: string;
  description: string;
  reviews?: string[];
}
export interface ProductApi {
  id: string;
  data: Omit<Product, 'id'>;
}
