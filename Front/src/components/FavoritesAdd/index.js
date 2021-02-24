import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './favoritesAdd.scss';
import FavoriteAdd from './FavoriteAdd';

const FavoritesAdd = ({ manageLoad, favoritesAdd }) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div className="favorites">
      <h2>Mes produits favoris</h2>
      <a href="/mon-compte" className="favorites__back">Revenir au tableau de bord</a>
      <div className="favorites__list">
        {
          favoritesAdd.map((favoriteAdd) => (

            <FavoriteAdd key={favoriteAdd.id} {...favoriteAdd} />
          ))
        }

      </div>
    </div>
  );
};
FavoritesAdd.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  favoritesAdd: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default FavoritesAdd;
