// import de redux et de l'enhancer
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { persistStore } from 'redux-persist';

import authMiddleware from 'src/middlewares/auth';
import collectionMiddleware from 'src/middlewares/collection';
import categoriesMiddleware from 'src/middlewares/categories';
// import du reducer
import reducer from 'src/reducers';

// on met en place le store
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(authMiddleware, collectionMiddleware, categoriesMiddleware)
));
const persistor = persistStore(store);

// on rend dispo le store
export default { store, persistor };
