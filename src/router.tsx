import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/home';
import ChartPage from './pages/chart/chart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/chart',
    element: <ChartPage />
  },
]);

export default router;