export interface Product {
    id: number;
    name: string;
    ref: string | number;
    price: number;
    image: string;
    category_id?: number;
    vendor_id?: number;
}
