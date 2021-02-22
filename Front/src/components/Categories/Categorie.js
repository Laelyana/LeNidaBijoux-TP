// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './categories.scss';

const Categories = ({ name }) => (
  <>
    <Link to={`/${name}/produits`}>
      <div className="cat cat__img cat__img--un">
        <div className="cat__center">
          <div className="cat__center--title">{name}</div>
        </div>
      </div>
    </Link>
  </>
);
Categories.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Categories;
