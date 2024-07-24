import Heading from '@/components/customs/Heading';
import MealDetailCard from '@/components/customs/meals/MealDetailCard';
import MealImgCard from '@/components/customs/meals/MealImgCard';
import { Card } from '@/components/ui/card';
import useMeal from '@/hooks/useMeal';
import { useParams } from 'react-router-dom';

const MealDetailPage = () => {
  const { id } = useParams();
  const { data: meal } = useMeal(id!);
  console.log(id);
  console.log(meal);
  return (
    <div>
      <Heading title="Meal Detail" />

      <Card className="flex gap-3">
        <MealImgCard img={meal?.image!} alt={meal?.name!} />
        <MealDetailCard
          name={meal?.name!}
          description={meal?.description!}
          category={meal?.category!}
          price={meal?.price!}
          createdAt={meal?.dateCreated!}
        />
      </Card>
    </div>
  );
};

export default MealDetailPage;
