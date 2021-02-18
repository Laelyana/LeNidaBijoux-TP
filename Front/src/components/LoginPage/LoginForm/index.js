import React from 'react';

import PropTypes from 'prop-types';
import Field from './Field';

import "./loginform.scss";

const LoginForm = ({
  username,
  password,
  changeField,
  handleLogin,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  return (
    <div className="form__rightside">
      <h3>Vous avez déjà un compte ? Connectez vous !</h3>
      <form onSubmit={handleSubmit} className="form__login">
        <Field
          name="username"
          placeholder="Votre email"
          onChange={changeField}
          value={username}
        />
        <Field
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          onChange={changeField}
          value={password}
        />

        <button type="submit" className="form__input">Se connecter</button>
      </form>
    </div>
  );
};
LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
