import getCustomersData from '@/data/customers';
import { Customer } from '@/entities/customer';
import { useEffect, useState } from 'react';

const useCustomers = () => {
  const [data, setData] = useState<Customer[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCustomersData();
        setData(result);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useCustomers;
