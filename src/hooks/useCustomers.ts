import getCustomersData from '@/data/customers';
import { useQuery } from '@tanstack/react-query';
import { Customer } from '@/entities/customer';
import { useEffect, useState } from 'react';
import APIClient from '@/services/apiClient';

const apiClient = new APIClient<Customer>('/customers');

const useCustomers = () => {
  return useQuery<Customer[], Error>({
    queryKey: ['customers'],
    queryFn: apiClient.getAll,
  });
};

export default useCustomers;
