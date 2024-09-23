import { Meal } from './meal';

export interface OrderItem {
  _id: string;
  quantity: number;
  product: Meal;
}
