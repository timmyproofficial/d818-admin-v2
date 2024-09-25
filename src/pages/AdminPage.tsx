import { adminColumns } from '@/components/customs/admins/AdminColumns';
import BackArrowBtn from '@/components/customs/BackArrowBtn';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import { DataTable } from '@/components/ui/data-table';
import useAdmins from '@/hooks/useAdmins';

const AdminPage = () => {
  const { data, isLoading, error } = useAdmins();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Admin" description="Managing Admins" />
      </HeadingContainer>
      <div className="mx-auto">
        <DataTable
          columns={adminColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'firstName', name: 'First Name' }}
        />
      </div>
    </>
  );
};

export default AdminPage;
