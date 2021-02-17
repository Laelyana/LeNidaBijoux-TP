import React from 'react';

import PropTypes from 'prop-types';

import './login-page.scss';
import LoginForm from 'src/containers/LoginForm';
import InscriptionForm from './InscriptionForm';

const LoginPage = () => (
  <div className="form">
    <InscriptionForm />
    <LoginForm />
  </div>
);

export default LoginPage;
