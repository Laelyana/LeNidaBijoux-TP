import { combineReducers } from 'redux';

import userReducer from 'src/reducers/user';
import collectionsReducer from 'src/reducers/collections';
import categoriesReducer from 'src/reducers/categories';
// on importer les différents reducers

export default combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  categories: categoriesReducer,
  // on combine tous les reducers
}
);
