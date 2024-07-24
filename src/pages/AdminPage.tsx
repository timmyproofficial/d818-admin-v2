import { adminColumns } from '@/components/customs/admins/AdminColumns';
import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import useAdmins from '@/hooks/useAdmins';

const AdminPage = () => {
  const { data } = useAdmins();
  return (
    <>
      <Heading title="Admin" />
      <div className="mx-auto">
        <DataTable columns={adminColumns} data={data} />
      </div>
    </>
  );
};

export default AdminPage;
