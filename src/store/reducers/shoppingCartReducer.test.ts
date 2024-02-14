import { v1 } from 'uuid';
import { expect, test } from 'vitest';
import { BookType } from '../../types/types';
import { addBookToCartAC, deleteBookInCartAC } from '../actions/actions';
import { shoppingCartReducer, ShoppingCartStateType } from './shoppingCartReducer';



test('must add the book to cart correctly', () => {

  const startState: ShoppingCartStateType = {
    cartItems: [
      {
        id: v1(),
        title: 'Rambo First Blood',
        count: 3,
        totalPrice: 240,
      },
      {
        id: v1(),
        title: 'Terminator 3',
        count: 4,
        totalPrice: 540,
      },
    ],
    total: 780,
  }; 

  const newBook: BookType = {
    id: v1(),
    title: 'Timon and Pumba',
    author: 'Piter Pan',
    price: 125,
  }

  const action = addBookToCartAC (newBook);
  const endState = shoppingCartReducer(startState, action);

  expect(endState.cartItems.length).toBe(3)
  expect(endState.cartItems[0].title).toBe('Timon and Pumba')

});

test('must delete book from cart correctly',()=>{

  const startState: ShoppingCartStateType = {
    cartItems: [
      {
        id: v1(),
        title: 'Rambo First Blood',
        count: 3,
        totalPrice: 240,
      },
      {
        id: v1(),
        title: 'Terminator 3',
        count: 4,
        totalPrice: 540,
      },
    ],
    total: 780,

  }; 

  const bookIdForDelete = startState.cartItems[0].id;
  const action = deleteBookInCartAC(bookIdForDelete);
  const endState = shoppingCartReducer(startState, action);

  expect(endState.cartItems.length).toBe(1)
  expect(endState.cartItems.findIndex((item)=>item.id ===action.payload)).toBe(-1)

})
