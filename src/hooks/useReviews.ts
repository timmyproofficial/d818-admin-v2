import { useQuery } from '@tanstack/react-query';
import APIClient from '@/services/apiClient';
import { Review } from '@/entities/review';

const apiClient = new APIClient<Review>('/reviews');

const useReviews = () => {
  return useQuery<Review[], Error>({
    queryKey: ['reviews'],
    queryFn: apiClient.getAll,
  });
};

export default useReviews;
