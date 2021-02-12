import React from 'react';

import PropTypes from 'prop-types';

import "./login-page.scss";

const Login = () => (
  <div className="form">
    <div className="form__leftside">
      <h3>Pas encore inscrit ? Rejoignez nous !</h3>
      <form className="form__inscription">
        <input className="form__input" placeholder="Votre nom"></input>
        <input className="form__input" placeholder="Votre prénom"></input>
        <input className="form__input" placeholder="Votre téléphone"></input>
        <input className="form__input" placeholder="Votre email"></input>
        <input className="form__input" placeholder="Votre mot de passe"></input>
        <input className="form__input" placeholder="Confirmation du mot de passe"></input>
        <button className="form__input">Envoyer le formulaire</button>
      </form>
    </div>
    <div className="form__rightside">
      <h3>Vous avez déjà un compte ? Connectez vous !</h3>
      <form className="form__login">
        <input className="form__input" placeholder="Votre email"></input>
        <input className="form__input" placeholder="Votre mot de passe"></input>
        <button className="form__input">Se connecter</button>
      </form>
    </div>
  </div>
)

export default Login;
