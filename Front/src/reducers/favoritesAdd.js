import { ADD_TO_FAVORITE, CLEAR_FAVORITE } from '../actions/favoritesAdd';

const initialState = {
  favorite: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: action.favorite,
      };
    case CLEAR_FAVORITE:
      return {
        favorite: [],
      };
    default:
      return {
        ...state,
      };
  }
};
