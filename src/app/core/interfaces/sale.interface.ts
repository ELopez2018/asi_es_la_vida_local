import { Items } from './items.interface';
import { User } from './user.interface';

export interface Sale {
  client?: User;
  items: Items[];
  date?: Date;
  address?: number;
  pay?: number[];
  status?: "Pagada"| "En Deuda" | "En Mora" | "Perdonada" | "Pendiente";
}
