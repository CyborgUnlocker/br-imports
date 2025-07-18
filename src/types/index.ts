export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  stock: number;
  created_at: string;
}

export interface CartItem extends Product {
  qty: number;
}
