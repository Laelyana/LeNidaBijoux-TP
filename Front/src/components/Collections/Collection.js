// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgUrl from 'src/utils/imgUrl';

import './collections.scss';

const Collection = ({ name, picture }) => (

  <div className="col col__img cat__img--un">
    <Link to={`/${name}`}>
      <div className="col__center">
        <div className="prod__band">
          <div className="col-card--title-band">{name}</div>
        </div>
        <img className="col-card" src={`${imgUrl()}${picture}`} alt="" />
      </div>
    </Link>
  </div>
);
Collection.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Collection;
