export const ADD_TO_CARD = 'ADD_TO_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const addToCard = (nextCartItem) => ({
  type: ADD_TO_CARD,
  payload: nextCartItem,
});

export const removeCard = (cartItem) => ({
  type: REMOVE_CARD,
  payload: cartItem,
});
