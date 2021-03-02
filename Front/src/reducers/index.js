import { combineReducers } from 'redux';

import userReducer from '../reducers/user';
import collectionsReducer from '../reducers/collections';
import categoriesReducer from '../reducers/categories';
import favoritesReducer from '../reducers/favorites';
import favoritesAddReducer from '../reducers/favoritesAdd';
import createUserReducer from '../reducers/createUser';
import sliderReducer from '../reducers/slider';
import editUserReducer from '../reducers/editUser';
import ordersReducer from '../reducers/orders';
import statusReducer from '../reducers/status';
import productsReducer from '../reducers/products';
import cartReducer from '../reducers/cart';
import orderReducer from '../reducers/order';
import contactFormReducer from '../reducers/contactForm';
// on importer les différents reducers

const combineReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  categories: categoriesReducer,
  favorites: favoritesReducer,
  favoritesAdd: favoritesAddReducer,
  createUser: createUserReducer,
  slider: sliderReducer,
  editUser: editUserReducer,
  orders: ordersReducer,
  status: statusReducer,
  products: productsReducer,
  cart: cartReducer,
  order: orderReducer,
  contactForm: contactFormReducer,
  // on combine tous les reducers
});

export default combineReducer;
