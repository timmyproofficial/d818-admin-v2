import BackArrowBtn from '@/components/customs/BackArrowBtn';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import { orderColumns } from '@/components/customs/orders/OrderColumns';
import { DataTable } from '@/components/ui/data-table';
import useOrders from '@/hooks/useOrders';

const OrdersPage = () => {
  const { data, isLoading, error } = useOrders();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Orders" description="Managing Orders" />
      </HeadingContainer>

      <div className="mx-auto">
        <DataTable
          columns={orderColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'customer', name: 'Full Name' }}
        />
      </div>
    </>
  );
};

export default OrdersPage;
