import axios from 'axios';
import { CREATE_USER } from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case CREATE_USER: {
      const {
        lastname,
        firstname,
        password,
        phoneNumber,
        email,
      } = store.getState().createUser;
      axios.post(
        'http://0.0.0.0:8000/api/users',
        {
          email,
          password,
          firstname,
          lastname,
          phoneNumber,
        },
      ).then((response) => {
        console.log(response);
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
