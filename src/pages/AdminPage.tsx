import { adminColumns } from '@/components/customs/admins/AdminColumns';
import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import useAdmins from '@/hooks/useAdmins';

const AdminPage = () => {
  const { data, isLoading, error } = useAdmins();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <Heading title="Admin" />
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
