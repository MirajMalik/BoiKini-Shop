import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            loader: () => fetch("booksData.json") ,                    // when / route hits loader loads the data in Home component
            path: "/",
            Component: Home,
        },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;