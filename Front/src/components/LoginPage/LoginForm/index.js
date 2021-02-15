import React from 'react';

import PropTypes from 'prop-types';

import "./loginform.scss";

const LoginForm = ({
  email,
  password,
  changeField,
}) => (
    <div className="form__rightside">
      <h3>Vous avez déjà un compte ? Connectez vous !</h3>
      <form onSubmit={handleSubmit} className="form__login">
        <input onChange={changeField} className="form__input" placeholder="Votre email"></input>
        <input onChange={changeField} className="form__input" placeholder="Votre mot de passe"></input>
        <button type="submit" className="form__input">Se connecter</button>
      </form>
    </div>
);

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
}

export default LoginForm;
