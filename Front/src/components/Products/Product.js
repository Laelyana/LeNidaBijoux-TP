import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './products.scss';

const Product = ({ name }) => (
  <>
  <Link to={`/${name}/produits/`}>
  <div className="products">
    <div className="prod prod__img prod__img--un">
      <div className="prod__band">
        <div className="prod__band--title">{name}</div>
      </div>
    </div>
  </div>
  </Link>
  </>
);

Product.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Product;
