import { CHANGE_NEW_USER_FIELD, SAVE_NEW_USER_DATA, CREATE_USER } from 'src/actions/user';
import { ERR_MSG_CREATE_USER } from '../actions/user';

const initialState = {
  email: '',
  password: '',
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
      };
    case CREATE_USER:
      return {
        ...state,

      };
    case ERR_MSG_CREATE_USER:
      return {
        ...state,
        emptyInput: '--- Ce champ est requis ---',
        badMail: '--- Ce mail n\'est pas un email valide ---',
        badPhone: '--- Ce champ ne doit contenir que des chiffres ---',
        badPassword: '--- Les mots de passe ne correspondent pas ---',
      };
    default:
      return {
        ...state,
      };
  }
};
