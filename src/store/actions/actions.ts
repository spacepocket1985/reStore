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
