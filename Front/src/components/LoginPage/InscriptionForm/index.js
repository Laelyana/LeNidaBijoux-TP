import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

import './inscriptionform.scss';

const InscriptionForm = ({
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  phoneNumber,
  changeField,
  handleCreateUser,
  emptyInput,
  badMail,
  badPhone,
  badPassword,
}) => {
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
  // validation phoneNumber input
  function phoneIsEmpty() {
    const str = phoneNumber;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  function phoneNumberTooLong() {
    const str = phoneNumber;
    if (str.length > 15) {
      return false;
    }
    return true;
  }
  const regexPhone = new RegExp('^[0-9]+$');

  // validation email input
  function emailIsEmpty() {
    const str = email;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
  // validation password input
  const regexPassword = new RegExp('[/\\s/g]');

  // error message
  const msgRegex = '--- Espace non autorisé ---';
  const msgTooLong = '--- Maximum de caractères atteint ---';
  // confirm password
  function passWordIsEmpty() {
    const str = password;
    if (!str.replace(/\s+/, '').length || !str) {
      return false;
    }
    return true;
  }
  function comparePassword() {
    const password1 = password;
    const password2 = confirmPassword;
    if (password1 === password2) {
      return true;
    }
    return false;
  }
  const handleNewSubmit = (evt) => {
    evt.preventDefault();
    if (passWordIsEmpty() && comparePassword()) {
      handleCreateUser();
    }
    else {
      window.alert('Merci de remplir tous les champs du formulaires');
    }
  };
  return (
    <div className="form__leftside">
      <h3>Pas encore inscrit ? Rejoignez nous !</h3>
      <form onSubmit={handleNewSubmit} className="form__inscription">
        <Field
          name="lastname"
          placeholder="Votre nom"
          onChange={changeField}
          value={lastname}
          label="Nom : "
        />
        {!lastnameIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!lastnameTooLong() && <div className="errorDiv">{msgTooLong}</div>}
        <Field
          name="firstname"
          placeholder="Votre prénom"
          onChange={changeField}
          value={firstname}
          label="Prénom : "
        />
        {!firstnameIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!firstnameTooLong() && <div className="errorDiv">{msgTooLong}</div>}
        <Field
          name="phoneNumber"
          placeholder="Votre téléphone"
          onChange={changeField}
          value={phoneNumber}
          label="Téléphone : "
        />
        {!phoneIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!phoneNumberTooLong() && <div className="errorDiv">{msgTooLong}</div>}
        {!regexPhone.test(phoneNumber) && <div className="errorDiv">{badPhone}</div>}
        <Field
          name="email"
          placeholder="Votre email"
          onChange={changeField}
          value={email}
          label="Email : "
        />
        {!emailIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {!regexEmail.test(email) && <div className="errorDiv">{badMail}</div>}
        <Field
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          onChange={changeField}
          value={password}
          label="Mot de passe : "
        />
        {!passWordIsEmpty() && <div className="errorDiv">{emptyInput}</div>}
        {regexPassword.test(password) && <div className="errorDiv">{msgRegex}</div>}

        <Field
          name="confirmPassword"
          type="password"
          placeholder="Confirmer votre mot de passe"
          onChange={changeField}
          value={confirmPassword}
          label="Confirmation mot de passe : "
        />
        {!comparePassword() && <div className="errorDiv">{badPassword}</div>}
        <button type="submit" className="form__input--button"><span>Envoyer le formulaire</span></button>
      </form>
    </div>
  );
};

InscriptionForm.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleCreateUser: PropTypes.func.isRequired,
};

export default InscriptionForm;
