import { BookType } from '../../components/types/types';

export type ActionBooksLoadedType = {
  type: 'BOOKS_LOADED';
  payload: Array<BookType>;
};

export const booksLoadedAC = (
  newBooks: Array<BookType>
): ActionBooksLoadedType => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};

export type ActionBooksRequestedType = {
  type: 'BOOKS_REQUESTED';
};

export const booksRequestedAC = (): ActionBooksRequestedType => {
  return { type: 'BOOKS_REQUESTED' };
};

export type ActionBooksErrorType = {
  type: 'BOOKS_ERROR';
  payload: Error;
};

export const booksErrorAC = (error: Error): ActionBooksErrorType => {
  return { type: 'BOOKS_ERROR', payload: error };
};
