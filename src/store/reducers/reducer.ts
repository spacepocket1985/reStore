import { v1 } from 'uuid';
import { BookType, CartItemType } from '../../components/types/types';
import {
  ActionBooksErrorType,
  ActionBooksLoadedType,
  ActionBooksRequestedType,
  ActionAddBookToCart,
  ActionDeleteBookInCart,
  ActionIncreaseBookInCart,
  ActionsType,
} from '../actions/actions';

type InitialStateType = {
  books: Array<BookType>;
  cartItems: Array<CartItemType>;
  total: number;
  loading: boolean;
  error: string | null;
};

const initialState: InitialStateType = {
  books: [],
  cartItems: [
    {
      id: v1(),
      title: 'Rambo First Blood',
      count: 3,
      totalPrice: 240,
    },
    {
      id: v1(),
      title: 'Terminator 3',
      count: 4,
      totalPrice: 540,
    },
  ],
  total: 780,
  loading: true,
  error: null,
};

export const booksStoreReducer = (
  state = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return { ...state, books: action.payload, loading: false, error: null };
    case 'FETCH_BOOKS_REQUEST':
      return { ...state, books: [], loading: true, error: null };
    case 'FETCH_BOOKS_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload.message,
      };
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
      };
    case 'DELETE_BOOK_IN_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    case 'INCREASE_BOOK_IN_CART':
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id !== action.payload ? item : { ...item, count: item.count + 1, totalPrice: item.totalPrice + item.totalPrice/item.count }
        ),
      };
    case 'DECREASE_BOOK_IN_CART' : 
    return {
      ...state,
      cartItems: state.cartItems.map((item) =>
        item.id !== action.payload || item.count === 1 ? item : { ...item, count: item.count - 1, totalPrice: item.totalPrice - item.totalPrice/item.count }
      ),
    }
    default:
      return state;
  }
};
