export const FETCH_STATUS = 'FETCH_STATUS';
export const SAVE_STATUS = 'SAVE_STATUS';

export const fetchStatus = () => ({
  type: FETCH_STATUS,
});

export const saveStatus = (status) => ({
  type: SAVE_STATUS,
  status,
});
