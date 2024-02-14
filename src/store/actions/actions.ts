import { BookType } from '../../components/types/types';

export type ActionBooksLoadedType = {
  type: 'FETCH_BOOKS_SUCCESS';
  payload: Array<BookType>;
};

export const booksLoadedAC = (
  newBooks: Array<BookType>
): ActionBooksLoadedType => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  };
};

export type ActionBooksRequestedType = {
  type: 'FETCH_BOOKS_REQUEST';
};

export const booksRequestedAC = (): ActionBooksRequestedType => {
  return { type: 'FETCH_BOOKS_REQUEST' };
};

export type ActionBooksErrorType = {
  type: 'FETCH_BOOKS_FAILURE';
  payload: Error;
};

export const booksErrorAC = (error: Error): ActionBooksErrorType => {
  return { type: 'FETCH_BOOKS_FAILURE', payload: error };
};

export type ActionAddBookToCart = {
  type: 'ADD_BOOK_TO_CART';
  payload: BookType;
};

export const addBookToCartAC = (book: BookType): ActionAddBookToCart => {
  return {
    type: 'ADD_BOOK_TO_CART',
    payload: book,
  };
};

export type ActionDeleteBookInCart = {
  type: 'DELETE_BOOK_IN_CART';
  payload: string;
};

export const deleteBookInCartAC = (bookId: string): ActionDeleteBookInCart => {
  return {
    type: 'DELETE_BOOK_IN_CART',
    payload: bookId,
  };
};

export type ActionIncreaseBookInCart = {
  type: 'INCREASE_BOOK_IN_CART';
  payload: string;
};

export const increaseBookInCartAC = (
  bookId: string
): ActionIncreaseBookInCart => {
  return {
    type: 'INCREASE_BOOK_IN_CART',
    payload: bookId,
  };
};

export type ActionDecreaseBookInCart = {
  type: 'DECREASE_BOOK_IN_CART';
  payload: string;
};

export const decreaseBookInCartAC = (
  bookId: string
): ActionDecreaseBookInCart => {
  return {
    type: 'DECREASE_BOOK_IN_CART',
    payload: bookId,
  };
};

export type ActionsType =
  | ActionBooksLoadedType
  | ActionBooksRequestedType
  | ActionBooksErrorType
  | ActionAddBookToCart
  | ActionDeleteBookInCart
  | ActionDecreaseBookInCart
  | ActionIncreaseBookInCart;
