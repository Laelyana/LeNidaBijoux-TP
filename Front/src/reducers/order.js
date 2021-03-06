import { CLEAR_ORDER, CREATE_ORDER } from '../actions/orders';

const initialState = {
  order: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ORDER:
      return {
        order: action.order,
      };
    case CLEAR_ORDER:
      return { order: null};
    default:
      return {
        ...state,
      };
  }
};
