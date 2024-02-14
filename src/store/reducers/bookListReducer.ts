import { BookType } from '../../types/types';
import { ActionsBooksListType} from '../actions/actions';

export type BookListStateType = {
  books: Array<BookType>;
  loading: boolean;
  error: string | null;
};

const initialState: BookListStateType = {
  books: [],
  loading: true,
  error: null,
};

export const bookListReducer = (
  state = initialState,
  action: ActionsBooksListType
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

    default:
      return state;
  }
};
