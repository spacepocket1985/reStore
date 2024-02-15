
import BookPage from '../pages/bookPage/BookPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';
import { Page404 } from '../pages/Page404';
import { RoutePaths } from './routePaths';

export const publicRoutes = [
  {
    path: RoutePaths.HOME,
    Page: HomePage,
  },
  {
    path: RoutePaths.CART,
    Page: CartPage,
  },
  {
    path: RoutePaths.BOOK,
    Page: BookPage,
  },
  {
    path: RoutePaths.PAGE404,
    Page: Page404,
  },
];
