import { SAVE_USER_EDIT_DATA } from '../actions/user';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_EDIT_DATA:
      return {
        ...state,
        data: action.data,
      };
    default:
      return {
        ...state,

      };
  }
};
