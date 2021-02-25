import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './products.scss';

const ProductCard = ({ name, id }) => (

  <div className="prod">
        <div className="prod prod__img prod__img--un">
          <div className="prod__band">
            <div className="prod__band--title"><Link to={`/${name}`} />{name}</div>
          </div>
        </div>
      </div>

);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductCard;
