export const ADD_TO_CARD = 'ADD_TO_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const REDUCE_CART_ITEM = 'REDUCE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCard = (nextCartItem) => ({
  type: ADD_TO_CARD,
  payload: nextCartItem,
});

export const removeCard = (cartItem) => ({
  type: REMOVE_CARD,
  payload: cartItem,
});
export const reduceCartItem = (cartItem) => ({
  type: REDUCE_CART_ITEM,
  payload: cartItem,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
