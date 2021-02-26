import axios from 'axios';
import apiUrl from 'src/utils/api';
import { ADD_TO_FAVORITE, clearFavorite } from '../actions/favoritesAdd';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const { token } = store.getState().user;
      const { id } = store.getState().favoritesAdd.favorite;
      axios.patch(`${apiUrl()}favorites/${id}/users`,
        {
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          store.dispatch(clearFavorite());
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
