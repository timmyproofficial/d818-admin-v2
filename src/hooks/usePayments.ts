import { useEffect, useState } from 'react';
import getPaymentData from '@/data/payments';

export type Payment = {
  id: string;
  amount: number;
  status: 'pending' | 'processing' | 'success' | 'failed';
  email: string;
};

const usePayments = () => {
  const [data, setData] = useState<Payment[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getPaymentData();
        setData(result);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default usePayments;
