import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/apiClient';
import { Meal } from '@/entities/meal';

const apiClient = new APIClient<Meal>('/products');

const useMeal = (id: string) => {
  return useQuery<Meal, Error>({
    queryKey: ['meal', id],
    queryFn: () => apiClient.get(id),
  });
};

export default useMeal;
