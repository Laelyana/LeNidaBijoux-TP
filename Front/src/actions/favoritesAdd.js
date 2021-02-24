export const FETCH_FAVORITES_ADD = 'FETCH_FAVORITES_ADD';
export const SAVE_FAVORITES_ADD = 'SAVE_FAVORITES_ADD';

export const fetchFavoritesAdd = () => ({
  type: FETCH_FAVORITES_ADD,
});

export const saveFavoritesAdd = (favoritesAdd) => ({
  type: SAVE_FAVORITES_ADD,
  favoritesAdd,
});
