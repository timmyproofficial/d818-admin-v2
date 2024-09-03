import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/apiClient';
import Campus from '@/entities/campus';

const apiClient = new APIClient<Campus>('/campuses/get-campuses');

const useCampuses = () =>
  useQuery<Campus[], Error>({
    queryKey: ['campuses'],
    queryFn: apiClient.getAll,
  });

export default useCampuses;
