// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './categories.scss';

const Categorie = ({ name, picture }) => (
  <div className="cat cat__img cat__img--un">
  <Link to={`/${name}`}>
  <div className="cat__center">
  <div className="prod__band">
  <div className="cat-card--title-band">{name}</div></div>
  <img  className="cat-card" src={`http://0.0.0.0:8000/pictures/` + picture} alt="" /></div></Link>
  </div>
);
Categorie.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Categorie;
