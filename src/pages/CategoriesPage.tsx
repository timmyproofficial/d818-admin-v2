import { DataTable } from '@/components/ui/data-table';
import { categoryColumns } from '@/components/customs/categories/CategoryColumns';
import Heading from '@/components/customs/Heading';
import useCategories from '@/hooks/useCategories';
import HeadingContainer from '@/components/customs/HeadingContainer';
import BackArrowBtn from '@/components/customs/BackArrowBtn';

const CategoriesPage = () => {
  const { data, isLoading, error } = useCategories();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading
          title="Categories"
          description="Managinig meal\'s categories"
        />
      </HeadingContainer>
      <div className="mx-auto">
        <DataTable
          columns={categoryColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'name', name: 'Category' }}
        />
      </div>
    </>
  );
};

export default CategoriesPage;
