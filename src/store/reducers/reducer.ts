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
    case 'FETCH_BOOKS_SUCCESS':
      return { books: action.payload, loading: false, error: null };
    case 'FETCH_BOOKS_REQUEST':
      return { books: [], loading: true, error: null };
    case 'FETCH_BOOKS_FAILURE':
      return {books: [], loading: false, error: action.payload.message}
    default:
      return state;
  }
};
