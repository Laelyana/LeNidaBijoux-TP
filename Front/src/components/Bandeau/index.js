import React from 'react';

import PropTypes from 'prop-types';

import favoriteLogo from './heart.png';
import shopLogo from './shopping.png';

import './bandeau.scss';

const Bandeau = () => (
  <div className="bandeau">
    <div className="bandeau__timer">Timer boutique : 2 jours 4 heures 23 minutes</div>
    <div className="bandeau__rightside">
      <button>Connexion</button>
      <div className="bandeau__icons">
        <a href="#"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" /></a>
        <a href="#"> <img className="favoriteLogo" src={shopLogo} alt="Shop" /></a>
      </div>
    </div>
  </div>

)

export default Bandeau;
