import { ADD_TO_CARD, REMOVE_CARD, REDUCE_CART_ITEM, CLEAR_CART } from '../actions/shop';
import { handleAddToCart, handleRemoveCartItem, handleReduceCartItem } from '../utils/card';

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
    case REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    case CLEAR_CART:
      return {
        cartItems: [],
      };
    default:
      return {
        ...state,
      };
  }
};
