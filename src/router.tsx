import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/home';
import ChartPage from './pages/chart/chart';
import Layout from './components/layout/layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/chart',
        element: <ChartPage />
      },
    ]
  }
]);

export default router;