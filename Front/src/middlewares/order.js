import axios from 'axios';
import apiUrl from 'src/utils/api';
import {
  createOrder, CREATE_ORDER,
} from '../actions/orders';
import { clearCart } from '../actions/shop';

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
          if (newOrder !== { }) {
            store.dispatch(createOrder(newOrder));
            store.dispatch(clearCart());
          }
        }).catch((error) => {
          console.log('error');
        })
        .finally((response) => {
          console.log("c'est fini");
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
