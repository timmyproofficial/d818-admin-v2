import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import { outOfBoundColumns } from '@/components/customs/outOfBounds/OutOfBoundColumns';
import useOutOfBounds from '@/hooks/useOutOfBounds';
import HeadingContainer from '@/components/customs/HeadingContainer';
import BackArrowBtn from '@/components/customs/BackArrowBtn';

const OutOfBoundPage = () => {
  const { data, isLoading, error } = useOutOfBounds();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading
          title="Out of Bound Orders"
          description="Managing Out-of-bound orders"
        />
      </HeadingContainer>

      <div className="mx-auto">
        <DataTable
          columns={outOfBoundColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'orderId', name: 'Order ID' }}
        />
      </div>
    </>
  );
};

export default OutOfBoundPage;
