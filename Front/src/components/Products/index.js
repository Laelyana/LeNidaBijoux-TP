import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './products.scss';
import ProductCard from './ProductCard';

const Products = ({ manageLoad, products }) => {
  useEffect(
    manageLoad,
    [],
  );

  console.log(products);
  return (
    <div className="products">
      {
        products.map((product) => (

          <ProductCard key={product.id} {...product} />
        ))
      }
    </div>
  );
};
Products.propTypes = {
  manageLoad: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
export default Products;
