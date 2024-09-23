import { customerColumns } from '@/components/customs/customers/CustomerColumns';
import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import useCustomers from '@/hooks/useCustomers';

const CustomersPage = () => {
  const { data, isLoading, error } = useCustomers();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading title="Customers" />
      <div className="mx-auto">
        <DataTable
          columns={customerColumns}
          data={data}
          filter={{ id: 'email', name: 'Email' }}
        />
      </div>
    </>
  );
};

export default CustomersPage;
