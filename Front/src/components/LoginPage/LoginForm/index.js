import React from 'react';

import PropTypes from 'prop-types';
import Field from './Field';

import './loginform.scss';

const LoginForm = ({
  username,
  password,
  changeField,
  handleLogin,
  errMsg,
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
          label="Email : "
        />
        <Field
          name="password"
          type="password"
          placeholder="Votre mot de passe"
          onChange={changeField}
          value={password}
          label="Mot de passe : "
        />
        {errMsg && (<div className="errorDiv"> {errMsg} </div>) }

        <button type="submit" className="form__input--button"><span>Se connecter</span></button>
      </form>
    </div>
  );
};
LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  errMsg: PropTypes.string.isRequired,
};

export default LoginForm;
