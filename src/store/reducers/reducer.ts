import { BookType } from "../../components/types/types";
import { ActionBooksLoadedType } from "../actions/actions";

const initialState = {
  books: Array <BookType>,
};

export const booksStoreReducer = (state = initialState, action: ActionBooksLoadedType) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
    return {
      books: action.payload
    } 
    default: return state
  }


};
