import Heading from '@/components/customs/Heading';
import { DataTable } from '@/components/ui/data-table';
import { reviewColumns } from '@/components/customs/reviews/ReviewColumns';
import useReviews from '@/hooks/useReviews';
import HeadingContainer from '@/components/customs/HeadingContainer';
import BackArrowBtn from '@/components/customs/BackArrowBtn';

const ReviewsPage = () => {
  const { data, isLoading, error } = useReviews();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Reviews" description="Managing Meal's Reviews" />
      </HeadingContainer>
      <div className="mx-auto">
        <DataTable
          columns={reviewColumns}
          data={data || []}
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default ReviewsPage;
