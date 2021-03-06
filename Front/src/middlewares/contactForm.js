import axios from 'axios';
import apiUrl from 'src/utils/api';
import { errMsgContactForm, SAVE_CONTACT_FORM } from '../actions/contactForm';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_CONTACT_FORM: {
      const {
        lastname,
        firstname,
        email,
        message,
      } = store.getState().contactForm;
      axios.post(
        `${apiUrl()}contacts`,
        {
          email,
          message,
          firstname,
          lastname,
        },
      ).then((response) => {
        console.log(response);
        window.alert('Votre message a été envoyé');
      }).catch((error) => {
        store.dispatch(errMsgContactForm(error.response));
      });
      next(action);
      break;
    }
    default:
      next(action);
  }
};
