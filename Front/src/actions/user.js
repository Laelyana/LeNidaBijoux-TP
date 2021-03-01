export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const CREATE_USER = 'CREATE_USER';
export const CHANGE_NEW_USER_FIELD = 'CHANGE_NEW_USER_FIELD';
export const SAVE_NEW_USER_DATA = 'SAVE_NEW_USER_DATA';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_USER_EDIT_DATA = 'SAVE_USER_EDIT_DATA';
export const CHANGE_EDIT_USER_FIELD = 'CHANGE_EDIT_USER_FIELD';
export const EDIT_USER = 'EDIT_USER';
export const ERR_MSG = 'ERR_MSG';
export const ERR_MSG_CREATE_USER = 'ERR_MSG_CREATE_USER';

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
export const changeEditUserField = (fieldValue, fieldName) => ({
  type: CHANGE_EDIT_USER_FIELD,
  fieldValue,
  fieldName,
});

export const logIn = () => ({
  type: LOG_IN,
});
export const logOut = () => ({
  type: LOG_OUT,
});

export const createUser = () => ({
  type: CREATE_USER,
});
export const editUser = () => ({
  type: EDIT_USER,
});

export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

export const saveUserData = (data) => ({
  type: SAVE_USER_DATA,
  data,
});
export const saveNewUserData = (newData) => ({
  type: SAVE_NEW_USER_DATA,
  newData,
});
export const saveUserEditData = (data) => ({
  type: SAVE_USER_EDIT_DATA,
  data,
});
export const errMsg = (msg) => ({
  type: ERR_MSG,
  msg,
});
export const errMsgCreateUser = (msg) => ({
  type: ERR_MSG_CREATE_USER,
  msg,
});
