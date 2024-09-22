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
import userAuthStore from '@/store';
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

  // console.log(error);
  // const authUser = useAuthUser();
  const { user: authUser } = userAuthStore();
  return (
    <>
      {!authUser && (
        <Card className="w-[50%] mx-auto mt-10">
          <form onSubmit={handleSubmit}>
            <CardHeader className="text-center">
              <CardTitle>
                <h1 className="text-[#46af6b]">Welcome Back!</h1>
              </CardTitle>
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
                    type="password"
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
              <Button
                className="bg-[#fe6225] hover:bg-[#eb5317] hover:text-white text-white uppercase w-full"
                disabled={isLoading}
                type="submit"
                variant="outline"
              >
                <p className="text-[1rem] font-normal">
                  {isLoading ? 'Logging in...' : 'Login'}
                </p>
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
