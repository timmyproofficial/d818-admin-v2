import { customerColumns } from '@/components/customs/customers/CustomerColumns';
import { DataTable } from '@/components/ui/data-table';
import useCustomers from '@/hooks/useCustomers';

const CustomersPage = () => {
  const { data } = useCustomers();
  return (
    <div className="mx-auto">
      <DataTable columns={customerColumns} data={data} />
    </div>
  );
};

export default CustomersPage;
