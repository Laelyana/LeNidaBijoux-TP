import { combineReducers } from 'redux';

import userReducer from 'src/reducers/user';
// on importer les différents reducers

export default combineReducers({
  user: userReducer,
  // on combine tous les reducers
}
);
