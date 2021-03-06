import axios from 'axios';
import apiUrl from 'src/utils/api';
import { CREATE_USER, errMsgCreateUser, saveNewUserData } from '../actions/user';

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
        store.dispatch(saveNewUserData());
        window.alert('Votre compte est créé, vous pouvez vous connecter');
      }).catch((error) => {
        store.dispatch(errMsgCreateUser(error.response.status));
        if (error.response.status === 403) {
          window.alert('Cet utilisateur existe déjà');
        }
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
