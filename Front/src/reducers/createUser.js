import { CHANGE_NEW_USER_FIELD, SAVE_NEW_USER_DATA, CREATE_USER } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  phoneNumber: '',
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
      };
    case CREATE_USER:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};
