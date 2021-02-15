import React from 'react';

import PropTypes from 'prop-types';

import "./loginform.scss";
import { changeUserField } from '../../../actions/user';

const LoginForm = ({
  email,
  password,
  changeField,
}) => { 
  const handleChange = (evt) => {
    changeField(evt.target.value, name)
  }
  
  return (
    <div className="form__rightside">
      <h3>Vous avez déjà un compte ? Connectez vous !</h3>
      <form  className="form__login">
        <input  className="form__input" placeholder="Votre email" value={email} name="email"></input>
        <input  className="form__input" placeholder="Votre mot de passe" value={password}></input>
        <button type="submit" className="form__input">Se connecter</button>
      </form>
    </div>
);
}
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
}

export default LoginForm;
