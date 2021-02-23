import axios from 'axios';
import apiUrl from 'src/utils/api';
import { LOG_IN, saveUserData } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case LOG_IN: {
      const { username, password } = store.getState().user;
      axios.post(
        `${apiUrl()}login_check`,
        {
          username,
          password,
        },
      ).then((response) => {
        console.log(response.data.data);
        store.dispatch(saveUserData(response.data));
        window.location = '/mon-compte';
      }).catch((error) => {
        console.log(error.response.data.message);
      }).finally((response) => {
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
