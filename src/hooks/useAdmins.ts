import getAdminData from '@/data/admins';
import { Admin } from '@/entities/admin';
import { useEffect, useState } from 'react';

const useAdmins = () => {
  const [data, setData] = useState<Admin[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAdminData();
        setData(result);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useAdmins;
