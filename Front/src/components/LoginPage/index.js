import React from 'react';

import './login-page.scss';
import LoginForm from 'src/containers/LoginForm';
import InscriptionForm from 'src/containers/InscriptionForm';

const LoginPage = () => (
  <div className="form">
    <InscriptionForm />
    <LoginForm />
  </div>
);

export default LoginPage;
