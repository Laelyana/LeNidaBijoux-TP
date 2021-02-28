import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFavorite } from '../../actions/favoritesAdd';

const Favorite = ({ name, id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const handleRemoveFavorite = (id) => {
    dispatch(addToFavorite(id));
    dispatch(removeFavorite(id));
  };

  return (
    <div className="favorites__list--item">
      <h5 className="favorites__list--item--name">{name}</h5>
      <button type="button" onClick={() => handleRemoveFavorite(id)} className="favorites__list--item--button">Supprimer</button>
    </div>
  );
};
Favorite.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Favorite;
