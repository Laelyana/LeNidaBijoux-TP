import { combineReducers } from 'redux';

import userReducer from '../reducers/user';
import collectionsReducer from '../reducers/collections';
import categoriesReducer from '../reducers/categories';
import favoritesReducer from '../reducers/favorites';
// on importer les différents reducers

const combineReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
  // on combine tous les reducers
});

export default combineReducer;
