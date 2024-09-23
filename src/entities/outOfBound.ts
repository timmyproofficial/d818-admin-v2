import { OrderItem } from './orderItem';

export interface OutOfBound {
  _id: string;
  orderId: string;
  orderItems: OrderItem;
  customer: {
    id: string;
    fullName: string;
  };
  phone: string;
  addr1: string;
  deliveryStatus: string;
  totalPrice: number;
  dateOrdered: string;
}
