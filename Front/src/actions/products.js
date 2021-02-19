export const FETCH_PRODUCTS = 'FETCH_CATEGORIES';
export const SAVE_PRODUCTS = 'SAVE_CATEGORIES';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const saveProducts = (products) => ({
  type: SAVE_PRODUCTS,
  products,
});
