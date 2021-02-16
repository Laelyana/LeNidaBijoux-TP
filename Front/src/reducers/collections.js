import { SAVE_COLLECTIONS } from '../actions/collections';

const initialState = {
  collections: [],
};

export default (state=initialState, action) => {
  switch (action.type) {
    case SAVE_COLLECTIONS:
      return {
        ...state,
        collections: action.collections,
      };
    default:
      return {
        ...state,
      };
  }
};
