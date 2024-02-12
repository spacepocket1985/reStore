import { Link } from 'react-router-dom';
import { RoutePaths } from '../../routes/routePaths';

import './Header.css';

export const Header = () => {
  return (
    <ul className="menu">
      <li>
        <Link to={RoutePaths.HOME}>Home</Link>
      </li>
      <li>
        <Link to={RoutePaths.CART}>Cart</Link>
      </li>
    </ul>
  );
};
