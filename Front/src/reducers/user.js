import { CHANGE_USER_FIELD } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
};

export default (state = initialState, action = {}) => {

  switch(action.type){
      case CHANGE_USER_FIELD:
          return {
              ...state,
              [action.fieldName]: action.fieldValue,
          };
      default:
          return {
              ...state,
          };
  }
}
