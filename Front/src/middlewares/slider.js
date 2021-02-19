import axios from 'axios';

import { saveSlider, FETCH_SLIDER } from '../actions/slider';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SLIDER:
      axios.get('http://0.0.0.0:8000/api/slider')
        .then((response) => {
          store.dispatch(saveSlider(response.data));
          //console.log(response.data);
        }).catch((error) => {
          console.log('error');
        }).finally((response) => {

        });
      next(action);
      break;
    default:
      next(action);
  }
};

