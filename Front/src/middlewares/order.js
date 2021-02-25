import axios from 'axios';
import apiUrl from 'src/utils/api';
import {
  clearCart, clearOrder, CLEAR_ORDER, createOrder, CREATE_ORDER,
} from '../actions/orders';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_ORDER: {
      const { token } = store.getState().user;
      const order = store.getState().cart.cartItems;
      const newOrder = order.map((item) => {
        const properties = {
          productId: item.id,
          quantity: item.quantity,
        };
        return properties;
      });
      console.log(newOrder);
      axios.post(`${apiUrl()}carts/users`,
        newOrder,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response);
          store.dispatch(createOrder());
        }).catch((error) => {
          console.log('error');
        })
        .finally((response) => {

        });
      next(action);
      break;
    }
    case CLEAR_ORDER: {
      store.dispatch(clearOrder());
      next(action);
      break;
    }
    default:
      next(action);
  }
};
