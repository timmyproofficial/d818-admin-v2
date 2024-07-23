import { mealColumns } from '@/components/customs/meals/MealColumns';
import { DataTable } from '@/components/ui/data-table';
import useMeals from '@/hooks/useMeals';

const MealsPage = () => {
  const { data, error, isLoading } = useMeals();

  if (error) return <div>{error.message}</div>;

  return (
    <div className="mx-auto">
      <DataTable columns={mealColumns} data={data || []} />
    </div>
  );
};

export default MealsPage;
