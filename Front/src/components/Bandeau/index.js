import React from 'react';

import PropTypes from 'prop-types';

import favoriteLogo from './heart.png';
import shopLogo from './shopping.png';

import './bandeau.scss';

const Bandeau = () => (
  <div className="bandeau">
    <div className="bandeau__timer">Timer boutique : 2 jours 4 heures 23 minutes</div>
    <div className="bandeau__rightside">
      <a href="/login">Se connecter</a>
      <a href="/mon-compte">Mon compte</a>
      <div className="bandeau__icons">
        <a href="/mon-compte/mes-favoris"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" /></a>
        <a href="/mon-compte/mon-panier"> <img className="favoriteLogo" src={shopLogo} alt="Shop" /></a>
      </div>
    </div>
  </div>
);

export default Bandeau;
