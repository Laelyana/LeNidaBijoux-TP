import React from 'react';
import PropTypes from 'prop-types';
import Field from './Field';

import './inscriptionform.scss';

const InscriptionForm = ({
  firstname,
  lastname,
  email,
  password,
  phoneNumber,
  changeField,
  handleCreateUser,
  emptyInput,
  badMail,
  badPhone,
  badPassword,
  /*   emptyInput,
    badMail,
    badPhone,
    badPassword, */
}) => {
  const handleNewSubmit = (evt) => {
    evt.preventDefault();
    handleCreateUser();
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
        {!lastname && emptyInput}
        <Field
          name="firstname"
          placeholder="Votre prénom"
          onChange={changeField}
          value={firstname}
          label="Prénom : "
        />
        {!firstname && emptyInput}
        <Field
          name="phoneNumber"
          placeholder="Votre téléphone"
          onChange={changeField}
          value={phoneNumber}
          label="Téléphone : "
        />
        {!phoneNumber && emptyInput}
        <Field
          name="email"
          placeholder="Votre email"
          onChange={changeField}
          value={email}
          label="Email : "
        />
        {!email && emptyInput}
        {!email.includes('@') && badMail}
        <Field
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          onChange={changeField}
          value={password}
          label="Mot de passe : "
        />
        {!password && emptyInput}
        <button type="submit" className="form__input">Envoyer le formulaire</button>
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
