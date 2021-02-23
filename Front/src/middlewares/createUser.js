import axios from 'axios';
import apiUrl from 'src/utils/api';
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
        `${apiUrl()}users/sign_in`,
        {
          email,
          password,
          firstname,
          lastname,
          phoneNumber,
        },
      ).then((response) => {
        console.log(response);
        window.alert('Votre compte est créé, vous pouvez vous connecter');
      }).catch((error) => {
        console.log(error.response.data);
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
