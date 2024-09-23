import Campus from './campus';
import { OrderItem } from './orderItem';

export interface Order {
  _id: string;
  customer: {
    id: string;
    fullName: string;
  };
  orderId: string;
  orderItems: OrderItem[];
  campus: Campus;
  addr1: string;
  addr2: string;
  phone: string;
  deliveryRate: number;
  deliveryTime: number;
  deliveryStatus: string;
  paymentStatus: string;
  subTotal: number;
  totalPrice: number;
  dateOrdered: string;
}
