// import de redux et de l'enhancer
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import reducer from 'src/reducers';

import collectionMiddleware from 'src/middlewares/collection';
import categoriesMiddleware from 'src/middlewares/categories';
import authMiddleware from 'src/middlewares/auth';
// import du reducer
const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(authMiddleware, categoriesMiddleware, collectionMiddleware),
  ),
);

// on rend dispo le store
export default store;
