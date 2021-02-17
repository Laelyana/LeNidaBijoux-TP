import { CHANGE_USER_FIELD, SAVE_USER_DATA, LOG_OUT } from 'src/actions/user';

const initialState = {
  username: '',
  password: '',
  logged: false,
  token: null,
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
        logged: action.data.data.logged,
        token: action.data.token,
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
      };
    default:
      return {
        ...state,
      };
  }
};
