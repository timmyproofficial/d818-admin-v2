import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/apiClient';
import { Feedback } from '@/entities/feedback';

const apiClient = new APIClient<Feedback>('/feedback');

const useFeedbacks = () => {
  return useQuery<Feedback[], Error>({
    queryKey: ['feedback'],
    queryFn: apiClient.getAll,
  });
};

export default useFeedbacks;
