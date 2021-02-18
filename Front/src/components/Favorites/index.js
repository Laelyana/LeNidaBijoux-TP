import React, { useEffect } from 'react';

import './favorites.scss';
import Favorite from './Favorite';

const Favorites = ({ manageLoad, favorites }) => {
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
          favorites.map((favorite) => (

            <Favorite key={favorite.id} {...favorite} />
          ))
        }

      </div>
    </div>
  );
};

export default Favorites;
