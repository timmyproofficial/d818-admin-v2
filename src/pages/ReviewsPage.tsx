import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import { reviewColumns } from '@/components/customs/reviews/ReviewColumns';
import useReviews from '@/hooks/useReviews';

const ReviewsPage = () => {
  const { data, isLoading, error } = useReviews();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading title="Reviews" />
      <div className="mx-auto">
        <DataTable columns={reviewColumns} data={data} />
      </div>
    </>
  );
};

export default ReviewsPage;
