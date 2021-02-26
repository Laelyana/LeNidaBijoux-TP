// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './categories.scss';

const Categorie = ({ name, picture }) => (
  <div className="cat cat__img cat__img--un">
  
    <div className="cat__center">
      <div className="cat__center--title-band"><Link to={`/${name}`} />{name}</div>
    </div>
  </div>
);
Categorie.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Categorie;
