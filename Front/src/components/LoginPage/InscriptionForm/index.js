import React from 'react';

import PropTypes from 'prop-types';

import "./inscriptionform.scss";

const InscriptionForm = () => (
  <div className="form__leftside">
    <h3>Pas encore inscrit ? Rejoignez nous !</h3>
    <form className="form__inscription">
      <input className="form__input" placeholder="Votre nom"></input>
      <input className="form__input" placeholder="Votre prénom"></input>
      <input className="form__input" placeholder="Votre téléphone"></input>
      <input className="form__input" placeholder="Votre email"></input>
      <input className="form__input" placeholder="Votre mot de passe"></input>
      <input className="form__input" placeholder="Confirmation du mot de passe"></input>
      <button type="submit" className="form__input">Envoyer le formulaire</button>
    </form>
  </div>
);

export default InscriptionForm;
