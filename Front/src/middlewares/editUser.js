import axios from 'axios';
import { EDIT_USER } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case EDIT_USER: {
      const {
        lastname,
        firstname,
        phoneNumber,
        email,
      } = store.getState().editUser;
      axios.patch(
        'http://0.0.0.0:8000/api/users',
        {
          email,
          firstname,
          lastname,
          phoneNumber,
        },
      ).then((response) => {

      }).catch((error) => {
        console.log(error);
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
