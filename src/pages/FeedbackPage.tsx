import Heading from '@/components/customs/Heading';
import { feedbackColumns } from '@/components/customs/feedbacks/FeedbackColumns';
import { DataTable } from '@/components/ui/data-table';
import useFeedbacks from '@/hooks/useFeedbacks';

const FeedbackPage = () => {
  const { data, isLoading, error } = useFeedbacks();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Heading title="Feedback" />

      <div className="mx-auto">
        <DataTable columns={feedbackColumns} data={data} />
      </div>
    </>
  );
};

export default FeedbackPage;
