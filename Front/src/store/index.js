// import de redux et de l'enhancer
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

// import du reducer
import reducer from 'src/reducers';

import collectionMiddleware from 'src/middlewares/collection';
import categoriesMiddleware from 'src/middlewares/categories';
import authMiddleware from 'src/middlewares/auth';
import favoritesMiddleware from 'src/middlewares/favorites';
import favoritesAddMiddleware from 'src/middlewares/favoritesAdd';
import createUserMiddleware from 'src/middlewares/createUser'
import sliderMiddleware from 'src/middlewares/slider';
import editUserMiddleware from 'src/middlewares/editUser';
import ordersMiddleware from 'src/middlewares/orders';
import statusMiddleware from 'src/middlewares/status';
import productsMiddleware from 'src/middlewares/products';
import orderMiddleware from 'src/middlewares/order';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  }
  catch (e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = sessionStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  }
  catch (e) {
    console.log(e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(
    applyMiddleware(
      authMiddleware,
      categoriesMiddleware,
      collectionMiddleware,
      favoritesMiddleware,
      favoritesAddMiddleware,
      createUserMiddleware,
      editUserMiddleware,
      ordersMiddleware,
      sliderMiddleware,
      statusMiddleware,
      productsMiddleware,
      orderMiddleware,
    ),
  ),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

// on rend dispo le store
export default store;
