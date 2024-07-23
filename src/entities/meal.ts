import { Category } from './category';

export interface Meal {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: Category;
  isVisible?: boolean;
  dateCreated: string;
  __v: number;
}
