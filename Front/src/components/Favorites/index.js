import React from 'react';

import './favorites.scss';

const Favorites = () => (
  <div className="favorites">
    <h2>Mes produits favoris</h2>
    <a href="#" className="favorites__back">Revenir au tableau de bord</a>
    <div className="favorites__list">
      <div className="favorites__list--item">
        <h5 className="favorites__list--item--name">Nom du produit</h5>
        <button className="favorites__list--item--button">Supprimer</button>
      </div>
      <div className="favorites__list--item">
        <h5 className="favorites__list--item--name">Nom du produit</h5>
        <button className="favorites__list--item--button">Supprimer</button>
      </div>
      <div className="favorites__list--item">
        <h5 className="favorites__list--item--name">Nom du produit</h5>
        <button className="favorites__list--item--button">Supprimer</button>
      </div>
    </div>
  </div>
)

export default Favorites;
