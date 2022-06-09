
import { Product } from './product.interface';
import { ResponseLaravel } from './response-laravel.interface';

export interface ResponseProducts extends ResponseLaravel {
  data: Product[];
}
