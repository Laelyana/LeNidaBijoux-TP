import { addToCart, ADD_TO_CARD } from 'src/actions/shop';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      store.dispatch(addToCart());
      window.location('/mon-compte/mon-panier');
      break;
    default:
      next(action);
  }
};
