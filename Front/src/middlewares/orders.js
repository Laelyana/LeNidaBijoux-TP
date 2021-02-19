import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveOrders, FETCH_ORDERS } from '../actions/orders';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_ORDERS: {
      const { token } = store.getState().user;
      axios.get(`${apiUrl()}orders/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveOrders(response.data));
        }).catch((error) => {
          console.log('error');
        }).finally((response) => {

        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
