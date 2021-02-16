import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from 'src/reducers/user';
import collectionsReducer from 'src/reducers/collections';
import categoriesReducer from 'src/reducers/categories';
// on importer les différents reducers

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  collections: collectionsReducer,
  categories: categoriesReducer,
  // on combine tous les reducers
}
);

export default persistReducer (persistConfig, rootReducer);
