import BackArrowBtn from '@/components/customs/BackArrowBtn';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import MenuCard from '@/components/customs/menu/MenuCard';
import useMeals from '@/hooks/useMeals';

const MenuPage = () => {
  const { data: meals, isLoading, error } = useMeals();
  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Menu" description="Menu List" />
      </HeadingContainer>
      <div className="mx-auto">
        <div className="grid md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] gap-6">
          {meals?.map((meal) => (
            <MenuCard
              key={meal._id}
              id={meal._id}
              img={meal.image}
              name={meal.name}
              description={meal.description}
              price={meal.price}
              category={meal.category?.name}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuPage;
