import { v1 } from 'uuid';
import { BookType } from '../../components/types/types';
import {
  ActionBooksErrorType,
  ActionBooksLoadedType,
  ActionBooksRequestedType,
} from '../actions/actions';

type InitialStateType = {
  books: Array<BookType>;
  loading: boolean;
  error: string | null;
};

const initialState: InitialStateType = {
  books: [],
  loading: true,
  error: null,
};

type ActionsType = ActionBooksLoadedType | ActionBooksRequestedType | ActionBooksErrorType;

export const booksStoreReducer = (
  state = initialState,
  action: ActionsType
) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { books: action.payload, loading: false, error: null };
    case 'BOOKS_REQUESTED':
      return { books: [], loading: true, error: null };
    case 'BOOKS_ERROR':
      return {books: [], loading: false, error: action.payload.message}
    default:
      return state;
  }
};
