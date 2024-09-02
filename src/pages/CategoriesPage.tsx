import { DataTable } from '@/components/ui/data-table';
import { categoryColumns } from '@/components/customs/categories/CategoryColumns';
import Heading from '@/components/customs/Heading';
import useCategories from '@/hooks/useCategories';

const CategoriesPage = () => {
  const { data, isLoading, error } = useCategories();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading title="Categories" />
      <div className="mx-auto">
        <DataTable columns={categoryColumns} data={data} />
      </div>
    </>
  );
};

export default CategoriesPage;
