import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePaths';
import ShopHeader from '../shopHeader/ShopHeader';

import './Header.css';

export const Header = () => {
  return (
    <>
      <ul className="menu">
        <li>
          <Link to={RoutePaths.HOME} className="btn btn-info">
            Home
          </Link>
        </li>
        <li>
          <Link to={RoutePaths.CART} className="btn btn-info">Cart</Link>
        </li>
      </ul>
      <ShopHeader />
    </>
  );
};
