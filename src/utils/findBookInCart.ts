import { ShoppingCartStateType } from '../store/reducers/shoppingCartReducer';

export const findBookInCart = (state: ShoppingCartStateType, id: string): number => {
  const book = state.cartItems.find((item) => item.id === id);
  if (book) return book.totalPrice
  return 0
};
