import axios from 'axios';

import { saveProducts, FETCH_PRODUCTS } from '../actions/products';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios.get('http://0.0.0.0:8000/api/products')
        .then((response) => {
          store.dispatch(saveProducts(response.data));
        }).catch((error) => {
          console.log('error');
        }).finally((response) => {

        });
      next(action);
      break;
    default:
      next(action);
  }
};
