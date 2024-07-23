import { adminColumns } from '@/components/customs/admins/AdminColumns';
import { DataTable } from '@/components/ui/data-table';
import useAdmins from '@/hooks/useAdmins';

const AdminPage = () => {
  const { data } = useAdmins();
  return (
    <div className="mx-auto">
      <DataTable columns={adminColumns} data={data} />
    </div>
  );
};

export default AdminPage;
