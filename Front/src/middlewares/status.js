import axios from 'axios';
import apiUrl from 'src/utils/api';
import { FETCH_STATUS, saveStatus } from '../actions/site';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_STATUS:
      axios.get(`${apiUrl()}status-site/active`)
        .then((response) => {
          store.dispatch(saveStatus(response.data));
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
