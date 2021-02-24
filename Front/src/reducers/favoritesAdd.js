import { SAVE_FAVORITES_ADD } from '../actions/favoritesAdd';

const initialState = {
  favoritesAdd: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FAVORITES_ADD:
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
