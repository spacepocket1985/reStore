import { connect } from 'react-redux';
import { AppRootState } from '../../store/store';
import { CartItemType } from '../../types/types';
import './ShopHeader.css';

type MapStateToPropsType = {
  cartItems: Array<CartItemType>;
  total: number;
};

const ShopHeader = (props: MapStateToPropsType) => {
  const { cartItems, total } = props;

  const booksCount = cartItems.reduce((acc, book) => acc + book.count, 0);
  const bookLabel = booksCount === 1 ? 'book' : 'books'

  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="#">
        ReStore
      </a>
      <a className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {booksCount} {bookLabel} (${total})
      </a>
    </header>
  );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    cartItems: state.shoppingCart.cartItems,
    total: state.shoppingCart.total,
  };
};

export default connect(mapStateToProps)(ShopHeader);
