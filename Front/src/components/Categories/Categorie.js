// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './categories.scss';

const Categories = ({ name, id }) => (
  <div className="cat cat__img cat__img--un">
    <div className="cat__center">
      <div className="cat__center--title-band"><a><Link to={`/${name}/produits`}></Link></a>{name}</div>
    </div>
  </div>
);
Categories.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Categories;
