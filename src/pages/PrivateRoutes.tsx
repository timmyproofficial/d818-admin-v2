import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

const user = 'ss';
const PrivateRoutes = () => {
  if (!user) return <Navigate to="/login" />;
  return <Layout />;
};

export default PrivateRoutes;
