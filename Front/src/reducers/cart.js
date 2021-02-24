import { ADD_TO_CARD } from '../actions/shop';
import { handleAddToCart } from '../utils/card';

const initialState = {
  cartItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
