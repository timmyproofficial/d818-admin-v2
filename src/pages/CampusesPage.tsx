import { DataTable } from '@/components/ui/data-table';
import { campusColumns } from '@/components/customs/campuses/CampusColumns';
import useCampuses from '@/hooks/useCampuses';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import BackArrowBtn from '@/components/customs/BackArrowBtn';

const CampusesPage = () => {
  const { data, isLoading, error } = useCampuses();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Campuses" description="Managing Campuses" />
      </HeadingContainer>
      <div className="mx-auto">
        <DataTable
          columns={campusColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'name', name: 'Name' }}
        />
      </div>
    </>
  );
};

export default CampusesPage;
