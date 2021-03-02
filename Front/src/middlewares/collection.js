import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveCollections, FETCH_COLLECTIONS } from '../actions/collections';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      axios.get(`${apiUrl()}colections`)
        .then((response) => {
          store.dispatch(saveCollections(response.data));
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
