import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToFavorite, removeFavorite } from '../../actions/favoritesAdd';
import imgUrl from 'src/utils/imgUrl';

const Favorite = ({ name, id, picture1 }) => {
  console.log(picture1);
  const dispatch = useDispatch();
  const handleRemoveFavorite = (id) => {
    dispatch(addToFavorite(id));
    dispatch(removeFavorite(id));
  };
  const pathUrl = `/${name}`;

  return (
    <div className="favorites__list--item">
       <img className="col-card" src={`${imgUrl()}${picture1}`} alt="" />
      <a className="favorites__list--item--name" href={pathUrl}>{name}</a>
      <button type="button" onClick={() => handleRemoveFavorite(id)} className="favorites__list--item--button"><span>Supprimer</span></button>
    </div>
  );
};
Favorite.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Favorite;
