import { CHANGE_NEW_USER_FIELD, SAVE_NEW_USER_DATA, CREATE_USER } from 'src/actions/user';
import { CHANGE_CONTACT_FORM_FIELD, SAVE_CONTACT_FORM } from '../actions/contactForm';

const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  message: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_FORM_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case SAVE_CONTACT_FORM:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
