import { CHANGE_EDIT_USER_FIELD, SAVE_USER_EDIT_DATA } from '../actions/user';

const initialState = {
  email: '',
  firstname: '',
  lastname: '',
  phoneNumber: '',
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_EDIT_DATA:
      return {
        ...state,
      };
    case CHANGE_EDIT_USER_FIELD:
      return {
        ...state,
        [action.fieldName]: action.fieldValue,
      };
    default:
      return {
        ...state,

      };
  }
};
