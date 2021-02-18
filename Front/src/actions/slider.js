export const FETCH_SLIDER = 'FETCH_SLIDER';
export const SAVE_SLIDER = 'SAVE_SLIDER';

export const fetchSlider = () => ({
  type: FETCH_SLIDER,
});

export const saveSlider = (slider) => ({
  type: SAVE_SLIDER,
  slider,
});
