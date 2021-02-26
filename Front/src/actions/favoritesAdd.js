export const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const CLEAR_FAVORITE = 'CLEAR_FAVORITE';

export const addToFavorite = (favorite) => ({
  type: ADD_TO_FAVORITE,
  favorite,
});

export const removeFavorite = (favorite) => ({
  type: REMOVE_FAVORITE,
  favorite,
});
export const clearFavorite = () => ({
  type: CLEAR_FAVORITE,
});
