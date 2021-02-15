// import de redux et de l'enhancer
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import authMiddleware from 'src/middlewares/auth';
// import du reducer
import reducer from 'src/reducers';

// on met en place le store
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(authMiddleware)
));

// on rend dispo le store
export default store;
