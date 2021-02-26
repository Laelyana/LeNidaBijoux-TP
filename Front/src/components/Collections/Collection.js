// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './collections.scss';

const Collection = ({ name, picture }) => (
  
  <Link to={`/${name}`}>
  <div className="col__img">
  <img  className="col-card" src={`http://0.0.0.0:8000/pictures/` + picture} alt="" />
    <div className="col__center">
      <div className="col__center--title-band"><Link to={`/${name}`} />{name}</div>
    </div>
  </div>
  </Link>
);
Collection.propTypes = {
  name: PropTypes.string.isRequired,
};
export default Collection;


