import React from 'react';

import PropTypes from 'prop-types';

import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';
import favoriteLogo from './heart.png';
import shopLogo from './shopping.png';
import './bandeau.scss';
import { selectCartItemsCount } from '../../utils/card.selectors';

const mapState = createStructuredSelector({
  cartItemsCount: selectCartItemsCount,
});

const Bandeau = ({ isLogged, handleLogout, status }) => {
  const { cartItemsCount } = useSelector(mapState);
  console.log(status);
  return (

    <div className="bandeau">
      {!status && (<div className="bandeau__timer"><span class="bandeau__boutique_attente">La boutique ouvrira bientôt...</span></div>)}
      {status && (<div className="bandeau__timer">LA BOUTIQUE EST ACTUELLEMENT OUVERTE !</div>)}
      <div className="bandeau__rightside">
        {!isLogged
          && (<div className="notlogged"> <button className="btn__log" type="button"> <a href="/login">S'inscrire / Se connecter</a> </button> </div>)}
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
                {!status && (<a href="/mon-compte/mes-favoris"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" />()</a>)}
                {status && (<a href="/mon-compte/mon-panier"> Mon panier ({cartItemsCount}){/* <img className="favoriteLogo" src={shopLogo} alt="Shop" /> */}</a>)}
              </div>
            )}
        </div>
      </div>
    </div>

  );
};

Bandeau.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  status: PropTypes.bool.isRequired,
};

export default Bandeau;
