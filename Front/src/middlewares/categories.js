import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveCategories, FETCH_CATEGORIES } from '../actions/categories';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios.get(`${apiUrl()}categories`)
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
