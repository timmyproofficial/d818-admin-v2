import { useQueryClient, useMutation } from '@tanstack/react-query';
import APIClient from '@/services/apiClient';
import { AuthCredential, AuthUser } from '@/entities/auth';
import userAuthStore from '@/store';

const apiClient = new APIClient<AuthUser>('/admins/login');

const useAuth = () => {
  const { login } = userAuthStore();

  const queryClient = useQueryClient();

  return useMutation<AuthUser, Error, AuthCredential>({
    mutationFn: (authCredential: AuthCredential) =>
      apiClient.post(authCredential),

    onSuccess: (data) => {
      // Store user data in the query cache
      queryClient.setQueryData(['authUser'], data);

      localStorage.setItem('authUser', JSON.stringify(data));
      login(JSON.stringify(localStorage.getItem('authUser')));
    },
  });
};

export default useAuth;
