import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgUrl from 'src/utils/imgUrl';

import './products.scss';

const ProductCard = ({ name, id, picture1 }) => (

  <div className="prod">

    <Link to={`/${name}`}>
      <div className="prod prod__img">

        <img id={id} className="prod__img-card" src={`${imgUrl()}${picture1}`} alt="" />

        <div className="prod__band">
          <div className="prod__band--title">{name}</div>
        </div>
      </div>
    </Link>
  </div>

);

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ProductCard;
