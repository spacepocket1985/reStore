import { ShoppingCartStateType } from '../store/reducers/shoppingCartReducer';

export const findBookIndexInCart = (
  state: ShoppingCartStateType,
  id: string
):{getBookPrice: number, getBookTotalPrice: number} => {
  const bookIndex = state.cartItems.findIndex((item) => item.id === id);
  const getBookPrice =
    state.cartItems[bookIndex].totalPrice / state.cartItems[bookIndex].count;
  const getBookTotalPrice = state.cartItems[bookIndex].totalPrice;
  return { getBookPrice, getBookTotalPrice };
};
