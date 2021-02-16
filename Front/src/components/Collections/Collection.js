// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './collections.scss'

const Collection = ({ name }) => (
    <div className="col col__img col__img--un">
      <div className="col__center">
        <div className="col__center--title"><a><Link to={`/${name}/produits`}>{name}</Link></a></div>
      </div>
    </div>
    );

export default Collection;
