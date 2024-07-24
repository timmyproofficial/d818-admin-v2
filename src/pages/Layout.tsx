import Navbar from '@/components/customs/Navbar';
import Sidebar from '@/components/customs/Sidebar';
import { Outlet } from 'react-router-dom';
const user = 's';
const Layout = () => {
  return (
    // <div className="grid grid-cols-[300px_1fr] grid-rows-[70px_1fr] min-h-screen">
    <div
      className={`grid ${
        user
          ? 'grid-cols-[300px_1fr] grid-rows-[70px_1fr]'
          : 'grid-cols-[1fr] grid-rows-[70px_1fr]'
      } min-h-screen`}
    >
      <header className="px-5 col-start-1 col-end-3 border-b-2 border-gray-100">
        <Navbar />
      </header>
      {user && (
        <aside className="border-r-2 border-gray-100 p-5">
          <Sidebar />
        </aside>
      )}
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
