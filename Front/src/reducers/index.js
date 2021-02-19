import { combineReducers } from 'redux';

import userReducer from '../reducers/user';
import collectionsReducer from '../reducers/collections';
import categoriesReducer from '../reducers/categories';
import favoritesReducer from '../reducers/favorites';
import createUserReducer from '../reducers/createUser';
import sliderReducer from '../reducers/slider';
import editUserReducer from '../reducers/editUser';
// on importer les différents reducers

const combineReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
  createUser: createUserReducer,
  slider: sliderReducer,
  editUser: editUserReducer,
  // on combine tous les reducers
});

export default combineReducer;
