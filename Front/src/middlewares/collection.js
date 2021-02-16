import axios from 'axios';

import { saveCollections, FETCH_COLLECTIONS } from 'src/actions/collections';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      axios.get ('http://0.0.0.0:8000/api/colections')
      .then((response) => {
        store.dispatch(saveCollections(response.data));
      }).catch((error) => {
        console.log('error')
      }).finally((response) => {

      });
      next(action);
      break;
      default:
        next(action);
  }
};
