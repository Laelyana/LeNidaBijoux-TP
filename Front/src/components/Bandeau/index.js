import React from 'react';

import PropTypes from 'prop-types';

import favoriteLogo from './heart.png';
import shopLogo from './shopping.png';

import './bandeau.scss';

const Bandeau = () => (
  <div className="bandeau">
    <div className="bandeau__timer">Timer boutique : 2 jours 4 heures 23 minutes</div>
    <form className="bandeau__form">
      <input className="bandeau_input--email" placeholder="Votre email"></input>
      <input className="bandeau_input--password" placeholder="Votre mot de passe"></input>
      <button>OK</button>
      <a href="#">Créer un compte</a>
    </form>
    <div className="bandeau__icons">
      <a href="#"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" />Mes favoris</a>
      <a href="#"> <img className="favoriteLogo" src={shopLogo} alt="Shop" />Mon panier</a>
    </div>
  </div>

)

export default Bandeau;
