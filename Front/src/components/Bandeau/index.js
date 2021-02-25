import React from 'react';

import PropTypes from 'prop-types';

import favoriteLogo from './heart.png';
import shopLogo from './shopping.png';

import './bandeau.scss';

const Bandeau = ({ isLogged, handleLogout, status, cartItems }) => (

  <div className="bandeau">
    {!status && (<div className="bandeau__timer">Passage du site en mode boutique dans : 2 jours 4 heures 23 minutes</div>)}
    {status && (<div className="bandeau__timer">Fin de la vente dans : 2 jours 4 heures 23 minutes</div>)}
    <div className="bandeau__rightside">
      {!isLogged
        && (<div className="notlogged"> <button className="btn__log" type="button"> <a href="/login">Se connecter</a> </button> </div>)}
      {isLogged
        && (
          <div className="logged">
            <button className="btn__log" onClick={handleLogout} type="button">Se déconnecter</button>
            <button className="btn__log" type="button"> <a href="/mon-compte">Mon compte</a></button>
          </div>
        )}
      <div className="bandeau__icons">
        {isLogged
          && (
            <div>
              {!status && (<a href="/mon-compte/mes-favoris"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" /></a>)}
              {status && (<a href="/mon-compte/mon-panier"> Mon panier ({cartItems.length}){/* <img className="favoriteLogo" src={shopLogo} alt="Shop" /> */}</a>)}
            </div>
          )}
      </div>
    </div>
  </div>

);

Bandeau.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};


export default Bandeau;
