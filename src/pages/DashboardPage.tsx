import Overview1 from '@/components/customs/dashboard/Overview1';
import Overview2 from '@/components/customs/dashboard/Overview2';
import Heading from '@/components/customs/Heading';
import HeadingContainer from '@/components/customs/HeadingContainer';

const DashboardPage = () => {
  return (
    <div>
      <HeadingContainer>
        <Heading title="Dashboard" description="Welcome to your Dashboard" />
      </HeadingContainer>

      <div className="grid gap-4">
        <Overview1 />
        <Overview2 />
      </div>
    </div>
  );
};

export default DashboardPage;
