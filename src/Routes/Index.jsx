import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import BookDetails from '../pages/BookDetails/BookDetails';
import About from '../pages/About/About';
import ReadList from '../pages/ReadList/ReadList';

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
        {
          path: "/about",
          Component: About,
        },
        {
          path: "/readlist",
          loader: () => fetch("booksData.json"),
          Component: ReadList,
        },
        {
          path: "/bookDetails/:id",
          Component: BookDetails,
        },
    ]
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;