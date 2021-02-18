import { SAVE_FAVORITES } from '../actions/favorites';

const initialState = {
  favorites: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };
    default:
      return {
        ...state,
      };
  }
};
