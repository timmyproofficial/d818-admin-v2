import BackArrowBtn from '@/components/customs/BackArrowBtn';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';
import { feedbackColumns } from '@/components/customs/feedbacks/FeedbackColumns';
import { DataTable } from '@/components/ui/data-table';
import useFeedbacks from '@/hooks/useFeedbacks';

const FeedbackPage = () => {
  const { data, isLoading, error } = useFeedbacks();

  // if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <HeadingContainer>
        <BackArrowBtn />
        <Heading title="Feedback" description="Managing Feedbacks" />
      </HeadingContainer>

      <div className="mx-auto">
        <DataTable
          columns={feedbackColumns}
          isLoading={isLoading}
          data={data || []}
          filter={{ id: 'email', name: 'Email' }}
        />
      </div>
    </>
  );
};

export default FeedbackPage;
