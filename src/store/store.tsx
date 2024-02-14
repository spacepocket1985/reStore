import { legacy_createStore as createStore, combineReducers } from "redux";
import { bookListReducer } from "./reducers/bookListReducer";
import { shoppingCartReducer } from "./reducers/shoppingCartReducer";


export type AppRootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  booksList: bookListReducer,
  shoppingCart: shoppingCartReducer

});
export const Store = createStore(rootReducer);
