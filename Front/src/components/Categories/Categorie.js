// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import './categories.scss'

const Categories = ({ name }) => (
  <>
    <a href="/categorie/produits">
    <div className="cat cat__img cat__img--un">
        <div className="cat__center">
          <div className="cat__center--title">{name}</div>
        </div>
    </div>
    </a>
  </>
    );

export default Categories;
