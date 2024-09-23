import { useQuery } from '@tanstack/react-query';
import { OutOfBound } from '@/entities/outOfBound';
import APIClient from '@/services/apiClient';

const apiClient = new APIClient<OutOfBound>('/out-of-bound');

const useOutOfBound = () =>
  useQuery<OutOfBound[], Error>({
    queryKey: ['outOfBounds'],
    queryFn: apiClient.getAll,
  });

export default useOutOfBound;
