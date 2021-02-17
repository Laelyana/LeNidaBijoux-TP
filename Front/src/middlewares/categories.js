import axios from 'axios';

import { saveCategories, FETCH_CATEGORIES } from '../actions/categories';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios.get('http://0.0.0.0:8000/api/categories')
        .then((response) => {
          store.dispatch(saveCategories(response.data));
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
