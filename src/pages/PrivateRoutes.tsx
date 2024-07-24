import { Navigate, Outlet } from 'react-router-dom';

const user = null;
const PrivateRoutes = () => {
  if (!user) return <Navigate to="/login" />;
  return <Outlet />;
};

export default PrivateRoutes;
