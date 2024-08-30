import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';
import useAuthUser from '@/hooks/useAuthUser';
import userAuthStore from '@/store';

const PrivateRoutes = () => {
  // const authUser = useAuthUser();
  const { user: authUser } = userAuthStore();
  if (!authUser) return <Navigate to="/login" />;
  return <Layout />;
};

export default PrivateRoutes;
