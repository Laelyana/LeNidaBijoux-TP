import axios from 'axios';
import apiUrl from 'src/utils/api';
import { saveUserEditData, FETCH_USER_DATA, EDIT_USER } from '../actions/user';

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
          console.log(response.data);
        }).catch((error) => {
          console.log('ca marche pas');
        }).finally((response) => {

        });
      next(action);
      break;
    }
    case EDIT_USER: {
      const { token } = store.getState().user;
      const {
        lastname,
        firstname,
        phoneNumber,
        email,
      } = store.getState().editUser;
      axios.patch(`${apiUrl()}users`,
        {
          lastname,
          firstname,
          phoneNumber,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      ).then((response) => {
        console.log(response);
        window.alert('Votre profil a été mis à jour');
      }).catch((error) => {
        console.log('erreur');
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
