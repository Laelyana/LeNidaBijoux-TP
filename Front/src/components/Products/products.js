import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Products.scss';

const Products = ({ name }) => (
      <>
  <Link to={`/${name}`}>
    <div className="prod prod__img prod__img--un">
      <div className="prod__band">
        <div className="prod__band--title">{name}</div>
      </div>
    </div>
    </Link>
     </>
);


export default Products;
