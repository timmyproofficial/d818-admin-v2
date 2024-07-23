import getMealsData from '@/data/meals';
import { Meal } from '@/entities/meal';
import { useEffect, useState } from 'react';

const useMeals = () => {
  const [data, setData] = useState<Meal[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getMealsData();
        setData(result);
      } catch (err: any) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default useMeals;
