export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addToFavorite = (product) => ({
  type: ADD_TO_FAVORITE,
  product,
});

export const removeFavorite = (product) => ({
  type: REMOVE_FAVORITE,
  product,
});
