import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './products.scss';

const ProductCard = ({ name, id }) => (
  <>
    <Link to={`/${name}/`}>
      <div className="products">
        <div className="prod prod__img prod__img--un">
          <div className="prod__band">
          <div className="prod__band--title"><a><Link to={`/${id}/`}></Link></a>{name}</div>
          </div>
        </div>
      </div>
    </Link>
  </>
);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductCard;
