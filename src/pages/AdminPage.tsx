import { adminColumns } from '@/components/customs/admins/AdminColumns';
import { DataTable } from '@/components/ui/data-table';
import { Admin } from '@/entities/admin';
import useAdmins from '@/hooks/useAdmins';
import useData from '@/hooks/useData';

const AdminPage = () => {
  const { data } = useAdmins();
  console.log(data);
  return (
    <div className="mx-auto">
      <DataTable columns={adminColumns} data={data} />
    </div>
  );
};

export default AdminPage;
