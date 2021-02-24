import { SAVE_FAVORITESADD } from '../actions/favoritesAdd';

const initialState = {
  favoritesAdd: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FAVORITESADD:
      return {
        ...state,
        favoritesAdd: action.favoritesAdd,
      };
    default:
      return {
        ...state,
      };
  }
};
