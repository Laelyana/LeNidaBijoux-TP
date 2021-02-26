import axios from 'axios';
import apiUrl from 'src/utils/api';
import { ADD_TO_FAVORITE } from '../actions/favoritesAdd';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      const { token } = store.getState().user;
      console.log(token);
      const { id } = store.getState().products;
      axios.patch(`${apiUrl()}favorites/180/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
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
