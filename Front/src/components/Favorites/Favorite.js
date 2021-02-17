import React from 'react';
import PropTypes from 'prop-types';

const Favorite = () => (
  <div className="favorites__list--item">
    <h5 className="favorites__list--item--name">Nom du produit</h5>
    <button type="button" className="favorites__list--item--button">Supprimer</button>
  </div>
);

export default Favorite;
