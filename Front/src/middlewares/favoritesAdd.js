import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveFavoritesAdd, FETCH_FAVORITES_ADD } from '../actions/favoritesAdd';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_FAVORITES_ADD: {
      const { token } = store.getState().user;
      axios.get(`${apiUrl()}/api/favorites/${id}/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(saveFavoritesAdd(response.data));
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
