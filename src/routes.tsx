import { createBrowserRouter } from 'react-router-dom';
import {
  Layout,
  DashboardPage,
  AdminPage,
  CustomersPage,
  MealsPage,
  ReviewsPage,
  MenuPage,
  CategoriesPage,
  CampusesPage,
  FeedbackPage,
  OrdersPage,
  OutOfBoundPage,
  PaymentPage,
  LoginPage,
} from './pages';
import MealDetailPage from './pages/MealDetailPage';
import PrivateRoutes from './pages/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ path: 'login', element: <LoginPage /> }],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'payments', element: <PaymentPage /> },
      { path: 'admins', element: <AdminPage /> },
      { path: 'customers', element: <CustomersPage /> },
      { path: 'meals', element: <MealsPage /> },
      { path: 'meals/:id', element: <MealDetailPage /> },
      { path: 'reviews', element: <ReviewsPage /> },
      { path: 'menu', element: <MenuPage /> },
      { path: 'categories', element: <CategoriesPage /> },
      { path: 'campuses', element: <CampusesPage /> },
      { path: 'feedback', element: <FeedbackPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'out-of-bound', element: <OutOfBoundPage /> },
    ],
  },
]);

export default router;
