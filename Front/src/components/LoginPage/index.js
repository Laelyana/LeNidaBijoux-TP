import React from 'react';

import PropTypes from 'prop-types';

import "./login-page.scss";
import InscriptionForm from './InscriptionForm';
import LoginForm from './LoginForm';

const LoginPage = () => (
  <div className="form">
    <InscriptionForm />
    <LoginForm />
  </div>
)

export default LoginPage;
