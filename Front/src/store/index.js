// import de redux et de l'enhancer
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

// import du reducer
import reducer from 'src/reducers/user';

// on met en place le store
const store = createStore(reducer, devToolsEnhancer());

// on rend dispo le store
export default store;
