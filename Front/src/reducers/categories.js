import { SAVE_CATEGORIES } from '../actions/categories';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return {
        ...state,
      };
  }
};
