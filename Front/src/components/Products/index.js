import React from 'react';


import './Products.scss';

const Products = () => (
  <div className="products">

    <div className="prod prod__img prod__img--un">
      <div className="prod__band">
        <div className="prod__band--title"><a href="/produit">PRODUIT 1</a></div>
      </div>
    
    </div>

    <div className="prod prod__img prod__img--deux">
      <div className="prod__band">
        <div className="prod__band--title"><a href="/produit">PRODUIT 2</a></div>
      </div>
    </div>

    <div className="prod prod__img prod__img--trois">
    
      <div className="prod__band">
        <div className="prod__band--title"><a href="/produit">PRODUIT 3</a></div>
      </div>
    </div>

  </div>
);


export default Products;
