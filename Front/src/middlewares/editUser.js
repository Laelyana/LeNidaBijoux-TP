import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveUserEditData, FETCH_USER_DATA } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_DATA: {
      const { token } = store.getState().user;
      axios.get(`${apiUrl()}users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          store.dispatch(saveUserEditData(response.data));
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
