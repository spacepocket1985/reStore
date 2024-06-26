import { v1 } from 'uuid';
import { CartItemType } from '../../types/types';
import { findBookIndexInCart } from '../../utils/findBookInCart';
import { ActionsShopingCartType } from '../actions/actions';

export type ShoppingCartStateType = {
  cartItems: Array<CartItemType>;
  total: number;
};


const initialState: ShoppingCartStateType = {
  cartItems: [],
  total: 0,
};

export const shoppingCartReducer = (
  state = initialState,
  action: ActionsShopingCartType
) => {

  switch (action.type) {
    case 'ADD_BOOK_TO_CART':
      const isBookinCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      const newCartItems = !isBookinCart
        ? [
            {
              id: action.payload.id,
              title: action.payload.title,
              count: 1,
              totalPrice: action.payload.price,
            },
            ...state.cartItems,
          ]
        : state.cartItems.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  count: item.count + 1,
                  totalPrice: item.totalPrice + action.payload.price,
                }
              : item
          );
      return {
        ...state,
        cartItems: newCartItems,
        total: newCartItems.reduce((acc, item) => acc + item.totalPrice, 0),
      };
    case 'DELETE_BOOK_IN_CART':
      
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
        total: state.total - findBookIndexInCart(state, action.payload).getBookTotalPrice
        
      };
    case 'INCREASE_BOOK_IN_CART':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id !== action.payload
            ? item
            : {
                ...item,
                count: item.count + 1,
                totalPrice: item.totalPrice + item.totalPrice / item.count,
              }
        ),
        total: state.total + findBookIndexInCart(state, action.payload).getBookPrice
      };
    case 'DECREASE_BOOK_IN_CART':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id !== action.payload || item.count === 1
            ? item
            : {
                ...item,
                count: item.count - 1,
                totalPrice: item.totalPrice - item.totalPrice / item.count,
              }
        ),
        total: state.total - findBookIndexInCart(state, action.payload).getBookPrice
      };
    default:
      return state;
  }
};
