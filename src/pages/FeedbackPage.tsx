import Heading from '@/components/customs/Heading';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const FeedbackPage = () => {
  return (
    <div>
      <Heading title="Feedback" />

      <Card className="w-[50%] mx-auto mt-10">
        <CardHeader className="text-center">
          <CardTitle>Welcome Back!</CardTitle>
          <CardDescription>Log in to your Account</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="title">Title</Label>
                <Input id="title" placeholder="Enter your title..." />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="body">Description</Label>
                <Input id="body" placeholder="Enter body..." />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Submit</Button>
          {/* <Button>Deploy</Button> */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default FeedbackPage;
