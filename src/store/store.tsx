import { legacy_createStore as createStore, combineReducers } from "redux";
import { booksStoreReducer } from "./reducers/reducer";

export type AppRootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  books: booksStoreReducer,

});
export const Store = createStore(rootReducer);
