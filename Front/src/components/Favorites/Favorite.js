import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({ name }) => (
  <div className="favorites__list--item">
    <h5 className="favorites__list--item--name">{name}</h5>
    <button type="button" className="favorites__list--item--button">Supprimer</button>
  </div>
);
Favorite.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Favorite;
