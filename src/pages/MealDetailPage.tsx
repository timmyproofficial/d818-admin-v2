import Heading from '@/components/customs/Heading';
import useMeal from '@/hooks/useMeal';
import { useParams } from 'react-router-dom';

const MealDetailPage = () => {
  const { id } = useParams();
  const { data } = useMeal(id!);
  console.log(data);
  return (
    <div>
      <Heading title="Meal Detail" />
      MealDetailPage {id}
    </div>
  );
};

export default MealDetailPage;
