import { combineReducers } from 'redux';

import userReducer from 'src/reducers/user';
import collectionsReducer from 'src/reducers/collections';
// on importer les différents reducers

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  // on combine tous les reducers
}
);
