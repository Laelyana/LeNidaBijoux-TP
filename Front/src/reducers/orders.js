import { CLEAR_ORDER, CREATE_ORDER, SAVE_ORDERS } from '../actions/orders';

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };
    case CREATE_ORDER:
      return {
        order: action.payload,
      };
    case CLEAR_ORDER:
      return { order: null };
    default:
      return {
        ...state,
      };
  }
};
