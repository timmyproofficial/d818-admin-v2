import { DataTable } from '@/components/ui/data-table';
import { campusColumns } from '@/components/customs/campuses/CampusColumns';
import useCampuses from '@/hooks/useCampuses';
import Heading from '@/components/customs/Heading';

const CampusesPage = () => {
  const { data, isLoading, error } = useCampuses();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading title="Campuses" />
      <div className="mx-auto">
        <DataTable
          columns={campusColumns}
          data={data}
          filter={{ id: 'name', name: 'Name' }}
        />
      </div>
    </>
  );
};

export default CampusesPage;
