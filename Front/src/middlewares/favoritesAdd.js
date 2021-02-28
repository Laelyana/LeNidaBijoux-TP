import axios from 'axios';
import apiUrl from 'src/utils/api';
import { fetchFavorites, saveFavorites } from '../actions/favorites';
import { ADD_TO_FAVORITE, clearFavorite, REMOVE_FAVORITE } from '../actions/favoritesAdd';

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
          store.dispatch(fetchFavorites());
        }).catch((error) => {
          console.log('error');
        }).finally((response) => {

        });
      next(action);
      break;
    }
    case REMOVE_FAVORITE: {
      const { token } = store.getState().user;
      const { id } = store.getState().favoritesAdd.favorite;
      console.log(token);
      axios.delete(`${apiUrl()}favorites/${id}/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          store.dispatch(fetchFavorites());
          console.log(response.data);
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
