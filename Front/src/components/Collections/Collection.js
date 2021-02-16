// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import './collections.scss'

const Collection = ({ name }) => (
  <div className="col col__img col__img--un">
    <a href="/collection/produits">
      <div className="col__center">
        <div className="col__center--title">{name}</div>
      </div>
    </a>
  </div>
);

export default Collection;
