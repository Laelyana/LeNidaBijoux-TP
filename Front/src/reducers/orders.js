import { SAVE_ORDERS } from '../actions/orders';

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
    default:
      return {
        ...state,
      };
  }
};
