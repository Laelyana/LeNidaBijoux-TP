import axios from 'axios';

import { saveUserEditData, FETCH_USER_DATA } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USER_DATA: {
      const { token } = store.getState().user;
      axios.get('http://0.0.0.0:8000/api/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
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
