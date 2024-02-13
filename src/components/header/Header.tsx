import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePaths';
import ShopHeader from '../shopHeader/shopHeader';

import './Header.css';

export const Header = () => {
  return (
    <>
    <ul className="menu">
      <li>
        <Link to={RoutePaths.HOME}>Home</Link>
      </li>
      <li>
        <Link to={RoutePaths.CART}>Cart</Link>
      </li>
    </ul>
    <ShopHeader numItems={5} total={550}/>
    </>

  );
};
