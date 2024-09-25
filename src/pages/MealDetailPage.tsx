import BackArrowBtn from '@/components/customs/BackArrowBtn';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import MealDetailCard from '@/components/customs/meals/MealDetailCard';
import MealImgCard from '@/components/customs/meals/MealImgCard';
import { Card } from '@/components/ui/card';
import useMeal from '@/hooks/useMeal';
import { useParams } from 'react-router-dom';

const MealDetailPage = () => {
  const { id } = useParams();
  const { data: meal } = useMeal(id!);
  return (
    <div>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Meal Detail" />
      </HeadingContainer>

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
