import React from 'react';


import './Products.scss';

const Products = () => (
  <div className="products">

    <a href="/produit"><div className="prod prod__img prod__img--un">
      <div className="prod__band">
        <div className="prod__band--title">PRODUIT 1</div>
      </div>
    </div></a>

    <a href="/produit"><div className="prod prod__img prod__img--deux">
      <div className="prod__band">
        <div className="prod__band--title">PRODUIT 2</div>
      </div>
    </div></a>

    <a href="/produit"><div className="prod prod__img prod__img--trois">
      <div className="prod__band">
        <div className="prod__band--title">PRODUIT 3</div>
      </div>
    </div></a>

  </div>
);


export default Products;
