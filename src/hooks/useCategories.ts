import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/apiClient';
import { Category } from '@/entities/category';

const apiClient = new APIClient<Category>('/categories');

const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ['categories'],
    queryFn: apiClient.getAll,
  });
};

export default useCategories;
