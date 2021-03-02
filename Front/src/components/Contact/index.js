import React from 'react';
import Field from './Field';
import Textarea from './Textarea';

import './contact.scss';

const Contact = ({
  firstname,
  lastname,
  email,
  message,
  changeField,
  handleContact,
  emptyInput,
  badMail,
}) => {
  const handleFormContactSubmit = (evt) => {
    evt.preventDefault();
    handleContact();
  };
  // validation lastname input
  function lastnameIsEmpty() {
    const str = lastname;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  function lastnameTooLong() {
    const str = lastname;
    if (str.length > 50) {
      return false;
    }
    return true;
  }
  // validation firstname input
  function firstnameIsEmpty() {
    const str = firstname;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  function firstnameTooLong() {
    const str = firstname;
    if (str.length > 50) {
      return false;
    }
    return true;
  }
  // validation email input
  function emailIsEmpty() {
    const str = email;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  // validation message
  function messageIsEmpty() {
    const str = message;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  function messageTooLong() {
    const str = message;
    if (str.length > 8000) {
      return false;
    }
    return true;
  }
  const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  const msgTooLong = '--- Maximum de caractères atteint ---';
  return (
    <>
      <div className="title__contact"><h3>Formulaire de contact</h3></div>
      <hr className="style-two" />
      <form className="contact__form" onSubmit={handleFormContactSubmit}>

        <Field
          name="lastname"
          placeholder="Votre nom"
          onChange={changeField}
          value={lastname}
        />
        {!lastnameIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!lastnameTooLong() && <div className="errorDiv">{msgTooLong}</div>}

        <Field
          name="firstname"
          placeholder="Votre prénom"
          onChange={changeField}
          value={firstname}
        />
        {!firstnameIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!firstnameTooLong() && <div className="errorDiv">{msgTooLong}</div>}
        <Field
          name="email"
          placeholder="Votre email"
          onChange={changeField}
          value={email}
        />
        {!emailIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!regexEmail.test(email) && <div className="errorDiv">{badMail}</div>}
        <Textarea
          name="message"
          placeholder="Votre message"
          onChange={changeField}
          value={message}
        />
        {!messageIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!messageTooLong() && <div className="errorDiv">{msgTooLong}</div>}
        <button type="submit" className="contact__form--button"><span>Envoyer</span></button>
      </form>
    </>
  );
};
export default Contact;
