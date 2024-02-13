import { v1 } from 'uuid';
import { BookType } from '../../components/types/types';
import { ActionBooksLoadedType } from '../actions/actions';

type InitialStateType =  {
  books: Array<BookType>;
};

const initialState: InitialStateType = {
  books: [],
};

export const booksStoreReducer = (
  state = initialState,
  action: ActionBooksLoadedType
) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
