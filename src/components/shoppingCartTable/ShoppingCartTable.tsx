import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootState } from '../../store/store';
import { CartItemType } from '../types/types';
import './ShoppingCartTable.css';

type MapStateToPropsType = {
  cartItems: Array<CartItemType>;
  total: number;
};

type MapStateToDispatchType = {
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onDelete: (id: string) => void;
};

type ShoppingCartTablePropsType = MapStateToPropsType & MapStateToDispatchType;

const ShoppingCartTable = (props: ShoppingCartTablePropsType) => {
  const { cartItems, total, onIncrease, onDecrease, onDelete } = props;

  const renderCartItemRow = (cartItems: Array<CartItemType>) => {
    return cartItems.map((cartItem, index) => {
      const { id, name, count, totalPrice } = cartItem;
      return (
        <tr key={id}>
          <td >{index + 1}</td>
          <td>{name}</td>
          <td>{count}</td>
          <td>${totalPrice}</td>
          <td>
            <button
              onClick={() => {
                onDelete(id);
              }}
              className="btn btn-outline-danger btn-sm float-right"
            >
              <i className="fa fa-trash-o" />
            </button>
            <button
              onClick={() => {
                onIncrease(id);
              }}
              className="btn btn-outline-success btn-sm float-right"
            >
              <i className="fa fa-plus-circle" />
            </button>
            <button
              onClick={() => {
                onDecrease(id);
              }}
              className="btn btn-outline-warning btn-sm float-right"
            >
              <i className="fa fa-minus-circle" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartItems ? (
            renderCartItemRow(cartItems)
          ) : (
            <tr>You dont add any book to cart!</tr>
          )}
        </tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = (state: AppRootState): MapStateToPropsType => {
  return {
    cartItems: state.booksList.cartItems,
    total: state.booksList.total,
  };
};

const MapStateToDispatch = () => {
  return {
    onIncrease: (id: string) => {
      console.log('INC ', id);
    },
    onDecrease: (id: string) => {
      console.log('DEC ', id);
    },
    onDelete: (id: string) => {
      console.log('DEL ', id);
    },
  };
};

export default connect(mapStateToProps, MapStateToDispatch)(ShoppingCartTable);
