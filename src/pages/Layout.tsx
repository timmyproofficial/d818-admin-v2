import Navbar from '@/components/customs/Navbar';
import Sidebar from '@/components/customs/Sidebar';
import useAuthUser from '@/hooks/useAuthUser';
import userAuthStore from '@/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import DashboardPage from './DashboardPage';
const Layout = () => {
  // const authUser = useAuthUser();
  const { user: authUser } = userAuthStore();
  const location = useLocation();

  return (
    <>
      {/* <div className="grid grid-cols-[300px_1fr] grid-rows-[70px_1fr] min-h-screen"> */}
      <ToastContainer />
      <div
        className={`grid ${
          authUser
            ? 'grid-cols-[300px_1fr] grid-rows-[70px_1fr]'
            : 'grid-cols-[1fr] grid-rows-[70px_1fr]'
        } min-h-screen`}
      >
        <header className="px-5 col-start-1 col-end-3 border-b-2 border-gray-100">
          <Navbar />
        </header>
        {authUser && (
          <aside className="border-r-2 border-gray-100 p-5">
            <Sidebar />
          </aside>
        )}
        <main className="p-5">
          {location.pathname === '/login' && authUser ? (
            // <DashboardPage />
            <Navigate to="/" />
          ) : (
            <Outlet />
          )}
          {/* <Outlet /> */}
        </main>
      </div>
    </>
  );
};

export default Layout;
