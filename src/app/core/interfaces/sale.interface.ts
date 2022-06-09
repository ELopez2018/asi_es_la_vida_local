import { Items } from './items.interface';
import { User } from './user.interface';

export interface Sale {
  client: User;
  items: Items[];
  date: Date;
  address: string;
  Pay: number[];
  status: "Pagada"| "Adeudada" | "En Mora" | "Perdonada";
}
