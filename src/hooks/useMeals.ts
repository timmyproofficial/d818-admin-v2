import { useQuery } from '@tanstack/react-query';
import { Meal } from '@/entities/meal';
import APIClient from '@/services/apiClient';

const apiClient = new APIClient<Meal>('/products/all');

const useMeals = () => {
  return useQuery<Meal[], Error>({
    queryKey: ['meals'],
    queryFn: apiClient.getAll,
  });
};

export default useMeals;
