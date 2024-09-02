import { Customer } from './customer';
import { Meal } from './meal';

export interface Review {
  _id: string;
  comment: string;
  customer: Customer;
  product: Meal;
  rating: number;
  dateCreated: string;
  isPublished: boolean;
}
