import { CHANGE_NEW_USER_FIELD, SAVE_NEW_USER_DATA, CREATE_USER } from 'src/actions/user';
import { ERR_MSG_CREATE_USER, LOG_IN } from '../actions/user';

const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  phoneNumber: '',
  emptyInput: '',
  badMail: '',
  badPhone: '',
  badPassword: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_NEW_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case SAVE_NEW_USER_DATA:
      return {
        ...state,
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phoneNumber: '',
        emptyInput: '',
        badMail: '',
        badPhone: '',
        badPassword: '',
        confirmPassword: '',
      };
    case CREATE_USER:
      return {
        ...state,
        emptyInput: '',
        badMail: '',
        badPhone: '',
        badPassword: '',

      };
    case ERR_MSG_CREATE_USER:
      return {
        ...state,
        emptyInput: '--- Ce champ est requis ---',
        badMail: '--- Email invalide ---',
        badPhone: '--- Ce champ ne doit contenir que des chiffres ---',
        badPassword: '--- Les mots de passe ne correspondent pas ---',
      };
    case LOG_IN:
      return {
        ...state,
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phoneNumber: '',
        emptyInput: '',
        badMail: '',
        badPhone: '',
        badPassword: '',
        confirmPassword: '',
      };
    default:
      return {
        ...state,
      };
  }
};
