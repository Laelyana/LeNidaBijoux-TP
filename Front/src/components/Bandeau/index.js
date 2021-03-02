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

const Bandeau = ({ isLogged, handleLogout, status, favorites }) => {
  const { cartItemsCount } = useSelector(mapState);
  const favoritesCount = favorites.length;
  console.log(favoritesCount);
  console.log(status);
  return (

    <div className="bandeau">
      {!status && (<div className="bandeau__timer"><span className="bandeau__boutique_attente">La boutique ouvrira bientôt...</span></div>)}
      {status && (<div className="bandeau__timer">LA BOUTIQUE EST ACTUELLEMENT OUVERTE !</div>)}
      <div className="bandeau__rightside">
        {!isLogged
          && (<div className="notlogged"> <button className="btn__log" type="button"> <a href="/login"><span>S'inscrire / Se connecter</span></a> </button> </div>)}
        {isLogged
          && (
            <div className="logged">
              <button className="btn__log" onClick={handleLogout} type="button"><span>Se déconnecter</span></button>
              <button className="btn__log" type="button"> <a href="/mon-compte"><span>Mon compte</span></a></button>
            </div>
          )}
        <div className="bandeau__icons">
          {isLogged
            && (
              <div>
                {!status && (<a href="/mon-compte/mes-favoris"> <img className="favoriteLogo" src={favoriteLogo} alt="Favoris" />({favoritesCount})</a>)}
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
