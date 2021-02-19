import React, { useEffect } from 'react';


import './Products.scss';
import Products from './Products';

const Products = ({ manageLoad, products }) => {
  useEffect(
    manageLoad,
    [],
  );
  return (
    <div className="products">
      {
        products.map((product) => (

          <Products key={product.id} {...product} />
        ))
      }
    </div>
  );
};


export default Products;
