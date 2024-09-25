import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Statistics } from './Statistics';
import RecentOrder from './RecentOrder';
import useMeals from '@/hooks/useMeals';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Overview2 = () => {
  const { data: meals } = useMeals();
  const mealLen = meals?.length;
  return (
    <div className="grid gap-4 lg:grid-cols-7">
      <Card className="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Statistics />
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader className="flex flex-row justify-between items-start">
          <div>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>
              You have <span className="font-semibold">{mealLen}</span>{' '}
              different meals in total
            </CardDescription>
          </div>
          <div>
            <Link to="/menu">
              <Button className="bg-orange-500 hover:bg-green-700 rounded-full">
                View all
              </Button>
            </Link>
          </div>
        </CardHeader>
        <CardContent>
          <RecentOrder meals={meals!} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Overview2;
