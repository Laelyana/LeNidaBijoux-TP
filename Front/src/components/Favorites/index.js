import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './favorites.scss';
import Favorite from './Favorite';

const Favorites = ({ manageLoad, favorites }) => {
  useEffect(
    manageLoad,
    [],
  );
  console.log(favorites);
  return (
    <div className="favorites">
      <h2 className="favorites--title">Mes produits favoris</h2>
 
      <div className="favorites__list">
        {
          favorites.map((favorite) => (

            <Favorite key={favorite.id} {...favorite} />
          ))
        }

      </div>
      <a href="/mon-compte" className="favorites__back">Revenir au tableau de bord</a>
    </div>
  );
};
Favorites.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Favorites;
