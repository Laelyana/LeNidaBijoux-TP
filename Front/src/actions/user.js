export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CREATE_USER = 'CREATE_USER';
export const SAVE_NEW_USER_DATA = 'SAVE_NEW_USER_DATA';
export const CHANGE_NEW_USER_FIELD = 'CHANGE_NEW_USER_FIELD';
export const EDIT_USER = 'CREATE_USER';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';

export const changeUserField = (fieldValue, fieldName) => ({
  type: CHANGE_USER_FIELD,
  fieldValue,
  fieldName,
});
export const changeNewUserField = (fieldValue, fieldName) => ({
  type: CHANGE_NEW_USER_FIELD,
  fieldValue,
  fieldName,
});
export const logIn = () => ({
  type: LOG_IN,
});
export const logOut = () => ({
  type: LOG_OUT,
});
export const saveUserData = (data) => ({
  type: SAVE_USER_DATA,
  data,
});
export const createUser = () => ({
  type: CREATE_USER,
});
export const saveNewUserData = (newData) => ({
  type: SAVE_NEW_USER_DATA,
  newData,
});
