export const FETCH_COLLECTIONS = 'FETCH_COLLECTIONS';
export const SAVE_COLLECTIONS = 'SAVE_COLLECTIONS';

export const fetchCollections = () => ({
  type: FETCH_COLLECTIONS,
});

export const saveCollections = (collections) => ({
  type: SAVE_COLLECTIONS,
  collections,
});
