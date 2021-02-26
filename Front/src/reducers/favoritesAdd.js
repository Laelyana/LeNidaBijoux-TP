import { ADD_TO_FAVORITE } from "../actions/favoritesAdd";

const initialState = {
  favoritesAdd: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
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
