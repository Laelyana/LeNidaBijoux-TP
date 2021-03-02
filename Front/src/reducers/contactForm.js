import { CHANGE_CONTACT_FORM_FIELD, ERR_MSG_CONTACT_FORM, SAVE_CONTACT_FORM } from '../actions/contactForm';

const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  message: '',
  emptyInput: '',
  badMail: '',
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
        email: '',
        firstname: '',
        lastname: '',
        message: '',
        emptyInput: '',
        badMail: '',
      };
    case ERR_MSG_CONTACT_FORM:
      return {
        ...state,
        emptyInput: '--- Ce champ est requis ---',
        badMail: '--- Email invalide ---',
      };
    default:
      return {
        ...state,
      };
  }
};
