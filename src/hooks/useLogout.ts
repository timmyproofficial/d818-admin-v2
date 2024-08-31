import { useQueryClient, useMutation } from '@tanstack/react-query';
import {toast} from 'react-toastify'
import APIClient from '@/services/apiClient';
import { AuthUser } from '@/entities/auth';
import userAuthStore from '@/store';

const apiClient = new APIClient<AuthUser>('/admins/logout');

const useLogout = () => {
  const { logout } = userAuthStore();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => apiClient.post(),

    onSuccess: (data) => {
      // Store user data in the query cache
      queryClient.setQueryData(['logout'], data);

      localStorage.removeItem('authUser');
      logout();
      toast.success('Admin logged out successfully')
    },
  });
};

export default useLogout;
