import { useQuery } from '@tanstack/react-query';
import { Customer } from '@/entities/customer';
import APIClient from '@/services/apiClient';

const apiClient = new APIClient<Customer>('/customers');

const useCustomers = () => {
  return useQuery<Customer[], Error>({
    queryKey: ['customers'],
    queryFn: apiClient.getAll,
  });
};

export default useCustomers;
