import {
  CHANGE_USER_FIELD, SAVE_USER_DATA, LOG_OUT, ERR_MSG,
} from 'src/actions/user';

const initialState = {
  username: '',
  password: '',
  logged: false,
  token: null,
  errMsg: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    case SAVE_USER_DATA:
      return {
        ...state,
        logged: true,
        token: action.data.token,
        errMsg: '',
      };
    case LOG_OUT:
      window.location = '/';
      return {
        ...state,
        logged: false,
        username: '',
        token: null,
        email: '',
        password: '',
        errMsg: '',
      };
    case ERR_MSG:
      return {
        ...state,
        errMsg: '--- Mauvais identifiants ---',
      };
    default:
      return {
        ...state,
      };
  }
};
