export const CHANGE_USER_FIELD = 'CHANGE_USER_FIELD';

export const changeUserField = (fieldValue, fieldName) => ({
  type: CHANGE_USER_FIELD,
  fieldValue,
});
