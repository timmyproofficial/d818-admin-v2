import Heading from '@/components/customs/Heading';
import { mealColumns } from '@/components/customs/meals/MealColumns';
import { DataTable } from '@/components/ui/data-table';
import useMeals from '@/hooks/useMeals';

const MealsPage = () => {
  const { data, error, isLoading } = useMeals();

  // if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Heading title="Meals" />
      <div className="mx-auto">
        <DataTable
          columns={mealColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'name', name: 'Name' }}
        />
      </div>
    </>
  );
};

export default MealsPage;
