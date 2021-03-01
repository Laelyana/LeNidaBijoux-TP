export const CHANGE_CONTACT_FORM_FIELD = 'CHANGE_CONTACT_FORM_FIELD';
export const SAVE_CONTACT_FORM = 'SAVE_CONTACT_FORM';

export const changeContactFormField = (fieldValue, fieldName) => ({
  type: CHANGE_CONTACT_FORM_FIELD,
  fieldValue,
  fieldName,
});
export const saveContactForm = (data) => ({
  type: SAVE_CONTACT_FORM,
  data,
});
