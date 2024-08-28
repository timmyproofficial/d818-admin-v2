import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';
import useAuthUser from '@/hooks/useAuthUser';

const PrivateRoutes = () => {
  const authUser = useAuthUser();
  if (!authUser) return <Navigate to="/login" />;
  return <Layout />;
};

export default PrivateRoutes;
