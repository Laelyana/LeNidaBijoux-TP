import { ADD_TO_CARD, REMOVE_CARD } from '../actions/shop';
import { handleAddToCart, handleRemoveCartItem } from '../utils/card';

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
    case REMOVE_CARD:
      return {
        ...state,
        cartItems: handleRemoveCartItem({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };
    default:
      return {
        ...state,
      };
  }
};
