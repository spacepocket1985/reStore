import { BookType } from '../../components/types/types';

export type ActionBooksLoadedType = {
  type: 'BOOKS_LOADED';
  payload: Array <BookType> ;
  
};

export const booksLoadedAC = (newBooks: Array <BookType>): ActionBooksLoadedType => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks,
  };
};
