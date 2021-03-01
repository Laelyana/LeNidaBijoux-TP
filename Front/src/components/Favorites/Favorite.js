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
  const pathUrl = `/${name}`;

  return (
    <div className="favorites__list--item">
      <a className="favorites__list--item--name" href={pathUrl}><h5>{name}</h5></a>
      <button type="button" onClick={() => handleRemoveFavorite(id)} className="favorites__list--item--button"><span>Supprimer</span></button>
    </div>
  );
};
Favorite.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Favorite;
