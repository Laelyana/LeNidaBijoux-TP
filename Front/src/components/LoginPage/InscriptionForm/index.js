import React from 'react';
import Field from './Field';

import PropTypes from 'prop-types';

import "./inscriptionform.scss";

const InscriptionForm = ({
  firstname,
  lastname,
  email,
  password,
  phoneNumber,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div className="form__leftside">
      <h3>Pas encore inscrit ? Rejoignez nous !</h3>
      <form onSubmit={handleSubmit} className="form__inscription">
        <Field
          name="lastname"
          placeholder="Votre nom"
          onChange={changeField}
          value={lastname}
        />
        <Field
          name="firstname"
          placeholder="Votre prénom"
          onChange={changeField}
          value={firstname}
        />
        <Field
          name="phoneNumber"
          placeholder="Votre téléphone"
          onChange={changeField}
          value={phoneNumber}
        />
        <Field
          name="email"
          placeholder="Votre email"
          onChange={changeField}
          value={email}
        />
        <Field
          name="password"
          placeholder="Votre mot de passe"
          onChange={changeField}
          value={password}
        />
        <Field
          name="confirmPassword"
          placeholder="Confirmation du mot de passe"
          onChange={changeField}
        />
        <button type="submit" className="form__input">Envoyer le formulaire</button>
      </form>
    </div>
  );
};

export default InscriptionForm;
