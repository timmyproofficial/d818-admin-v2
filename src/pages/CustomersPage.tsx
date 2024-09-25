import BackArrowBtn from '@/components/customs/BackArrowBtn';
import { customerColumns } from '@/components/customs/customers/CustomerColumns';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import { DataTable } from '@/components/ui/data-table';
import useCustomers from '@/hooks/useCustomers';

const CustomersPage = () => {
  const { data, isLoading, error } = useCustomers();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Customers" description="Managing Customers" />
      </HeadingContainer>
      <div className="mx-auto">
        <DataTable
          columns={customerColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'email', name: 'Email' }}
        />
      </div>
    </>
  );
};

export default CustomersPage;
