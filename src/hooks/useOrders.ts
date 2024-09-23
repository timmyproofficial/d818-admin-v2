import { useQuery } from '@tanstack/react-query';
import { Order } from '@/entities/order';
import APIClient from '@/services/apiClient';

const apiClient = new APIClient<Order>('/orders');

const useOrders = () => {
  return useQuery<Order[], Error>({
    queryKey: ['orders'],
    queryFn: apiClient.getAll,
  });
};

export default useOrders;
