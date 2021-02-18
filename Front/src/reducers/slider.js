import { SAVE_SLIDER } from '../actions/slider';

const initialState = {
  slider: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SLIDER:
      return {
        ...state,
        slider: action.slider,
      };
    default:
      return {
        ...state,
      };
  }
};

