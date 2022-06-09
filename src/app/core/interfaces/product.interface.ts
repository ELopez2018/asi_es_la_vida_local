
export interface Product {
  id: number;
  vendor_id: number;
  name: string;
  sku: string;
  image: string;
  color: string;
  type_packaging: string;
  type_presentation: string;
  link?: string;
  short_description?: string;
  description?: string;
  regular_price: number;
  sale_price?: number;
  taxes: number;
  stock: number;
  stock_min: number;
  stock_status: number;
  discount: number;
  status: number;
  created_at: string;
  updated_at: string;
  carousel?: string;
  height?: number;
  width?: number;
  depth?: number;
  weight?: number;
  type_of_sale: number;
  death_weight?: number;
  death_vol?: number;
  vendor_name: string;
}
