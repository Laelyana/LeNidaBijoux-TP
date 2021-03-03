import React from 'react';
import './notfound.scss';

const NotFound = () => (
  <>
    <div className="container">
      <h1>404</h1>
      <p>
        Cette page n'existe pas
      </p>
      <small>Revenir à  <a href="/">l'accueil</a></small>
    </div>
  </>
);

export default NotFound;
