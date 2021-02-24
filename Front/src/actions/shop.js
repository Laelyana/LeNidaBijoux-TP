export const ADD_TO_CARD = 'ADD_TO_CARD';

export const addToCard = (nextCartItem) => ({
  type: ADD_TO_CARD,
  payload: nextCartItem,
});

/* export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let alreadyExists = false;
  cartItems.forEach((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  dispatch({
    type: ADD_TO_CARD,
    payload: { cartItems },
  });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter(
    x => x.id !== product.id,
  );
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
}; */
