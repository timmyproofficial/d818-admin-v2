import useMeal from '@/hooks/useMeal';
import { useParams } from 'react-router-dom';

const MealDetailPage = () => {
  const { id } = useParams();
  const { data } = useMeal(id!);
  console.log(data);
  return <div>MealDetailPage {id}</div>;
};

export default MealDetailPage;
