import React from 'react';

import PropTypes from 'prop-types';

import favoriteLogo from './heart.png';
import shopLogo from './shopping.png';

import './bandeau.scss';

const Bandeau = () => (
  <div className="bandeau">
    <div className="bandeau__timer">Timer boutique : 2 jours 4 heures 23 minutes</div>
    <div className="bandeau__rightside">
      <form className="bandeau__form">
        <input className="bandeau__input--email" placeholder="Votre email"></input>
        <input className="bandeau__input--password" placeholder="Votre mot de passe"></input>
        <button>OK</button>
        <a href="#">Créer un compte</a>
      </form>
      <div className="bandeau__icons">
        <a href="#"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" /></a>
        {/* <a href="#"> <img className="favoriteLogo" src={shopLogo} alt="Shop" />Mon panier</a> */}
      </div>
    </div>
  </div>

)

export default Bandeau;
