import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import { outOfBoundColumns } from '@/components/customs/outOfBounds/OutOfBoundColumns';
import useOutOfBounds from '@/hooks/useOutOfBounds';

const OutOfBoundPage = () => {
  const { data, isLoading, error } = useOutOfBounds();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading title="Out of Bound Orders" />

      <div className="mx-auto">
        <DataTable
          columns={outOfBoundColumns}
          data={data}
          filter={{ id: 'orderId', name: 'Order ID' }}
        />
      </div>
    </>
  );
};

export default OutOfBoundPage;
