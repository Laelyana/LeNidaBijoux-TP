import axios from 'axios';

import { saveFavorites, FETCH_FAVORITES } from '../actions/favorites';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FAVORITES: {
      const { token, userId } = store.getState().user;
      axios.get('http://0.0.0.0:8000/api/favorites/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveFavorites(response.data));
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
