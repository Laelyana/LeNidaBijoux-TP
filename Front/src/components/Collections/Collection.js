// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

import './collections.scss'

const Collection = ({ name }) => (
  <>
    <a href="/collection/produits">
    <div className="col col__img col__img--un">
      <div className="col__center">
        <div className="col__center--title">{name}</div>
      </div>
    </div>
    </a>
  </>
    );

export default Collection;
