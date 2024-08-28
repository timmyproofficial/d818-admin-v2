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
import { AuthCredential } from '@/entities/auth';
import useAuth from '@/hooks/useAuth';
import useAuthUser from '@/hooks/useAuthUser';
import { FormEvent, useState } from 'react';

const LoginPage = () => {
  const [authCredentials, setAuthCredentials] = useState<AuthCredential>({
    email: '',
    password: '',
  });

  const { mutate, data, isLoading, error } = useAuth();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    mutate(authCredentials);
  };

  console.log(error);
  const authUser = useAuthUser();
  return (
    <>
      {!authUser && (
        <Card className="w-[50%] mx-auto mt-10">
          <form onSubmit={handleSubmit}>
            <CardHeader className="text-center">
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>Log in to your Account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={authCredentials?.email}
                    onChange={(event) =>
                      setAuthCredentials({
                        ...authCredentials,
                        email: event.target.value,
                      })
                    }
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    value={authCredentials?.password}
                    onChange={(event) =>
                      setAuthCredentials({
                        ...authCredentials,
                        password: event.target.value,
                      })
                    }
                    placeholder="Enter password..."
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button disabled={isLoading} type="submit" variant="outline">
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
              {/* <Button>Deploy</Button> */}
            </CardFooter>
          </form>
        </Card>
      )}
    </>
  );
};

export default LoginPage;
