import React from 'react';
import PropTypes from 'prop-types';

const FavoriteAdd = ({ name }) => (
  <div className="favorites__list--item">
    <h5 className="favorites__list--item--name">{name}</h5>
    <button type="button" className="favorites__list--item--button">Supprimer</button>
  </div>
);
FavoriteAdd.propTypes = {
  name: PropTypes.string.isRequired,
};
export default FavoriteAdd;
